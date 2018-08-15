import Reel from './reel/reel';
import gameConfig from './game-config';
import { getGameContext } from './game-context';
import SpinButton from './spin-button';
import { setReels } from './reel/reels';

export default () => {
  gameConfig.reels.forEach((reel) => {
    const canvasReel = new Reel(reel);
    setReels(canvasReel);
    getGameContext().stage.addChild(canvasReel);
  });

  const button = new SpinButton();
  getGameContext().stage.addChild(button);
};
