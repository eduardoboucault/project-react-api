import axios from "axios";

export const getAllPokemons = (setData) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then((res) => {
      const pokeResults = res.data.results;
      const newRequest = pokeResults.map((poke) => axios.get(poke.url));
      Promise.all(newRequest).then((res) => {
        const pokeData = res.map((poke) => poke.data);
        setData(pokeData);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPokemonByName = (name, setData) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
