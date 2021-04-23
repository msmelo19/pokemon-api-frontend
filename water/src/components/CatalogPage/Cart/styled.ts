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

export const TotalPriceArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnCheckout = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
`;
