import bug from "../../public/assets/bug.png";
import dark from "../../public/assets/dark.png";
import dragon from "../../public/assets/dragon.png";
import eletric from "../../public/assets/eletric.png";
import fairy from "../../public/assets/fairy.png";
import fighting from "../../public/assets/fighting.png";
import fire from "../../public/assets/fire.png";
import flying from "../../public/assets/flying.png";
import ghost from "../../public/assets/ghost.png";
import grass from "../../public/assets/grass.png";
import ground from "../../public/assets/ground.png";
import ice from "../../public/assets/ice.png";
import normal from "../../public/assets/normal.png";
import poison from "../../public/assets/poison.png";
import psychic from "../../public/assets/psychic.png";
import rock from "../../public/assets/rock.png";
import steel from "../../public/assets/steel.png";
import water from "../../public/assets/water.png";
export const returnTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      console.log("Type not found");
      return null;
  }
};
