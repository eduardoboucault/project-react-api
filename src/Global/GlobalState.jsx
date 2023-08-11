import { useState } from "react";

//* Após a criação do arquivo que utiliza o createContext, é necessário criar outro arquivo, o GlobalState. Importaremos o GlobalStateContext.jsx, pois todas as funcionalidades serão passadas para o arquivo GlobalState. Dentro deste arquivo criaremos uma variável que receberá como parâmetro o argumento children. E todas as funções, estados de contexto deverão estar contidas neste arquivo.
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = ({ children }) => {
  //* Estado do pokemon que vai ser renderizado na tela, é puxado via API pela função getPokemonByName do arquivo PokemonDetailPage.jsx
  const [pokedex, setPokedex] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [controlModal, setControlModal] = useState(1);

  //* A função addPokemon adiciona um novo pokemon no estado pokedex. O argumento utilizado será recebido na chamada da função no botão adicionar com onClick. Será copiado o estado pokedex e adicionado o novo pokemon. Quem é responsável por alterar o estado é o setPokedex.
  const addPokemon = (pokemon) => {
    setIsOpen(true);
    setControlModal(1);
    setPokedex([...pokedex, pokemon]);
  };

  //* A função removePokemon receberá um nome de um pokemon como argumento e irá comparar esse nome com os nomes de todos os pokemons no estado pokedex. Caso o nome seja igual a algum dos pokemons no estado, o pokemon será removido do estado pokedex.
  const removePokemon = (pokemon) => {
    setIsOpen(true);
    setControlModal(2);
    setPokedex(pokedex.filter((poke) => poke.name !== pokemon));
  };

  //* O objeto data possui os estados pokedex, setPokedex, addPokemon e removePokemon, que são passados como argumentos para a função GlobalStateContext. O GlobalState tem acesso a todos os estados e funções de contexto.
  const data = {
    pokedex,
    setPokedex,
    isOpen,
    setIsOpen,
    controlModal,
    setControlModal,
    addPokemon,
    removePokemon,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
