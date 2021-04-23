import styled from 'styled-components';
import { rgba } from 'polished';
import * as colors from '../../../config/colors';

export const DivItem = styled.div`
  width: 144px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PokemonDetails = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${rgba(colors.primaryLightColor, 0.2)};
`;

export const Price = styled.h5`
  font-weight: bold;
`;
