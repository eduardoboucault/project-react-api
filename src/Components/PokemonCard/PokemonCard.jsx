import { goToPokemonDetailPage } from "../../Router/Coordinator";
import {
  ButtonsContainer,
  PokeCardContainer,
  PokeImg,
  ImgContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";

const PokemonCard = () => {
  const navigate = useNavigate();
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={
            "https://i.pinimg.com/originals/50/32/77/503277d1a49909dbc758da436015928f.jpg"
          }
          alt="Ditto"
        />
      </ImgContainer>
      <ButtonsContainer>
        <button>Adicionar</button>
        <button onClick={()=> goToPokemonDetailPage(navigate, 1)}>Ver detalhes</button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
