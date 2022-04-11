const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/').then(console.log);