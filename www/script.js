let deck = [];
function addToDeck(name){
    if(!deck.includes(name)){
        deck.push(name);
    }
    console.log(deck);
}


const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/deck').then(console.log);
