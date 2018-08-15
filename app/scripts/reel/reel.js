import * as PIXI from 'pixi.js';
import gameConfig from '../game-config';
import ReelBackground from './reel-background';

export default class Reel extends PIXI.Container {
  constructor(reel) {
    super();

    this.addChild(new ReelBackground(reel.radius, reel.colour));

    this.pivot.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
    this.position.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
  }
}
