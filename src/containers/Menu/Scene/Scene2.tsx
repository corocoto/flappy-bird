import React, {useRef, useEffect, useLayoutEffect, FC, useState} from 'react';
import classes from './Scene.module.css';
import {isTouchDevice} from '../../../helpers';

/* Images importing */
import Background from '../../../assets/images/bg.png';
import Bird from '../../../assets/images/bird.png';
import Ground from '../../../assets/images/fg.png';
import PipeNorth from '../../../assets/images/pipeNorth.png';
import PipeSouth from '../../../assets/images/pipeSouth.png';

/* Sounds importing */
import FlySound from '../../../assets/sounds/fly.mp3';
import ScoreSound from '../../../assets/sounds/score.mp3';

const images = [
  Background,
  Bird,
  Ground,
  PipeNorth,
  PipeSouth
];

const sounds = [
  FlySound,
  ScoreSound
];

// export default class Scene extends Component {
//     constructor(props) {
//         super(props);
//         this.canvasRef = React.createRef();
//         this.imgs = [Background, Bird, Ground, PipeNorth, PipeSouth];
//         this.sounds = [FlySound, ScoreSound];
//         this.state = {
//             gap: 80,
//             /* Gravitation */
//             gravity: 1.7
//         }
//     }
//
//     async componentDidMount() {
//       this.startAnimationLoop();
//       isTouchDevice()
//         ? this.canvasRef.current.addEventListener('touchstart', this.keyDownPressHandler)
//         : window.addEventListener('keydown', this.keyDownPressHandler);
//
//     }

//
//
//
//     keyDownPressHandler() {
//         this.bY -= 30;
//         this.fly.play();
//     }
//

//
//     componentWillUnmount() {
//         this.removeEventListeners();
//     }
//
//     removeEventListeners(){
//         window.removeEventListener('keydown', this.keyDownPressHandler);
//         this.canvasRef.current.removeEventListener('touchstart', this.keyDownPressHandler);
//         window.cancelAnimationFrame(this.requestID);
//     }
//
//     render() {
//         return (
//             <canvas
//                 className={classes.Scene}
//                 ref={this.canvasRef}
//                 width='288'
//                 height='512'
//             />
//         )
//     }
// }

// const Scene: FC = props => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const canvasContext = useState<CanvasRenderingContext2D|null>(null);
//   const gap = 80;
//   const gravitation = 1.7;
//
//   const birdPosition = {
//     x: 10,
//     y: 150
//   };
//
//   let scoreCount = 0;
//
//   /* Pipe coordinates */
//   const pipes = [
//     {
//       x: canvasRef.current?.width || 0,
//       y: 0,
//     }
//   ];
//
//   const initializationSceneImages = () => {
//     return images.map(imagePath => {
//       const imageName = getName(imagePath);
//       this[imageName] = new Image();
//       this[imageName].src = imagePath;
//
//       this[imageName].onload = () => Promise.resolve();
//
//       return this[imageName];
//     });
//   };
//
//   const initializationSceneSounds = () => {
//     sounds.map(sound => this[getName(sound)] = new Audio(sound));
//   };
//
//   useLayoutEffect(async () => {
//     await Promise.all(initializationSceneImages());
//     initializationSceneSounds();
//   }, [initializationSceneImages, initializationSceneSounds]);
//
//   useEffect(() => {
//     const canvasContext = canvasRef.current.getContext('2d');
//     animationLoop();
//       isTouchDevice()
//         ? canvasRef.current.addEventListener('touchstart', keyDownPressHandler)
//         : window.addEventListener('keydown', keyDownPressHandler);
//   });
//
//   const getName = (filePath) => {
//     return filePath.split('/').pop().split('.').shift();
//   };
//
//
//
//   const animationLoop = () => {
//     /* Draw background */
//     this.ctx.drawImage(this.bg, 0, 0);
//     for (let i = 0; i < this.pipe.length; i++) {
//       const constant = this.pipeNorth.height + this.state.gap;
//
//       /* Draw top pipe */
//       this.ctx.drawImage(this.pipeNorth, this.pipe[i].x, this.pipe[i].y);
//
//       /* Draw bottom pipe */
//       this.ctx.drawImage(this.pipeSouth, this.pipe[i].x, this.pipe[i].y + constant);
//
//       /* Move pipes */
//       this.pipe[i].x--;
//
//       /* Add new pipes */
//       if (this.pipe[i].x === 125) {
//         this.pipe.push({
//           x: this.canvasRef.current.width,
//           y: Math.floor(Math.random() * this.pipeNorth.height) - this.pipeNorth.height,
//         });
//       }
//
//       /* Bit about pipes */
//       if ((this.bX + this.bird.width >= this.pipe[i].x && this.bX <= this.pipe[i].x + this.pipeNorth.width &&
//         (this.bY <= this.pipe[i].y + this.pipeNorth.height || this.bY + this.bird.height >= this.pipe[i].y + constant))
//         || this.bY + this.bird.height >= this.canvasRef.current.height - this.fg.height) {
//         window.cancelAnimationFrame(this.requestID);
//         this.setStarterVals();
//         this.startAnimationLoop();
//         throw 'End of the game';
//       }
//
//       /* Change score */
//       if (this.pipe[i].x === 5) {
//         this.scoreCount++;
//         this.score.play();
//       }
//     }
//
//     /* Draw ground */
//     this.ctx.drawImage(this.fg, 0, this.canvasRef.current.height - this.fg.height);
//
//     /* Draw bird */
//     this.ctx.drawImage(this.bird, this.bX, this.bY);
//
//     this.bY += this.state.gravity;
//
//     /* Draw score */
//     this.ctx.fillStyle = '#000';
//     this.ctx.font = '16px Century Gothic';
//     this.ctx.fillText(`Score: ${this.scoreCount}`, 10, this.canvasRef.current.height - 20);
//     this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
//   }
// };
//
// export default Scene


