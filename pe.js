function pejs() {
  var pejs = document.createElement('div');
  pejs.innerHTML="<iframe id='ytplayer' style='position:fixed;top:0px;right:0px' type='text/html' width='400' height='225' src='https://www.youtube.com/embed/uQqJVweHq6M?controls=0&autoplay=1' frameborder='0' allowfullscreen>";
  document.documentElement.lastChild.appendChild(pejs)
}

if (window.addEventListener) {
  window.addEventListener('load', pejs, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', pejs );
}
