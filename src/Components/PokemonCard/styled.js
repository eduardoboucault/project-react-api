import styled from "styled-components";

export const PokeCardContainer = styled.div`
  width: 440px;
  height: 210px;
  margin: 10px;
  background-color: ${(props) => props.type};
  position: relative;
  border-radius: 10px;
  color: #ffffff;
`;

export const ImgContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
  height: 193px;
  position: absolute;
  top: -55px;
  right: 0px;
`;

export const TypeImgContainer = styled.img`
  width: 91px;
  height: 31px;
  margin: 3px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25%;
`;

export const ButtonDetails = styled.h3`
  width: 74px;
  height: 24px;
  cursor: pointer;
  margin-left: 15px;
  font-weight: bold;
  text-decoration: underline;
  color: white; /* Cor inicial do texto */

  &:hover {
    color: black; /* Cor ao passar o mouse */
  }
`;

export const ButtonCapture = styled.button`
  width: 146px;
  height: 38px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ffffff;
  margin-right: 15px;
  z-index: 1;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ReleaseButton = styled.button`
  width: 146px;
  height: 38px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff6262;
  margin-right: 15px;
  z-index: 1;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 60%;
  margin: 25px 0 0 25px;
`;

export const PokeballImg = styled.img`
  position: absolute;
  height: 210.73px;
  top: 0px;
  right: 0px;
  z-index: 0;
`;
