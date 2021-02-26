class Fairy {
  constructor (name) {
    this.name = name,
    this.dust = 10,
    this.clothes = {dresses: ['Iris']},
    this.disposition = 'Good natured',
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust = this.dust + 10
  }

  makeDresses(flowers) {
    for(let i=0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i])
    }
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  // this.humanWards.push(infant)
  // if(this.humanWards.length >= 3) {
  //   this.disposition = 'Good natured'
  // }
  // if(this.disposition === 'Vengeful') {
  //   var newInfant = infant
  //   newInfant.disposition = 'Malicious'
  //   return newInfant
  // } else {
  //   return infant
  // }
  replaceInfant(infant) {
    if (this.disposition = "Vengeful") {
      infant.name = infant.name;
      infant.eyes = infant.eyes;
      infant.disposition = "Malicious";
    }
    return infant;
  }
}

module.exports = Fairy;