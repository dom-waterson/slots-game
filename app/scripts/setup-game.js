import Reel from './reel/reel';
import gameConfig from './game-config';
import { getGameContext } from './game-context';

export default () => {
  gameConfig.reels.forEach((reel) => {
    const canvasReel = new Reel(reel);
    getGameContext().stage.addChild(canvasReel);
  });
};
