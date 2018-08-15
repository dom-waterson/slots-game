import './main.css';
import * as PIXI from 'pixi.js';
import applicationLoader from './scripts/loaders/application-loader';
import setupGame from './scripts/setup-game';
import gameConfig from './scripts/game-config';

PIXI.loader.add(gameConfig.pathToSymbolAssets).load(() => {
  applicationLoader()
    .then(setupGame);
});
