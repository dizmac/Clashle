const path = require('path');

const express = require('express');
const dotenv = require('dotenv');


const Deck = require('./objects/Deck');
const app = express();


dotenv.config();
app.listen(process.env.DEBUG_PORT, () => console.log(`Backend Running @ Port ${process.env.DEBUG_PORT}`));

app.use(express.static('www'));

app.get('/cards', (req, res) => {
    res.status(200).end(JSON.stringify(['three_musketeers', 'chr_golem', 'royal_recruits', 'pekka', 'electrogiant', 'lava_hound', 'mega_knight', 'royal_giant', 'angry_barbarian', 'giant_skeleton', 'goblin_giant', 'zapMachine', 'archerqueen', 'barbarians', 'minion_horde', 'rascals', 'chr_balloon', 'chr_witch', 'prince', 'bowler', 'executioner', 'cannon_cart', 'electro_dragon', 'ram_rider', 'giant', 'royal_hog', 'wizard', 'skeletonking', 'goldenknight', 'mightyminer', 'skeletondragon', 'baby_dragon', 'dark_prince', 'hunter', 'rage_barbarian', 'inferno_dragon', 'electro_wizard', 'dark_witch', 'magic_archer', 'motherwitch', 'valkyrie', 'musketeer', 'mini_pekka', 'hog_rider', 'battle_ram', 'zappies', 'flying_machine', 'battle_healer', 'knight', 'archers', 'minion', 'goblin_gang', 'skeleton_balloon', 'firecracker', 'skeleton_horde', 'skeleton_warriors', 'ice_wizard', 'princess', 'miner', 'bandit', 'ghost', 'fisherman', 'mega_minion', 'blowdart_goblin', 'elixir_golem', 'goblins', 'bomber', 'goblin_archer', 'bats', 'wallbreaker', 'ice_golem', 'skeletons', 'snow_spirits', 'fire_spirits', 'electrospirit', 'barbarian_hut', 'building_xbow', 'building_elixir_collector', 'fire_furnace', 'building_inferno', 'building_mortar', 'building_tesla', 'goblindrill', 'bomb_tower', 'firespirit_hut', 'goblin_cage', 'chaos_cannon', 'tombstone', 'lightning', 'rocket', 'graveyard', 'freeze', 'poison', 'fire_fireball', 'order_volley', 'royal_delivery', 'goblin_barrel', 'tornado', 'copy', 'earthquake', 'zap', 'snowball', 'rage', 'barb_barrel', 'the_log', 'mirror', 'healspirit']));
})

app.get('/deck', (req, res) => {
    let d = new Deck();

    console.log(d);
    
    res.status(200).end(JSON.stringify(d));
});
