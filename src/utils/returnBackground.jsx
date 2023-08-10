export const returnBackground = (type) => {
  switch (type) {
    case "bug":
      return "#76A866;";
    case "dark":
      return "#a9a9a9;";
    case "dragon":
      return "#004170;";
    case "electric":
      return "#ffd966;";
    case "fairy":
      return "#EC8EC0;";
    case "fighting":
      return "#bf9263;";
    case "fire":
      return "#EAAB7D;";
    case "flying":
      return "#c5d6f8;";
    case "ghost":
      return "#a48de7;";
    case "grass":
      return "#729F92;";
    case "ground":
      return "#9f7040;";
    case "ice":
      return "#cfe2f3;";
    case "normal":
      return "#BF9762;";
    case "poison":
      return "#674ea7;";
    case "psychic":
      return "#a64d79;";
    case "rock":
      return "#444444;";
    case "steel":
      return "#999999;";
    case "water":
      return "#71C3FF;";
    default:
      console.log("Type not found");
      return null;
  }
};
