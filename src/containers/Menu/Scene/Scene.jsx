import React, {Component} from 'react';
import classes from './Scene.module.css';

/* Images importing*/
import Background from '../../../assets/images/bg.png';
import Bird from '../../../assets/images/bird.png';
import Ground from '../../../assets/images/fg.png';
import PipeNorth from '../../../assets/images/pipeNorth.png';
import PipeSouth from '../../../assets/images/pipeSouth.png';

/* Sounds importing */
import FlySound from '../../../assets/sounds/fly.mp3';
import ScoreSound from '../../../assets/sounds/score.mp3';

export default class Scene extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.imgs = [Background, Bird, Ground, PipeNorth, PipeSouth];
        this.sounds = [FlySound, ScoreSound];
        this.state = {
            gap: 80,
            /* Gravitation */
            gravity: 1.7
        }
        this.keyDownPressHandler = this.keyDownPressHandler.bind(this);
        this.startAnimationLoop = this.startAnimationLoop.bind(this);
    }

    componentDidMount() {
        this.initCtx();
        this.setStarterVals();
        const sceneObjs = this.initSceneObjs();
        Promise.all(sceneObjs).then(()=>{
            this.initSceneSounds();
            this.startAnimationLoop();
            window.addEventListener('keydown', this.keyDownPressHandler);
            this.canvasRef.current.addEventListener('touchstart', this.keyDownPressHandler);
        });
    }

    initCtx(){
        this.ctx = this.canvasRef.current.getContext('2d')
    }

    setStarterVals() {

        /* Bird's position */
        this.bX = 10;
        this.bY = 150;

        /* Starter score */
        this.scoreCount = 0;


        /* Pipe coordinates */
        this.pipe = [];
        this.pipe[0] = {
            x: this.canvasRef.current.width,
            y: 0,
        };
    }

    initSceneObjs() {
        const sceneObjs = [];
        this.imgs.forEach(img => {
            const imgName = this.getName(img);
            this[imgName] = new Image();
            this[imgName].src = img;
            sceneObjs.push(this[imgName]);
            this[imgName].onload = () => Promise.resolve();
        });
        return sceneObjs;
    }

    initSceneSounds() {
        this.sounds.forEach(sound => this[this.getName(sound)] = new Audio(sound));
    }

    getName(file) {
        return file.split('/').pop().split('.').shift();
    }

    keyDownPressHandler() {
        this.bY -= 30;
        this.fly.play();
    }

    startAnimationLoop() {
        /* Draw background */
        this.ctx.drawImage(this.bg, 0, 0);
        for (let i = 0; i < this.pipe.length; i++) {
            const constant = this.pipeNorth.height + this.state.gap;

            /* Draw top pipe */
            this.ctx.drawImage(this.pipeNorth, this.pipe[i].x, this.pipe[i].y);

            /* Draw bottom pipe */
            this.ctx.drawImage(this.pipeSouth, this.pipe[i].x, this.pipe[i].y + constant);

            /* Move pipes */
            this.pipe[i].x--;

            /* Add new pipes */
            if (this.pipe[i].x === 125) {
                this.pipe.push({
                    x: this.canvasRef.current.width,
                    y: Math.floor(Math.random() * this.pipeNorth.height) - this.pipeNorth.height,
                });
            }

            /* Bit about pipes */
            if ((this.bX + this.bird.width >= this.pipe[i].x && this.bX <= this.pipe[i].x + this.pipeNorth.width &&
                (this.bY <= this.pipe[i].y + this.pipeNorth.height || this.bY + this.bird.height >= this.pipe[i].y + constant))
                || this.bY + this.bird.height >= this.canvasRef.current.height - this.fg.height) {
                window.cancelAnimationFrame(this.requestID);
                this.setStarterVals();
                this.startAnimationLoop();
                throw 'End of the game';
            }

            /* Change score */
            if (this.pipe[i].x === 5) {
                this.scoreCount++;
                this.score.play();
            }
        }

        /* Draw ground */
        this.ctx.drawImage(this.fg, 0, this.canvasRef.current.height - this.fg.height);

        /* Draw bird */
        this.ctx.drawImage(this.bird, this.bX, this.bY);

        this.bY += this.state.gravity;

        /* Draw score */
        this.ctx.fillStyle = '#000';
        this.ctx.font = '16px Century Gothic';
        this.ctx.fillText(`Score: ${this.scoreCount}`, 10, this.canvasRef.current.height - 20);
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    removeEventListeners(){
        window.removeEventListener('keydown', this.keyDownPressHandler);
        this.canvasRef.current.removeEventListener('touchstart', this.keyDownPressHandler);
        window.cancelAnimationFrame(this.requestID);
    }

    render() {
        return (
            <canvas
                className={classes.Scene}
                ref={this.canvasRef}
                width='288'
                height='512'
            />
        )
    }
}



