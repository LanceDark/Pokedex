let types = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

function typeColor(i, currentPokemon){
    let pokemonCard = document.getElementById('pokedex'); 
    let pokemonTyp = currentPokemon['types'][0]['name'];
    switch(pokemonTyp){
        case 'normal':
            pokemonCard.style.backgroundColor = "#A8A878"
    }
}