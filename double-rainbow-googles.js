(function() {
  var rainbow = '<div style=\"position: relative; display: inline-block;\">',
      rainbowCover = '<div style=\"display: inline-block;\">',
      rainbowAfter = '<div style=\"content: \'\'; position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: inline-block; background: -moz-linear-gradient(top, rgba(231,28,57,0.7) 0%, rgba(245,143,35,0.7) 20%, rgba(244,236,37,0.7) 40%, rgba(87,173,72,0.7) 60%, rgba(28,97,174,0.7) 80%, rgba(91,67,155,0.7) 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(231,28,57,0.7)), color-stop(20%,rgba(245,143,35,0.7)), color-stop(40%,rgba(244,236,37,0.7)), color-stop(60%,rgba(87,173,72,0.7)), color-stop(80%,rgba(28,97,174,0.7)), color-stop(100%,rgba(91,67,155,0.7))); background: -webkit-linear-gradient(top, rgba(231,28,57,0.7) 0%,rgba(245,143,35,0.7) 20%,rgba(244,236,37,0.7) 40%,rgba(87,173,72,0.7) 60%,rgba(28,97,174,0.7) 80%,rgba(91,67,155,0.7) 100%); background: -o-linear-gradient(top, rgba(231,28,57,0.7) 0%,rgba(245,143,35,0.7) 20%,rgba(244,236,37,0.7) 40%,rgba(87,173,72,0.7) 60%,rgba(28,97,174,0.7) 80%,rgba(91,67,155,0.7) 100%); background: -ms-linear-gradient(top, rgba(231,28,57,0.7) 0%,rgba(245,143,35,0.7) 20%,rgba(244,236,37,0.7) 40%,rgba(87,173,72,0.7) 60%,rgba(28,97,174,0.7) 80%,rgba(91,67,155,0.7) 100%); background: linear-gradient(to bottom, rgba(231,28,57,0.7) 0%,rgba(245,143,35,0.7) 20%,rgba(244,236,37,0.7) 40%,rgba(87,173,72,0.7) 60%,rgba(28,97,174,0.7) 80%,rgba(91,67,155,0.7) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#e71c39\', endColorstr=\'#5b439b\',GradientType=0 );"></div></div>';

  function rainbowGoogles() {
    var imgs = document.querySelectorAll("img:not(.rainbow)"),
        len = imgs.length;
    for (var i = 0; i < len; i++) {
      imgs[i].className = imgs[i].className + " rainbow";
      if (imgs[i].className.indexOf("_xlg") == -1) {
        imgs[i].outerHTML = rainbow + imgs[i].outerHTML + rainbowAfter;
      } else {
        imgs[i].outerHTML = rainbowCover + imgs[i].outerHTML + rainbowAfter;
      }
    }
  };
  rainbowGoogles();

  setInterval(rainbowGoogles, 500);
})()
