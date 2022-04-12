const Deck = require("./server/objects/Deck")

function addToDeck(){
    console.log("addToDeck called")
    // TODO: make this work
    Deck("elite_barbarians")
}


const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/').then(console.log);