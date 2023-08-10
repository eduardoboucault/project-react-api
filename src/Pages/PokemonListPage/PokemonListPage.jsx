import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  PokemonListContainer,
  PokemonTitleListPage,
  SectionPokemons,
} from "./styled";
import { getAllPokemons } from "../../API/request";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
const PokemonListPage = () => {
  const [pokemon, setPokemon] = useState([]);

  //* O useEffect é um hook que é executado quando o componente é montado. Neste caso a função disparada é a getAllPokemons que é responsável por buscar todos os pokemons no banco de dados.
  useEffect(() => {
    getAllPokemons(setPokemon);
  }, []);

  const { pokedex, addPokemon } = useContext(GlobalStateContext);

  //* Para realizar a filtragem correta dos pokemons que renderizam na lista de pokemons, é necessário criar uma função que recebe o array de pokemons e retorna o array de pokemons que não estão na lista de pokedex.
  const filteredPokemons = pokemon.filter(
    (pokemon) => !pokedex.find((poke) => poke.name === pokemon.name)
  );

  return (
    <PokemonListContainer>
      <PokemonTitleListPage>Todos Pokémons</PokemonTitleListPage>
      <SectionPokemons>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        ))}
      </SectionPokemons>
    </PokemonListContainer>
  );
};

export default PokemonListPage;
