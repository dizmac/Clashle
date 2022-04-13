const Card = require('./Card');

module.exports = function(...cards) {
    this.Cards = [];

    for (let c of cards) {
        this.Cards.push(new Card(c, `../../resources/img/${c}.png`));
    }
}