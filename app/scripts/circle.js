import * as PIXI from 'pixi.js';

export default class Circle extends PIXI.Graphics {
  constructor(radius, colour) {
    super();
    this.beginFill(colour);
    this.drawCircle(0, 0, radius);
    this.endFill();
  }
}
