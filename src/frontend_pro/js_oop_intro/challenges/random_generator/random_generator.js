////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
export class Random {
    constructor(seed) {
        this.seed = seed;
        this.resetNumber = seed;
    }

    getNext() {
        const a = 2;
        const c = 3;
        const m = 343434;
        this.seed = (a * this.seed + c) % m;
        return this.seed;
    }

    reset() {
        return this.resetNumber;
    }
}

////////////////////////////////////////////
//////////// Master Solution ///////////////
////////////////////////////////////////////
class RandomMaster {
  constructor(seed) {
    this.seed = seed;
    this.init = seed;
  }

  reset() {
    this.seed = this.init;
  }

  getNext() {
    const a = 45 + this.init;
    const c = 21 + this.init;
    const m = 67 + this.init;

    this.seed = (a * this.seed + c) % m;

    return this.seed;
  }
}