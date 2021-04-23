import { AnyAction } from 'redux';
import * as types from './types';
import ICartItem from './interface/ICartItem';

interface IState {
  pokemon: ICartItem[];
}

const initialState: IState = {
  pokemon: [],
};

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.ADD_ITEM_CART: {
      const newState = { ...state };
      const pokemon: ICartItem = {
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
      };
      newState.pokemon.push(pokemon);
      return newState;
    }

    default:
      return state;
  }
}
