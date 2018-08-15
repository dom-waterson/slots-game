import * as PIXI from 'pixi.js';
import gameConfig from '../game-config';

function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Slot extends PIXI.Sprite {
  constructor(slotCount, numberOfSlots, radius) {
    const symbols = PIXI.loader.resources[gameConfig.pathToSymbolAssets].textures;
    const texture = symbols[`symbol-${randomNumberFromRange(1, 10)}.png`];
    super(texture);

    const radianPerSector = (2 * Math.PI) / numberOfSlots;

    const rotation = slotCount * radianPerSector;
    const symbolAnchorPercentage = (radius - gameConfig.reelWidth / 2) / radius;

    this.anchor.set(0.5, 0.5);
    this.height = gameConfig.symbolsSize.height;
    this.width = gameConfig.symbolsSize.width;
    this.rotation = rotation + Math.PI;

    this.position.x = gameConfig.centerPoints.x
            + radius * symbolAnchorPercentage * Math.cos(rotation);

    this.position.y = gameConfig.centerPoints.y
            + radius * symbolAnchorPercentage * Math.sin(rotation);
  }
}
