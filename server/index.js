const express = require('express');
const dotenv = require('dotenv');


const Deck = require('./objects/Deck');
const app = express();


dotenv.config();
app.listen(process.env.DEBUG_PORT, () => console.log(`Backend Running @ Port ${process.env.DEBUG_PORT}`));



app.get('/', (req, res) => {
    let d = new Deck('Hi', 'Bye');

    console.log(d);
    
    res.status(200).end('200 OK');
});