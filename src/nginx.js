const code = `server {
  listen 173.255.219.235:80;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {
  listen 173.255.219.235:443;
  server_name website.com.au;
  rewrite / $scheme://www.$host$request_uri permanent; ## Forcibly prepend a www
}

server {

  listen      173.255.219.235:80;
  server_name www.website.com.au;



  root        /data/www;
  index       index.html index.php;

  location / {
    index index.html index.php;     ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler;  ## If missing pass the URI to Magento's front handler
    expires 30d;                    ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file /rs/passwords/testfile; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ \\.php$ {
    if (!-e $request_filename) { rewrite / /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;
  }

}


server {

  listen              173.255.219.235:443;
  server_name         website.com.au www.website.com.au;

  root   /data/www;
  index index.html index.php;

  ssl                 on;
  ssl_certificate     /rs/ssl/ssl.crt;
  ssl_certificate_key /rs/ssl/ssl.key;

  ssl_session_timeout  5m;

  ssl_protocols  SSLv2 SSLv3 TLSv1;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers   on;



  location / {
    index index.html index.php; ## Allow a static html file to be shown first
    try_files $uri $uri/ @handler; ## If missing pass the URI to Magento's front handler
    expires 30d; ## Assume all files are cachable
  }

  ## These locations would be hidden by .htaccess normally
  location /app/                { deny all; }
  location /includes/           { deny all; }
  location /lib/                { deny all; }
  location /media/downloadable/ { deny all; }
  location /pkginfo/            { deny all; }
  location /report/config.xml   { deny all; }
  location /var/                { deny all; }

  location /var/export/ { ## Allow admins only to view export folder
    auth_basic           "Restricted"; ## Message shown in login window
    auth_basic_user_file htpasswd; ## See /etc/nginx/htpassword
    autoindex            on;
  }

  location  /. { ## Disable .htaccess and other hidden files
    return 404;
  }

  location @handler { ## Magento uses a common front handler
    rewrite / /index.php;
  }

  location ~ .php/ { ## Forward paths like /js/index.php/x.js to relevant handler
    rewrite ^/(.*.php)/ /$1 last;
  }

  location ~ .php$ { ## Execute PHP scripts
    if (!-e $request_filename) { rewrite  /index.php last; } ## Catch 404s that try_files miss

    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param PATH_INFO $fastcgi_script_name;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        /rs/confs/nginx/fastcgi_params;

    fastcgi_param HTTPS on;
  }

}
`;

 export default code;