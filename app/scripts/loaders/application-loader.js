import * as PIXI from 'pixi.js';
import { setGameContext } from '../game-context';
import gameConfig from '../game-config';

const gameContainer = document.querySelector('.game-container');

export default () => new Promise((resolve) => {
  const application = new PIXI.Application({
    width: gameConfig.canvas.width,
    height: gameConfig.canvas.height,
    transparent: true,
  });

  setGameContext(application);

  gameContainer.appendChild(application.view);

  resolve();
});
