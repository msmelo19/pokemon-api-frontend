import styled from 'styled-components';
import * as colors from '../../../../config/colors';
import { Image, Button } from 'react-bootstrap';

export const DivItem = styled.div`
  width: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 8px 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const DivImage = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;
  background-color: ${colors.secondaryLightColor};
`;

export const ImagePokemon = styled(Image)`
  margin: 8px;
  width: 144px;
  height: 144px;
  align-self: center;
`;

export const PokemonDetails = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameAndPrice = styled.div`
  width: 100%;
  padding: 8px 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  margin-bottom: 0px;
`;

export const Price = styled.h6`
  font-weight: bold;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
