import { getPokemonByName } from "../../API/request";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordinator";
import {
  HeaderContainer,
  LeftHeaderButton,
  RightHeaderButton,
  PokeLogoImg,
  RemoveButtonStyle,
  AddButtonStyle,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import Pokelogo from "../../../public/assets/pokelogo.png";

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  let titleButtonLeft;

  let nextPage;

  let pokeName = pathname.split("/")[2];

  const { pokedex, setPokedex, removePokemon, setControlModal, setIsOpen } =
    useContext(GlobalStateContext);

  //* O motivo de usar uma função anônima nesse caso é porque você precisa passar argumentos extras para a função setData. A função setData aceita um argumento que é o novo valor do estado, mas você também precisa do pokedex atual para atualizar corretamente a lista. Portanto, você cria uma função anônima que recebe o data (os detalhes do Pokémon) como seu próprio parâmetro, e também tem acesso ao pokedex atual. Você então combina os detalhes do Pokémon com o pokedex atual, criando uma nova lista que inclui o novo Pokémon. Essa nova lista é então passada para setData, atualizando assim o estado.

  //* Em resumo, a função anônima é uma forma de criar um contexto onde você tem acesso tanto aos detalhes do Pokémon quanto ao estado pokedex, permitindo que você atualize o estado de acordo com os detalhes obtidos da API.
  const addPokedex = (name) => {
    setIsOpen(true);
    setControlModal(1);
    getPokemonByName(name, (data) => {
      setPokedex([...pokedex, data]);
    });
  };

  if (pathname === "/") {
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titleButtonLeft = "All Pokémons";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/details/")) {
    titleButtonLeft = "All Pokémons";
    nextPage = () => goToPokemonListPage(navigate);
  }

  //* O array isPokemonInPokedex verifica se o nome do pokemon existe no estado pokedex. Caso o pokémon exista, a renderização condicional dos botões é alterada para remover o pokemon. Caso o pokemon não exista, a renderização condicional é alterada para adicionar o pokemon.
  const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName);

  return (
    <>
      <HeaderContainer>
        {pathname === "/pokedex" || pathname.includes("/details/") ? (
          <LeftHeaderButton onClick={nextPage}>
            {titleButtonLeft}
          </LeftHeaderButton>
        ) : (
          <RightHeaderButton onClick={nextPage}>Pokedex</RightHeaderButton>
        )}
        <PokeLogoImg src={Pokelogo} alt="logo" />
        {pathname.includes("/details/") &&
          (isPokemonInPokedex ? (
            <RemoveButtonStyle onClick={() => removePokemon(pokeName)}>
              Delete from Pokédex
            </RemoveButtonStyle>
          ) : (
            <AddButtonStyle onClick={() => addPokedex(pokeName)}>
              Capture Pokémon
            </AddButtonStyle>
          ))}
      </HeaderContainer>
    </>
  );
};

export default Header;
