export default {
  canvas: {
    width: 800,
    height: 800,
  },
  centerPoints: {
    x: 400,
    y: 400,
  },
  reelWidth: 40,
  reels: [
    {
      radius: 300,
      colour: 0xd010bd,
      maxSpeed: 2,
      speedIncrease: 0.1,
      speedIncreaseTime: 100,
    },
    {
      radius: 260,
      colour: 0xffd600,
      maxSpeed: 2,
      speedIncrease: 0.1,
      speedIncreaseTime: 125,
    },
    {
      radius: 220,
      colour: 0xe1ffc5,
      maxSpeed: 2,
      speedIncrease: 0.1,
      speedIncreaseTime: 150,
    },
    {
      radius: 180,
      colour: 0xf02e2e,
      maxSpeed: 2,
      speedIncrease: 0.1,
      speedIncreaseTime: 175,
    },
    {
      radius: 140,
      colour: 0x2c3571,
      maxSpeed: 2,
      speedIncrease: 0.1,
      speedIncreaseTime: 200,
    },
  ],
  pathToSymbolAssets: './assets/symbols/symbols.json',
  symbolsSize: {
    width: 25,
    height: 25,
  },
};
