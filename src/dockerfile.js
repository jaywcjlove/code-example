const code = `FROM mono:3.12

ENV KRE_FEED https://www.myget.org/F/aspnetvnext/api/v2
ENV KRE_USER_HOME /opt/kre

RUN apt-get -qq update && apt-get -qqy install unzip 

ONBUILD RUN curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/kvminstall.sh | sh
ONBUILD RUN bash -c "source $KRE_USER_HOME/kvm/kvm.sh \
    && kvm install latest -a default \
    && kvm alias default | xargs -i ln -s $KRE_USER_HOME/packages/{} $KRE_USER_HOME/packages/default"

# Install libuv for Kestrel from source code (binary is not in wheezy and one in jessie is still too old)
RUN apt-get -qqy install \
    autoconf \
    automake \
    build-essential \
    libtool 
RUN LIBUV_VERSION=1.0.0-rc2 \
    && curl -sSL https://github.com/joyent/libuv/archive/v\${LIBUV_VERSION}.tar.gz | tar zxfv - -C /usr/local/src \
    && cd /usr/local/src/libuv-$LIBUV_VERSION \
    && sh autogen.sh && ./configure && make && make install \
    && rm -rf /usr/local/src/libuv-$LIBUV_VERSION \
    && ldconfig

ENV PATH $PATH:$KRE_USER_HOME/packages/default/bin

# Extra things to test
RUN echo "string at end"
RUN echo must work 'some str' and some more
RUN echo hi this is # not a comment
RUN echo 'String with \${VAR} and another $one here'`;

 export default code;