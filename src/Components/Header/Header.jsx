import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordinator";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ page, setPage }) => {
  let titlePage;
  let titleButtonLeft;
  let nextPage;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/") {
    titlePage = "Lista de Pokemons";
    titleButtonLeft = "Ver minha pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    titleButtonLeft = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/pokemon/")) {
    titlePage = "Nome do Pokémon";
    titleButtonLeft = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  }

  return (
    <>
      <HeaderContainer>
        <h1>{titlePage}</h1>
        <LeftHeaderButton onClick={nextPage}>
          <p>{titleButtonLeft}</p>
        </LeftHeaderButton>
        {pathname.includes("/pokemon/") ? (
          <RightHeaderButton>Adicionar / Remover Pokémon</RightHeaderButton>
        ) : (
          <></>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
