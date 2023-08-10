import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 20vh;
  min-height: 160px;
  max-height: 300px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
`;

export const LeftHeaderButton = styled.button`
  height: 36px;
  width: 210px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  position: absolute;
  left: 10px;
  color: black; /* Cor inicial do texto */

  &:hover {
    color: gray; /* Cor ao passar o mouse */
  }
`;

export const RightHeaderButton = styled.button`
  height: 74px;
  width: 287px;
  background-color: #33a4f5;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  position: absolute;
  right: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const PokeLogoImg = styled.img`
  width: 307px;
`;

export const RemoveButtonStyle = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  right: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #ff6262;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const AddButtonStyle = styled.button`
  width: 226px;
  height: 57px;
  position: absolute;
  right: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #33a4f5;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
