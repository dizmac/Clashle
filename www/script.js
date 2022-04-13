function addToDeck(){
    console.log("addToDeck called")
    // TODO: make this work
}


const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/deck').then(console.log);