const code = `$baseFontSizeInPixels: 14;

@function px2em ($font_size, $base_font_size: $baseFontSizeInPixels) {  
  @return ($font_size / $base_font_size) + em; 
}

h1 {
  font-size: px2em(36, $baseFontSizeInPixels);
}
h2  {
  font-size: px2em(28, $baseFontSizeInPixels);
}
.class {
  font-size: px2em(14, $baseFontSizeInPixels);
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
  
  @each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
    }
  }
}`;

 export default code;