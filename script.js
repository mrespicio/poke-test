/* function getPokemonOld(){
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.abilities);
    document.querySelector('.poke-info').innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.sprites.other["official-artwork"].front_shiny}">
        <p>ditto weighs ${data.weight}lbs</p>
        <p>Dittos has ${data.abilities.length} abilities that are</p>
        <p>${data.abilities[0].ability.name} and ${data.abilities[1].ability.name} 
    ` 
    }); 
} */

const pokemonCount = 151;
let pokedex = {}; //{1 : {name, image, type, description}}

const pokList = document.getElementById('poke-list');

window.onload = async function(){
    for(let i = 1; i <= 50; i++){
        await getPokemon(i);
        // <div id="1" class="pokemon-name">BULB</div>

        let pok = document.createElement('div'); 
        pok.id = i; 
        //pok.classList.add('pokemon-name');

        pok.innerText = i.toString() + ". " + pokedex[i]['name'];

        pokList.append(pok); //append new pokemon

    }
    console.log(pokedex)
};

async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    let res = await fetch(url)
    let pokemon = await res.json();
    //console.log(pokemon)
    let pokemonName = pokemon['name']; //return string
    let pokemonTypes = pokemon['types']; //return array
    let pokemonImg = pokemon.sprites['front_default']; //return img

    res = await fetch(pokemon.species.url);
    let pokemonDesc = await res.json();
    //console.log(pokemonDesc);
    pokemonDesc =pokemonDesc['flavor_text_entries'][0]['flavor_text'];
   // console.log(pokemonDesc)

    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonTypes, "desc: " : pokemonDesc}

};

