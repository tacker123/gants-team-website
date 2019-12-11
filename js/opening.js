/*openingpage*/
(function(){
  var b;
  var x=0, y=0;
  /*var dx = Math.random()*300;
  var dy = Math.random()*300;*/
  var dx = 600;
  var dy = 80;

  function init(){
    b = document.getElementById('santa');
    console.log('started...');
    moveSanta();
  }

  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
  })();

  function moveSanta(){
    x += (dx-x) * 0.015;
    y += (dy-x) * 0.015;
    b.style.left = x + "px";
    /*b.style.top = y + "px";*/
    b.style.top = 80 + "px";
    if(Math.abs(x-dx) < 1){
/*    dx = Math.random()*300;
      dy = Math.random()*300;
      x = 10;*/
      if (dx > 10){
        b.style.transform = "scaleX(-1)";
        dx = 10;}
      else {
        b.style.transform = "scaleX(1)";
        dx = document.documentElement.clientWidth - 360;
      }

    }
    requestAnimFrame(moveSanta, b);
  }

  init();

})()
