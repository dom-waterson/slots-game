import * as PIXI from 'pixi.js';
import Circle from './circle';
import gameConfig from './game-config';
import { getReels } from './reel/reels';

export default class SpinButton extends PIXI.Container {
  constructor() {
    super();
    this.spinning = false;
    this.interactive = true;
    this.buttonMode = true;

    this.createBackground();

    this.createText();

    this.on('pointertap', this.handleTap.bind(this));
  }

  createBackground() {
    const buttonBackground = new PIXI.Sprite(
      new Circle(
        gameConfig.centerButton.radius,
        gameConfig.centerButton.colour,
      ).generateCanvasTexture(),
    );

    buttonBackground.anchor.set(0.5, 0.5);

    buttonBackground.position.set(gameConfig.centerPoints.x, gameConfig.centerPoints.y);

    this.addChild(buttonBackground);
  }

  createText() {
    this.buttonText = new PIXI.Text('Spin', gameConfig.spinButton.style);

    this.buttonText.anchor.set(0.5, 0.5);
    this.buttonText.position.set(
      gameConfig.centerPoints.x,
      gameConfig.centerPoints.y,
    );

    this.addChild(this.buttonText);
  }

  handleTap() {
    if (this.spinning) {
      this.stopSpinning();
    } else {
      this.startSpinning();
    }
  }

  startSpinning() {
    this.spinning = true;
    this.buttonText.text = 'Stop';

    getReels().forEach((reel) => {
      reel.start();
    });
  }

  stopSpinning() {
    this.spinning = false;
    this.buttonText.text = 'Spin';

    getReels().forEach((reel) => {
      reel.stop();
    });
  }
}
