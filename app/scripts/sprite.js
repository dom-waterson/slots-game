import * as PIXI from 'pixi.js';
import gameConfig from './game-config';

export default class Sprite extends PIXI.Sprite {
  constructor(texture, position = { x: gameConfig.centerPoints.x, y: gameConfig.centerPoints.y }) {
    super(texture);
    this.anchor.set(0.5, 0.5);

    this.position.set(gameConfig.centerPoints.x, position.y);
  }
}
