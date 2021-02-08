class Magician {
  constructor({ name, topHat = true }) {
    this.name = name;
    this.topHat = topHat;
    this.confident = false;
    this.castCounter = 0;
  }

  incantation(phrase) {
    return `${phrase.toUpperCase()}!`;
  }

  cast() {
    this.castCounter++;
    if(this.castCounter >= 3) {
      this.confident = true;
    }
    if(this.topHat) {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if(this.confident) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no! Practice more before attempting this trick!';
    }
  }
}

module.exports = Magician;