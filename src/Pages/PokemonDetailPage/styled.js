import styled from "styled-components";

export const MainDetailsContainer = styled.main`
  background-color: #5d5d5d;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  background-color: #5d5d5d;
`;

export const PokeInfosContainer = styled.div`
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
  width: 400px;
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
    max-width: 50%;
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

export const ProgressBarStatsContainer = styled.div`
  height: 50%;
  section {
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
  }
`;

export const DivProgress = styled.div`
  width: 100%;
`;

export const ProgressBar = styled.div`
  height: 10px;
  background-color: #ff7c2e;
  width: ${(props) => props.widthbar}%;
  border-radius: 10px;
`;

export const PStatsName = styled.p`
  display: flex;
  justify-content: end;
`;

export const PStatsNumber = styled.p`
  display: flex;
  justify-content: center;
`;
