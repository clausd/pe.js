var old_onload = window.onload;
window.onload = function() {
  if (old_onload != null) {
    old_onload();
  }
  var pejs = document.createElement('div');
  pejs.innerHTML="<iframe id='ytplayer' style='position:fixed;top:0px;right:0px' type='text/html' width='400' height='225' src='https://www.youtube.com/embed/uQqJVweHq6M?controls=0&autoplay=1' frameborder='0' allowfullscreen>";
  document.documentElement.lastChild.appendChild(pejs)
};

