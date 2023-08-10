export const goToPokemonListPage = (navigate) => {
  navigate("/");
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemonDetailPage = (navigate, name) => {
  navigate(`/details/${name}`);
};
