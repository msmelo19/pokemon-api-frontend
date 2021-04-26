import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import RootState from './rootTypes';
import { Reducer } from 'redux';

export default function (reducers: Reducer) {
  return persistReducer(
    {
      key: 'WATER_STORE',
      storage,
      whitelist: ['cartItem'],
    },
    reducers,
  );
}
