import './main.css';
import applicationLoader from './scripts/loaders/application-loader';
import setupGame from './scripts/setup-game';

applicationLoader()
  .then(setupGame);
