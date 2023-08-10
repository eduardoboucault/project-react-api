import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../API/request";
import {
  PokeInfosContainer,
  ImagesContainer,
  ImgWarpper,
  StatsContainer,
  TitleContainer,
  TypeAndMovesContainer,
  TypesContainer,
  MovesContainer,
  TypeImgContainer,
  PokeImg,
  PokeballImg,
  ProgressBarStats,
} from "./styled";
import Pokeball from "../../../public/assets/pokeball.png";
import { returnBackground } from "../../utils/returnBackground";
import { returnTypes } from "../../utils/ReturnTypes";

const PokemonDetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonByName(name, setPokemon);
  }, []);

  //* Verificações necessárias, pois o estado da página de detalhes inicialmente é vazio. Ou seja, caso não haja pokémons, não há nada para renderizar.
  let pokemonType;

  if (pokemon.types) {
    pokemonType = returnBackground(pokemon.types[0].type.name);
  }

  let pokemonName;

  if (pokemon.name) {
    pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  }

  let pokemonId;

  if (pokemon.id) {
    pokemonId =
      pokemon.id.toString().length === 1 ? `0${pokemon.id}` : pokemon.id;
  }

  return (
    <>
      <PokeInfosContainer color={pokemonType}>
        <PokeballImg src={Pokeball} alt="pokeball" />

        <PokeImg
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon?.name}
        />
        <ImagesContainer>
          <ImgWarpper src={pokemon.sprites?.front_default} alt={pokemon.name} />

          <ImgWarpper src={pokemon.sprites?.back_default} alt={pokemon.name} />
        </ImagesContainer>

        <StatsContainer>
          <TitleContainer>Base Stats</TitleContainer>

          <ProgressBarStats>
            {pokemon.stats?.map((stat, index) => {
              return (
                <div>
                  <p key={index}>{stat.stat.name}</p>
                  <p>{stat.base_stat}</p>
                </div>
              );
            })}
          </ProgressBarStats>
        </StatsContainer>

        <TypeAndMovesContainer>
          <TypesContainer>
            <p>#{pokemonId}</p>
            <h1>{pokemonName}</h1>
            <div>
              {pokemon.types?.map((type, index) => {
                return (
                  <TypeImgContainer
                    key={index}
                    src={returnTypes(type.type.name)}
                    alt={type.type.name}
                  />
                );
              })}
            </div>
          </TypesContainer>

          <MovesContainer>
            <TitleContainer>Moves</TitleContainer>
            {pokemon.moves?.slice(0, 5).map((move, index) => {
              return <p key={index}>{move.move.name}</p>;
            })}
          </MovesContainer>
        </TypeAndMovesContainer>
      </PokeInfosContainer>
    </>
  );
};

export default PokemonDetailPage;
