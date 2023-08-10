import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./styled";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokedexPage = () => {
  const { pokedex, removePokemon } = useContext(GlobalStateContext);
  return (
    <PokedexContainer>
      {pokedex.map((poke) => {
        return (
          <PokemonCard
            key={poke.id}
            pokemon={poke}
            removePokemon={removePokemon}
          />
        );
      })}
    </PokedexContainer>
  );
};

export default PokedexPage;
