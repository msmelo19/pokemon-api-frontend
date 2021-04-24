import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../../store/modules/rootTypes';
import ICartItem from '../../../store/modules/CartItems/interface/ICartItem';
import { setRealFormat } from '../../../utils/realFormat';
import {
  ShoppingCart,
  ParagraphCenter,
  NoItemsMsg,
  TotalPriceArea,
  BtnCheckout,
  BtnDelete,
} from './styled';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/CartItems/action';

export default function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const [items, setItems] = React.useState<Array<ICartItem>>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const { pokemon } = useSelector((state: RootState) => state.cartItem);

  React.useEffect(() => {
    setItems(pokemon);
  }, [pokemon]);

  React.useEffect(() => {
    const total = items.reduce((total, current) => {
      total += current.price;
      return total;
    }, 0);
    setTotalPrice(total);
  }, [items.length]);

  const handleClick = (id: number) => {
    dispatch(actions.delItemCart({ id }));
  };

  return (
    <>
      <ShoppingCart>
        <h3>Carrinho</h3>
        <hr />
        {items.length > 0 ? (
          <div>
            {items.map((pokemon, id) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  key={id}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <BtnDelete variant="link" onClick={() => handleClick(id)}>
                      <TiDelete size={24} />
                    </BtnDelete>
                    <img src={pokemon.image}></img>
                    <p>
                      {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)}
                    </p>
                  </div>
                  <p>{setRealFormat(pokemon.price)}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <NoItemsMsg>
            <h5>Carrinho vazio</h5>
            <ParagraphCenter>
              Comece agora a adicionar seus Pokémon favoritos
            </ParagraphCenter>
          </NoItemsMsg>
        )}
        <hr />
        <TotalPriceArea>
          <h5>Total</h5>
          <p>{setRealFormat(totalPrice)}</p>
        </TotalPriceArea>
      </ShoppingCart>
      <BtnCheckout variant="secondary-custom">Finalizar compra</BtnCheckout>
    </>
  );
}
