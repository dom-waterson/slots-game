import * as PIXI from 'pixi.js';
import gameConfig from './game-config';

export default class WinGrid extends PIXI.Sprite {
  constructor() {
    const winGridGraphic = new PIXI.Graphics();

    winGridGraphic.lineStyle(
      gameConfig.winGrid.lineSize,
      gameConfig.winGrid.colour,
    );
    winGridGraphic.drawRect(
      0,
      0,
      gameConfig.winGrid.width,
      gameConfig.winGrid.height,
    );

    let columnx = gameConfig.reelWidth;
    for (let column = 1; column < gameConfig.reels.length; column += 1) {
      winGridGraphic.moveTo(columnx, 0);
      winGridGraphic.lineTo(columnx, gameConfig.winGrid.height);
      columnx += gameConfig.reelWidth;
    }

    let columny = gameConfig.reelWidth;
    for (let rows = 1; rows < gameConfig.winGrid.rows; rows += 1) {
      winGridGraphic.moveTo(0, columny);
      winGridGraphic.lineTo(gameConfig.winGrid.width, columny);
      columny += gameConfig.reelWidth;
    }

    super(winGridGraphic.generateCanvasTexture());
    this.position.set(gameConfig.centerPoints.x - gameConfig.winGrid.width,
      gameConfig.centerPoints.y);
    this.anchor.set(0.5, 0.5);
  }
}
