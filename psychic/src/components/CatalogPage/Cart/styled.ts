import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const ShoppingCart = styled.div`
  padding: 32px 16px 0;
  background-color: ${colors.grayColor};
`;

export const NoItemsMsg = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ParagraphCenter = styled.p`
  text-align: center;
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  margin-bottom: 0px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`;

export const TotalPriceArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnCheckout = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BtnDelete = styled(Button)`
  &.btn-link {
    color: ${colors.primaryColor};

    &:hover {
      color: ${colors.primaryDarkColor};
    }

    &:not(:disabled):not(.disabled).active,
    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled):active:focus,
    &:focus {
      box-shadow: none;
      color: ${colors.primaryColor};
    }
  }
`;
