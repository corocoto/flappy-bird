export default class Scene {
	constructor () {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');

		this.gap=80;

		/** Bird's position */
		this.bX=10;
		this.bY=150;

		/** Starter score */
		this.score=0;

		/** Gravitation */
		this.gravity=1.7;

		/** Pipe coordinates */
		this.pipe=[];
		this.pipe[0]={
			x : this.canvas.width,
			y : 0,
		};


		this.initObjs();
		this.initSounds();
	}

	initObjs () {
		this.bird = new Image();
		this.bg = new Image();
		this.fg = new Image();
		this.pipeNorth = new Image();
		this.pipeSouth = new Image();
	}

	initSounds () {
		this.fly= new Audio();
		this.scoreAudio = new Audio();
	}

	setImages () {
		this.bird.src = 'dist/img/bird.png';
		this.bg.src='dist/img/bg.png';
		this.fg.src='dist/img/fg.png';
		this.pipeNorth.src='dist/img/pipeNorth.png';
		this.pipeSouth.src='dist/img/pipeSouth.png';
	}

	setSounds () {
		this.fly.src='dist/sounds/fly.mp3';
		this.scoreAudio.src='dist/sounds/score.mp3';
	}

	settings () {
		this.setImages();
		this.setSounds();
		document.addEventListener('keydown', this.keyDownPress.bind(this));
	}


	keyDownPress () {
		this.bY-=30;
		this.fly.play();
	}

	renderer () {
		/** Draw background */
		this.ctx.drawImage(this.bg, 0, 0);
		for (let i = 0; i<this.pipe.length;i++) {
			const constant=this.pipeNorth.height+this.gap;

			/** Draw top pipe */
			this.ctx.drawImage(this.pipeNorth, this.pipe[i].x, this.pipe[i].y);

			/** Draw bottom pipe */
			this.ctx.drawImage(this.pipeSouth, this.pipe[i].x, this.pipe[i].y+constant);

			/** Move pipes */
			this.pipe[i].x--;

			/** Add new pipes */
			if (this.pipe[i].x === 125) {
				this.pipe.push({
					x : this.canvas.width,
					y : Math.floor(Math.random()*this.pipeNorth.height)-this.pipeNorth.height,
				});
			}

			/** Bit about pipes */
			if (this.bX+this.bird.width >= this.pipe[i].x && this.bX <= this.pipe[i].x+this.pipeNorth.width &&
          (this.bY<=this.pipe[i].y+this.pipeNorth.height || this.bY+this.bird.height>=this.pipe[i].y+constant)
          || this.bY+this.bird.height>=this.canvas.height-this.fg.height) {
				location.reload();
			}

			/** Change score */
			if (this.pipe[i].x === 5) {
				this.score++;
				this.scoreAudio.play();
			}
		}

		/** Draw ground */
		this.ctx.drawImage(this.fg, 0, this.canvas.height-this.fg.height);

		/** Draw bird */
		this.ctx.drawImage(this.bird, this.bX, this.bY);

		this.bY+=this.gravity;


		/** Draw score */
		this.ctx.fillStyle='#000';
		this.ctx.font='16px Century Gothic';
		this.ctx.fillText(`Score: ${this.score}`, 10, this.canvas.height-20);
		requestAnimationFrame(this.renderer.bind(this));
	}
}




