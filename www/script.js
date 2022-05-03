let deck = [];

const placeCard = (card) => {
    card = document.getElementById(card);
    if(deck.length < 8) {
        let adjust;deck.length === 0 || deck.length === 4 ? adjust = -182: adjust = -181;
        deck.length < 4 ? card.style.top = "-288px": card.style.top = "-137px";
        card.style.left = adjust + (121 * (deck.length - (4 * (deck.length >= 4)))) + "px";
        deck.push(card);
    }
}

const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/deck').then(console.log);

window.onload = () => {
    document.body.insertAdjacentHTML("beforeend", `<div class="card" id="angry_barbarian">
    <img src="resources/img/cards/angry_barbarian.png" ondblclick=placeCard("angry_barbarian") alt=""/>
</div>`)
}
