export class Dice {
  side = 20;
  count = 1;
  result = [];
  mod = 0;

  constructor(side = 20, count = 1) {
    this.side = side;
    this.count = count;
  }

  roll(mod = 0) {
    this.result = [];
    this.mod = mod;
    for (let i = 0; i < this.count; i++) {
      this.result.push(
        (Math.floor(Math.random() * this.side) % this.side) + 1
      )
    }
    return this;
  }

  add() {
    return this.mod + this.result.reduce((a, b) => a + b, 0);
  }
}