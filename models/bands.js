const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }
  addBand(band = new Band()) {
    console.log('ADD BAND');
    this.bands.push(band);
  }

  getBands() {
    console.log('GET BANDS');
    return this.bands;
  }

  deleteBand(id = '') {
    console.log('DELETE BAND');
    this.bands = this.bands.filter(item => item.id !== id);
    return this.bands;
  }

  voteBand(id = '') {
    console.log('VOTE BAND');
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes++;
        return band;
      } else {
        return band;
      }
    })
  }

}

module.exports = Bands;