window.onload =function () {
  var cvs = document.getElementById("canvas");
  var ctx =cvs.getContext("2d");

  var bird = new Image();
  var bg = new Image();
  var fg = new Image();
  var pipeNorth = new Image();
  var pipeSouth = new Image();

  bird.src="img/bird.png";
  bg.src="img/bg.png";
  fg.src="img/fg.png";
  pipeNorth.src="img/pipeNorth.png";
  pipeSouth.src="img/pipeSouth.png";

  var gap=80;
  var constant;

  //bird's position
  var bX=10;
  var bY=150;
  var score=0;
  //gravitation
    var gravity=1.7;

    //keydown
    document.addEventListener("keydown",function () {
      bY-=30;
      fly.play();
    });

    //add audio
    var fly= new Audio();
    var Score = new Audio();
    fly.src="sounds/fly.mp3";
    Score.src="sounds/score.mp3";

    //pipe coordinates
    var pipe=[];
    pipe[0]={
      x: cvs.width,
      y:0
    };

  draw();

    //draw obj
    function draw() {
      //draw background
      ctx.drawImage(bg,0,0);
      for (var i =0; i<pipe.length;i++){
        constant=pipeNorth.height+gap;
          //draw top pipe
          ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
          //draw bottom pipe
          ctx.drawImage(pipeSouth, pipe[i].x,pipe[i].y+constant);

          //move pipes
          pipe[i].x--;

          //add new pipes
          if(pipe[i].x==125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
          }

          //bit about pipes
          if(bX+bird.width>=pipe[i].x && bX<=pipe[i].x+pipeNorth.width &&
              (bY<=pipe[i].y+pipeNorth.height || bY+bird.height>=pipe[i].y+constant)
              || bY+bird.height>=cvs.height-fg.height){
            location.reload();
          }

          //score
          if(pipe[i].x==5){
            score++;
              Score.play();
          }
      }

      //draw ground
      ctx.drawImage(fg,0,cvs.height-fg.height);
      //draw bird
      ctx.drawImage(bird,bX, bY);

      bY+=gravity;


      //draw score
        ctx.fillStyle="#000";
        ctx.font="16px Century Gothic";
        ctx.fillText("Score: "+score,10,cvs.height-20);
      requestAnimationFrame(draw);
    }
};

