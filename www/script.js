dragElement(document.getElementById("card"));

function placeCard(card) {
    card.style.left = "440px"
    card.style.top = "102px"
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        let offsetRight = window.innerWidth - elmnt.offsetLeft - elmnt.offsetWidth;
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // TODO: add bottom border when all cards are on the page
        if(elmnt.offsetLeft < 0) {
            elmnt.style.left = "0px";
        }
        if(elmnt.offsetTop < 0) {
            elmnt.style.top = "0px";
        }
        if(offsetRight < 0){
            elmnt.style.left = window.screen.width - elmnt.offsetWidth + "px";
        }
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        // TODO: auto fit card into deck based on coords
        console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const get = async path => {
    const promise = new Promise((resolve, reject) => {
        fetch(path).then(x => x.json()).then(data => resolve(data));
    })


    return await promise;
}

get('/deck').then(console.log);
