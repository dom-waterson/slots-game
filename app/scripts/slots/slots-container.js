import * as PIXI from 'pixi.js';
import Slot from './slot';

export default class SlotsContainer extends PIXI.Container {
  constructor(numberOfSlots, radius) {
    super();
    this.createSlots(numberOfSlots, radius);
  }

  createSlots(numberOfSlots, radius) {
    for (let slotCount = 0; slotCount < numberOfSlots; slotCount += 1) {
      this.addChild(new Slot(slotCount, numberOfSlots, radius));
    }
  }
}
