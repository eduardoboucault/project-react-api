import styled from "styled-components";

export const PokeInfosContainer = styled.main`
  height: 663px;
  width: 1389.14px;
  border-radius: 10px;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  background-color: ${(props) => props.color};
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWarpper = styled.img`
  height: 30vh;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin: 5px;
`;

export const PokeImg = styled.img`
  height: 193px;
  position: absolute;
  top: -55px;
  right: 0px;
`;

export const PokeballImg = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 0;
`;

export const StatsContainer = styled.div`
  background: #f1f1f1;
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  border-radius: 10px;
  z-index: 1;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: #f1f1f1;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  margin-top: 68px;
  border-radius: 10px;
  z-index: 1;
  p {
    background-color: #ececec;
    max-width: 40%;
    height: 40px;
    border-radius: 10px;
    border: 1px dashed rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const TypeImgContainer = styled.img`
  width: 91px;
  height: 31px;
  margin: 3px;
`;

export const ProgressBarStats = styled.div`
  height: 70%;
`;
