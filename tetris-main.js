    //Define inital variables
    
    var canvas;
    var ctx;
    var dx = 5; //x-axis movement
    var dy = 5; //y-axis movement
    var x = 150; //x-axis position
    var y = -50; //y-axis position
    
    //DEFINE AN EVENT LISTENER
    //Step 1: start the following line on page load...
    window.onload = function()
    {
  window.addEventListener('keydown',pressArrowKeys,true);
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      return setInterval(draw,5);
    }
    
    //FUNCTION CALLED WHEN USER PRESSES ONE OF THE ARROWS
    //We are trying to find out what key the user pressed
    function pressArrowKeys(event)
    {
        switch (event.keyCode)
          {
              //Disable usage of 'up' and 'down' arrow
            /* case 38: 
                y -= dy;
                break;
        
            case 40:
                y += dy;
                break; */
              
            case 37: //LEFT
                x -= dx;//Substraction assignment on x-axis
                break;
              
            case 39: //RIGHT
                x += dx;//Addition assignment on x-axis
                break;
          }
    }
    
   //INITIATE DRAW FUNCTION
      function draw()
      {
          ctx.clearRect(0, 0, 500, 500);//RE-DRAW CANVAS ON EACH ACTION
        //RE-DRAW OBJECT
          ctx.beginPath();
          ctx.arc(x,y,10,0,2*Math.PI);
          ctx.fill();
          y +=.002;
          var loopTimer = setTimeout('draw('+x+','+y+')',0,2000);
      }