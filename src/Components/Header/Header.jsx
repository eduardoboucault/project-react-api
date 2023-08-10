import { getPokemonByName } from "../../API/request";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordinator";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  let titlePage;

  let titleButtonLeft;

  let nextPage;

  let pokeName = pathname.split("/")[2];

  const { pokedex, setPokedex, removePokemon } = useContext(GlobalStateContext);

  //* O motivo de usar uma função anônima nesse caso é porque você precisa passar argumentos extras para a função setData. A função setData aceita um argumento que é o novo valor do estado, mas você também precisa do pokedex atual para atualizar corretamente a lista. Portanto, você cria uma função anônima que recebe o data (os detalhes do Pokémon) como seu próprio parâmetro, e também tem acesso ao pokedex atual. Você então combina os detalhes do Pokémon com o pokedex atual, criando uma nova lista que inclui o novo Pokémon. Essa nova lista é então passada para setData, atualizando assim o estado.

  //* Em resumo, a função anônima é uma forma de criar um contexto onde você tem acesso tanto aos detalhes do Pokémon quanto ao estado pokedex, permitindo que você atualize o estado de acordo com os detalhes obtidos da API.
  const addPokedex = (name) => {
    getPokemonByName(name, (data) => {
      setPokedex([...pokedex, data]);
    });
  };

  if (pathname === "/") {
    titlePage = "Lista de Pokemons";
    titleButtonLeft = "Ver minha pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    titleButtonLeft = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/details/")) {
    titlePage = pokeName;
    titleButtonLeft = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  }

  //* O array isPokemonInPokedex verifica se o nome do pokemon existe no estado pokedex. Caso o pokémon exista, a renderização condicional dos botões é alterada para remover o pokemon. Caso o pokemon não exista, a renderização condicional é alterada para adicionar o pokemon.
  const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName);

  return (
    <>
      <HeaderContainer>
        <h1>{titlePage}</h1>
        <LeftHeaderButton onClick={nextPage}>
          <p>{titleButtonLeft}</p>
        </LeftHeaderButton>
        {pathname.includes("/details/") &&
          (isPokemonInPokedex ? (
            <RightHeaderButton onClick={() => removePokemon(pokeName)}>
              Remover Pokémon
            </RightHeaderButton>
          ) : (
            <RightHeaderButton onClick={() => addPokedex(pokeName)}>
              Adicionar Pokémon
            </RightHeaderButton>
          ))}
      </HeaderContainer>
    </>
  );
};

export default Header;
