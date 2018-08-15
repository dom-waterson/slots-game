import * as PIXI from 'pixi.js';
import { TweenLite } from 'gsap';
import gameConfig from '../game-config';
import ReelBackground from './reel-background';
import SlotsContainer from '../slots/slots-container';
import randomNumberFromRange from '../randon-number';

function slotsForReel(radius) {
  const roundedCircumference = Math.round(radius * 2 * Math.PI);

  return Math.round(roundedCircumference / gameConfig.reelWidth);
}

export default class Reel extends PIXI.Container {
  constructor(reel) {
    super();

    this.numOfSlots = slotsForReel(reel.radius);

    this.addChild(new ReelBackground(reel.radius, reel.colour));
    this.addChild(new SlotsContainer(this.numOfSlots, reel.radius));

    this.pivot.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
    this.position.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);
  }

  /* eslint-disable class-methods-use-this */
  start() {
    console.log('start spinning');
  }

  stop() {
    this.finalPosition();
  }
  /* */

  finalPosition() {
    const sectorToLandOn = randomNumberFromRange(0, this.numOfSlots - 1);
    const factionOfCircle = sectorToLandOn / this.numOfSlots;
    const landingAngle = factionOfCircle * Math.PI * 2;
    this.finalRotation = landingAngle + Math.PI;

    TweenLite.to(this, 4, {
      rotation: -this.finalRotation,
      ease: Power4.easeInOut,
    });
  }
}
