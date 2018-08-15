import * as PIXI from 'pixi.js';
import Circle from '../circle';
import gameConfig from '../game-config';

export default class ReelBackground extends PIXI.Sprite {
  constructor(radius, colour) {
    super(new Circle(radius, colour).generateCanvasTexture());

    this.anchor.set(0.5, 0.5);
    this.position.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
  }
}
