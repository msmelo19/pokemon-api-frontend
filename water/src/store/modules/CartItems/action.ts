import * as types from './types';
import ICartItem from './interface/ICartItem';

export function addItemCart(payload: ICartItem) {
  return {
    type: types.ADD_ITEM_CART,
    payload,
  };
}
