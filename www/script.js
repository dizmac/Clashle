let deck = [];

function placeCard(card) {
    if (deck.length < 8) {
        if(deck.length < 4) {
            card.style.top = "97px"
            card.style.left = 716 + (deck.length * 121) + "px";
        }else {
            card.style.top = "248px"
            card.style.left = 716 + ((deck.length - 4) * 121) + "px";
        }
        deck.push(card)
    }
}

const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/deck').then(console.log);
