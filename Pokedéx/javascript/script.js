let currentPokemon;
let kantoPokemons = 151;
let pokemonList = [];
let johtoPokemons = 251;
let hoennPokemons = 386;
let sinnohPokemons = 493;

function init() {
  includeHTML();
  showWelcomeSection();
  setBackgroundColorForAllPokemons();
}

async function loadPokemon() {
  for (let i = 1; i <= kantoPokemons; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonList.push(currentPokemon);
    renderPokemon(i - 1); // Render das Pokemon sofort nach dem Laden der Daten
  }
}

function renderPokemon(index) {
  const pokemon = pokemonList[index];
  let container = document.getElementById("pokemonContainer");

  let pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemonCard");
  pokemonCard.id = `pokeCard${index}`;
  let types = pokemon["types"].map((type) => type["type"]["name"]);

  let typeButtons = types
    .map((type) => `<button class="showType">${type}</button>`)
    .join("");

  pokemonCard.innerHTML = /*html*/ `
    <div id="pokedex" class="pokeCard">
      <h1 class="pokeName">#${pokemon["id"]} ${pokemon["name"]}</h1>
      <div class="typShiny">
        <div class="Types">
          ${typeButtons}
        </div>
        <button onclick="doShiny(${index})" class="shinyButton">Shiny</button>
      </div>
      <img class="pokePic" id="pokePic${index}" src="${pokemon["sprites"]["other"]["official-artwork"]["front_default"]}" alt="${pokemon["name"]}" />        
    </div>
  `;
  container.appendChild(pokemonCard);
  setBackgroundColorToPokemonType(types[0], pokemonCard);
}

function doShiny(index) {
  let pokePic = document.getElementById(`pokePic${index}`);
  let currentSprite =
    pokemonList[index]["sprites"]["other"]["official-artwork"]["front_default"];
  let shinySprite =
    pokemonList[index]["sprites"]["other"]["official-artwork"]["front_shiny"];

  if (pokePic.src === currentSprite) {
    pokePic.src = shinySprite;
  } else if (pokePic.src === shinySprite) {
    pokePic.src = currentSprite;
  }
}

async function loadJohtoPokemon() {
  let container = document.getElementById("pokemonContainer");
  container.innerHTML = "";
  for (let i = kantoPokemons + 1; i <= johtoPokemons; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonList.push(currentPokemon);
    renderPokemon(pokemonList.length - 1); // Render das Pokemon sofort nach dem Laden der Daten
  }
}

async function loadHoennPokemon() {
  let container = document.getElementById("pokemonContainer");
  container.innerHTML = "";
  for (let i = johtoPokemons + 1; i <= hoennPokemons; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonList.push(currentPokemon);
    renderPokemon(pokemonList.length - 1); // Render das Pokemon sofort nach dem Laden der Daten
  }
}

async function loadSinnohPokemon() {
  let container = document.getElementById("pokemonContainer");
  container.innerHTML = "";
  for (let i = hoennPokemons + 1; i <= sinnohPokemons; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonList.push(currentPokemon);
    renderPokemon(pokemonList.length - 1); // Render das Pokemon sofort nach dem Laden der Daten
  }
}

function showWelcomeSection() {
  const displayTime = 5000;
  let welcome = document.getElementById("welcomeSection");
  welcome.style.display = "block";

  setTimeout(function () {
    welcome.style.display = "none";
  }, displayTime);
}

function setBackgroundColorForAllPokemons() {
  pokemonList.forEach((pokemon, index) => {
    const types = pokemon["types"].map((type) => type["type"]["name"]);
    const pokemonCard = document.getElementById(`pokeCard${index}`);

    if (types.length > 0) {
      setBackgroundColorToPokemonType(types[0], pokemonCard);
    }
  });
}

function setBackgroundColorToPokemonType(type, pokemonCard) {
  let backgroundColor = "";

  switch (type) {
    case "grass":
      backgroundColor = "#78C850";
      break;
    case "normal":
      backgroundColor = "#A8A878";
      break;
    case "fighting":
      backgroundColor = "#C03028";
      break;
    case "flying":
      backgroundColor = "#A890F0";
      break;
    case "poison":
      backgroundColor = "#A040A0";
      break;
    case "ground":
      backgroundColor = "#E0C068";
      break;
    case "rock":
      backgroundColor = "#B8A038";
      break;
    case "bug":
      backgroundColor = "#A8B820";
      break;
    case "ghost":
      backgroundColor = "#705898";
      break;
    case "steel":
      backgroundColor = "#B8B8D0";
      break;
    case "fire":
      backgroundColor = "#F08030";
      break;
    case "water":
      backgroundColor = "#6890F0";
      break;
    case "electric":
      backgroundColor = "#F8D030";
      break;
    case "psychic":
      backgroundColor = "#F85888";
      break;
    case "ice":
      backgroundColor = "#98D8D8";
      break;
    case "dragon":
      backgroundColor = "#7038F8";
      break;
    case "dark":
      backgroundColor = "#705848";
      break;
    case "fairy":
      backgroundColor = "#EE99AC";
      break;
    default:
      backgroundColor = "white";
      break;
  }

  pokemonCard.style.backgroundColor = backgroundColor;
}
