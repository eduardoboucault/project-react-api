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
} from "./styled";

const PokemonDetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonByName(name, setPokemon);
  }, []);

  return (
    <>
      <PokeInfosContainer>
        <ImagesContainer>
          <ImgWarpper src={pokemon.sprites?.front_default} alt={pokemon.name} />
          <ImgWarpper src={pokemon.sprites?.back_default} alt={pokemon.name} />
        </ImagesContainer>

        <StatsContainer>
          <TitleContainer>
            {pokemon.stats?.map((stat) => {
              return (
                <p key={Math.random()}>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              );
            })}
          </TitleContainer>
        </StatsContainer>

        <TypeAndMovesContainer>
          <TypesContainer>
            {pokemon.types?.map((type) => {
              return <p key={Math.random()}>{type.type.name}</p>;
            })}
          </TypesContainer>
        </TypeAndMovesContainer>

        <MovesContainer>
          <TitleContainer>Principais Ataques</TitleContainer>
          {pokemon.moves?.slice(0, 5).map((move) => {
            return <p key={Math.random()}>{move.move.name}</p>;
          })}
        </MovesContainer>
      </PokeInfosContainer>
    </>
  );
};

export default PokemonDetailPage;
