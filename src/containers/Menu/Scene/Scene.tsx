import React, {useEffect, useRef, useCallback} from 'react';
import classes from './Scene.module.css';

import {
  sounds,
  sceneImages,
  GAP_VALUE,
  GRAVITATION_VALUE,
  BIRD,
  PIPE_X_ENDPOINT,
  CANVAS,
  PIPE_X_UPPER_SCORE,
  SCORE_TEXT
} from './constants';
import {CoordinatesType} from './Scene.types';

const BIRD_COPY = structuredClone(BIRD);

let backgroundImage: HTMLImageElement;
let birdImage: HTMLImageElement;
let groundImage: HTMLImageElement;
let topPipeImage: HTMLImageElement;
let bottomPipeImage: HTMLImageElement;
let flySound: HTMLAudioElement;
let scoreSound: HTMLAudioElement

const Scene = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContext = useRef<CanvasRenderingContext2D>();
    const pipesCoordinate = useRef<CoordinatesType[]>([]);

    const score = useRef<number>(0);
    const requestID = useRef<number>(0);

    const loadSceneImages = async () => {
      backgroundImage = await sceneImages.get('background') as HTMLImageElement;
      birdImage = await sceneImages.get('bird') as HTMLImageElement;
      groundImage = await sceneImages.get('ground') as HTMLImageElement;
      topPipeImage = await sceneImages.get('topPipe') as HTMLImageElement;
      bottomPipeImage = await sceneImages.get('bottomPipe') as HTMLImageElement;
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

  const setStarterValues = useCallback(() => {
    BIRD_COPY.position = {
      ...BIRD.position
    };

    score.current = 0;

    pipesCoordinate.current = [
      {
        x: canvasRef.current?.width as number,
        y: 0,
      }
    ];
  }, []);

  const renderer = useCallback(() => {
    if (!canvasContext.current || !canvasRef.current) return;
    canvasContext.current.drawImage(
      backgroundImage,
      0,
      0
    );
    for (let i = 0; i < pipesCoordinate.current.length; i++) {
      const constant = topPipeImage.height + GAP_VALUE;

      /* Draw top pipe */
      canvasContext.current.drawImage(
        topPipeImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y
      );

      /* Draw bottom pipe */
      canvasContext.current.drawImage(
        bottomPipeImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y + constant
      );

      /* Move pipes */
      pipesCoordinate.current[i].x--;

      /* Add new pipes */
      if (pipesCoordinate.current[i].x === PIPE_X_ENDPOINT) {
        pipesCoordinate.current = [
          ...pipesCoordinate.current,
          {
            x: canvasRef.current.width,
            y: Math.floor(Math.random() * topPipeImage.height) - topPipeImage.height,
          }
        ];
      }

      /* Bit about pipes */
      if (
        (
          BIRD_COPY.position.x + birdImage.width >= pipesCoordinate.current[i].x &&
          BIRD_COPY.position.x <= pipesCoordinate.current[i].x + topPipeImage.width &&
          (
            BIRD_COPY.position.y <= pipesCoordinate.current[i].y + topPipeImage.height ||
            BIRD_COPY.position.y + birdImage.height >= pipesCoordinate.current[i].y + constant
          )
        ) ||
        BIRD_COPY.position.y + birdImage.height >= canvasRef.current.height - groundImage.height
      ) {
          window.cancelAnimationFrame(requestID.current);
        setStarterValues();
        renderer();
        // eslint-disable-next-line no-throw-literal
        throw 'End of the game';
      }

      /* Change score */
      if (pipesCoordinate.current[i].x === PIPE_X_UPPER_SCORE) {
        score.current++;
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
    canvasContext.current.fillStyle = SCORE_TEXT.fill;
    canvasContext.current.font = SCORE_TEXT.font;
    canvasContext.current.fillText(
      SCORE_TEXT.text(score.current),
      10,
      canvasRef.current.height - 20
    );
    requestID.current = window.requestAnimationFrame(renderer);
  }, [setStarterValues]);

  const removeEventListeners = useCallback(() => {
    window.removeEventListener('keydown', keyDownPressHandler);
    canvasRef.current?.removeEventListener('touchstart', keyDownPressHandler);
      window.cancelAnimationFrame(requestID.current);
  }, [requestID]);

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
