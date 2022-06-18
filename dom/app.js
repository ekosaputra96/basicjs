const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const allspan = document.querySelectorAll('span');
for(let [i, span] of allspan.entries()){
    span.style.color = colors[i];
}

// highlight
const lists = document.querySelectorAll('li');
for(let list of lists){
    list.classList.toggle('highlight');
}

// button
// const container = document.querySelector('#container');
// for(let i = 1; i <= 100; i++ ){
//     const button = document.createElement('button');
//     button.innerText = "Hey!";
//     container.appendChild(button);
// }

// pokemon
const cont = document.querySelector('#cont');
const urlBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const listPokemons = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran', 'Nidorina', 'Nidoqueen', 'Nidoran2', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'];

for(let i = 1; i  <= 100; i++){
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    img.src = `${urlBase}${i}.png`;
    span.innerText = `#${i}`;
    span1.innerText = `${listPokemons[i - 1]}`;
    span.classList.add('span');
    span1.classList.add('span1');
    div.append(img);
    div.append(span);
    div.append(span1);
    cont.append(div);
}