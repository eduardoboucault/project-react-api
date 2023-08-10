//* Importante se atentar as importações das dependências.
import { goToPokemonDetailPage } from "../../Router/Coordinator";
import {
  ButtonsContainer,
  PokeCardContainer,
  PokeImg,
  ImgContainer,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, addPokemon, removePokemon }) => {
  //* useNavigate e useLocation são usados para navegar para a página de detalhes do pokemon.

  //* Ao desestruturar o location proveniente do useLocation, utilizo a propriedade pathname para navegar para a página de detalhes do pokemon baseado no nome do pokemon que é passado via params do coordinator.

  //* As propriedades desestruturadas na chamada de PokemonCard são recebidas para serem consumidas em outros componentes. A propriedade pokemon é utilizada para renderizar os dados dos pokemons, a propriedade addPokemon é utilizada para adicionar os pokemons no estado de pokedex e a propriedade removePokemon é utilizada para remover os pokemons do estado de pokedex.

  const navigate = useNavigate();
  const { pathname } = useLocation();

  //* pathname possui a informação do nome do path mencionado nas rotas criadas. Cada rota possui um path e um element, o path é o nome do path e o element é o elemento que será renderizado.

  //* A renderização condicional dos buttons é baseada no pathname. Como o PokemonCard é um componente utilizado mais de uma vez no app, ele pode aparecer com um botão de adicionar ou remover. Essa condição é criada pela sintaxe do if ternário. Onde caso pathname for igual a valor x ele renderiza botão x, caso contrário renderiza botão y.

  //* No botão renderizado para pathname diferente de "/" ele remove o pokemon do estado de pokedex. Para isso é necessário passar um argumento para a função removePokemon. No caso é o nome do pokemon. Que é proveniente da propriedade pokemon do componente.

  //* Todas as informações consumidas nos componentes são puxadas via API. API que por sua vez é passada via estado.
  
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      </ImgContainer>
      <ButtonsContainer>
        {pathname === "/" ? (
          <button onClick={() => addPokemon(pokemon)}>Adicionar</button>
        ) : (
          <button onClick={() => removePokemon(pokemon.name)}>Remover</button>
        )}

        <button onClick={() => goToPokemonDetailPage(navigate, pokemon.name)}>
          Ver detalhes
        </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
