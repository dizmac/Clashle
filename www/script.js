const Deck = require("../objects/Deck")
let deck = new Deck()
function addToDeck(){
    console.log("addToDeck called")
    deck.Cards.push("elite_barbarians")
    // TODO: make this work
}


const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/').then(console.log);