import * as PIXI from 'pixi.js';
import gameConfig from '../game-config';
import ReelBackground from './reel-background';
import SlotsContainer from '../slots/slots-container';

function slotsForReel(radius) {
  const roundedCircumference = Math.round(radius * 2 * Math.PI);

  return Math.round(roundedCircumference / gameConfig.reelWidth);
}

export default class Reel extends PIXI.Container {
  constructor(reel) {
    super();

    const numOfSlots = slotsForReel(reel.radius);

    this.addChild(new ReelBackground(reel.radius, reel.colour));
    this.addChild(new SlotsContainer(numOfSlots, reel.radius));

    this.pivot.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
    this.position.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
  }

  /* eslint-disable class-methods-use-this */
  start() {
    console.log('start spinning');
  }

  stop() {
    console.log('stop spinning');
  }
  /* */
}
