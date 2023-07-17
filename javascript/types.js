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