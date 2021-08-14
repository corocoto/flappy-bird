import React, {useEffect, useRef} from 'react';
import classes from './Scene.module.css';
import _cloneDeep from 'lodash/cloneDeep';

import {
  sounds,
  sceneImages,
  GAP_VALUE,
  GRAVITATION_VALUE,
  BIRD,
  PIPE_X_STOP_POINT,
  CANVAS
} from './constants';
import {CoordinatesType} from './Scene.types';

const BIRD_COPY = _cloneDeep(BIRD);

let backgroundImage: HTMLImageElement;
let birdImage: HTMLImageElement;
let groundImage: HTMLImageElement;
let pipeNorthImage: HTMLImageElement;
let pipeSouthImage: HTMLImageElement;
let flySound: HTMLAudioElement;
let scoreSound: HTMLAudioElement

const Scene = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContext = useRef<CanvasRenderingContext2D>();
    let pipesCoordinate = useRef<CoordinatesType[]>([]);

    let score = 0;
    let requestID: number | undefined;

    const loadSceneImages = async () => {
      backgroundImage = await sceneImages.get('background') as HTMLImageElement;
      birdImage = await sceneImages.get('bird') as HTMLImageElement;
      groundImage = await sceneImages.get('ground') as HTMLImageElement;
      pipeNorthImage = await sceneImages.get('pipeNorth') as HTMLImageElement;
      pipeSouthImage = await sceneImages.get('pipeSouth') as HTMLImageElement;
    };

    const loadSceneSounds = () => {
      flySound = sounds.get('fly') as HTMLAudioElement;
      scoreSound = sounds.get('score') as HTMLAudioElement;
    }

    const initCanvasContext = () => {
      if (canvasRef.current) {
        canvasContext.current = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      }
    };

  const setStarterValues = () => {
    BIRD_COPY.position = {
      ...BIRD.position
    };

    score = 0;

    pipesCoordinate.current = [
      {
        x: canvasRef.current?.width as number,
        y: 0,
      }
    ];
  }

  const renderer = () => {
    if (!canvasContext.current || !canvasRef.current) return;
    canvasContext.current.drawImage(
      backgroundImage,
      0,
      0
    );
    for (let i = 0; i < pipesCoordinate.current.length; i++) {
      const constant = pipeNorthImage.height + GAP_VALUE;

      /* Draw top pipe */
      canvasContext.current.drawImage(
        pipeNorthImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y
      );

      /* Draw bottom pipe */
      canvasContext.current.drawImage(
        pipeSouthImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y + constant
      );

      /* Move pipes */
      pipesCoordinate.current[i].x--;

      /* Add new pipes */
      if (pipesCoordinate.current[i].x === PIPE_X_STOP_POINT) {
        pipesCoordinate.current = [
          ...pipesCoordinate.current,
          {
            x: canvasRef.current.width,
            y: Math.floor(Math.random() * pipeNorthImage.height) - pipeNorthImage.height,
          }
        ];
      }

      /* Bit about pipes */
      if (
        (
          BIRD_COPY.position.x + birdImage.width >= pipesCoordinate.current[i].x &&
          BIRD_COPY.position.x <= pipesCoordinate.current[i].x + pipeNorthImage.width &&
          (
            BIRD_COPY.position.y <= pipesCoordinate.current[i].y + pipeNorthImage.height ||
            BIRD_COPY.position.y + birdImage.height >= pipesCoordinate.current[i].y + constant
          )
        ) ||
        BIRD_COPY.position.y + birdImage.height >= canvasRef.current.height - groundImage.height
      ) {
        if (typeof requestID === "number") {
          window.cancelAnimationFrame(requestID);
        }
        setStarterValues();
        renderer();
      // eslint-disable-next-line no-throw-literal
        throw 'End of the game';
      }

      /* Change score */
      if (pipesCoordinate.current[i].x === 5) {
        score++;
        scoreSound.play();
      }
    }

    /* Draw ground */
    canvasContext.current.drawImage(
      groundImage,
      0,
      canvasRef.current.height - groundImage.height
    );

    /* Draw bird */
    canvasContext.current.drawImage(
      birdImage,
      BIRD_COPY.position.x,
      BIRD_COPY.position.y
    );

    BIRD_COPY.position.y += GRAVITATION_VALUE;

    /* Draw score */
    canvasContext.current.fillStyle = '#000';
    canvasContext.current.font = '16px Century Gothic';
    canvasContext.current.fillText(
      `Score: ${score}`,
      10,
      canvasRef.current.height - 20
    );
    requestID = window.requestAnimationFrame(renderer);
  };

  const removeEventListeners = () => {
    window.removeEventListener('keydown', keyDownPressHandler);
    canvasRef.current?.removeEventListener('touchstart', keyDownPressHandler);
    if (typeof requestID === 'number') {
      window.cancelAnimationFrame(requestID);
    }
  };

  const keyDownPressHandler = () => {
    BIRD_COPY.position.y -= 30;
    flySound.play();
  }

  useEffect(() => {
    initCanvasContext();
    setStarterValues();
    loadSceneSounds();
    (async() => {
      await loadSceneImages();
      renderer();
      window.addEventListener('keydown', keyDownPressHandler);
      canvasRef.current?.addEventListener('touchstart', keyDownPressHandler)
    })();

      return () => {
        removeEventListeners();
      };
    }, [removeEventListeners, renderer, setStarterValues]);

    return (
      <canvas
        className={classes.Scene}
        ref={canvasRef}
        width={CANVAS.width}
        height={CANVAS.height}
      />
    );
};

export default Scene;
