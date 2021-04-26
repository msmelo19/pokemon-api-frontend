import * as types from './types';
import ICartItem from './interface/ICartItem';
import Iid from './interface/Iid';

export function addItemCart(payload: ICartItem) {
  return {
    type: types.ADD_ITEM_CART,
    payload,
  };
}

export function delItemCart(payload: Iid) {
  return {
    type: types.DEL_ITEM_CART,
    payload,
  };
}
