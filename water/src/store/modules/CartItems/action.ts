import * as types from './types';
import ICartItem from './interface/ICartItem';

export function addItemRequest(payload: ICartItem) {
  return {
    type: types.ADD_ITEM_REQUEST,
    payload,
  };
}
