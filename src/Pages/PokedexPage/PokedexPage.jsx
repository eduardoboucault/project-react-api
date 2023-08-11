import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  PokedexContainer,
  PokemonTitlePokedexPage,
  SectionPokemonsPokedex,
} from "./styled";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokedexPage = () => {
  const { pokedex, removePokemon } = useContext(GlobalStateContext);
  return (
    <PokedexContainer>
      <PokemonTitlePokedexPage>My Pokémons</PokemonTitlePokedexPage>
      <SectionPokemonsPokedex>
        {pokedex.map((poke) => {
          return (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
              removePokemon={removePokemon}
            />
          );
        })}
      </SectionPokemonsPokedex>
    </PokedexContainer>
  );
};

export default PokedexPage;
