import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../../store/modules/rootTypes';
import ICartItem from '../../../store/modules/CartItems/interface/ICartItem';
import { setRealFormat } from '../../../utils/realFormat';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/CartItems/action';
import {
  ShoppingCart,
  ContainerItem,
  PokemonDetails,
  ParagraphCenter,
  NoItemsMsg,
  TotalPriceArea,
  BtnCheckout,
  BtnDelete,
  Name,
  Price,
} from './styled';
import { Image } from 'react-bootstrap';
import capitalize from '../../../utils/capitalize';

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
                <div key={id}>
                  <ContainerItem>
                    <PokemonDetails>
                      <Image src={pokemon.image} />
                      <div>
                        <Name>{capitalize(pokemon.name)}</Name>
                        <Price>{setRealFormat(pokemon.price)}</Price>
                      </div>
                    </PokemonDetails>
                    <BtnDelete
                      variant="outline-danger"
                      onClick={() => handleClick(id)}
                    >
                      Excluir
                    </BtnDelete>
                  </ContainerItem>
                  <hr />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <NoItemsMsg>
              <h5>Não há nada aqui</h5>
              <ParagraphCenter>
                Dê uma olhada em nosso catálogo e adicione seus Pokémon
                favoritos
              </ParagraphCenter>
            </NoItemsMsg>
            <hr />
          </>
        )}
        <TotalPriceArea>
          <h5>Total</h5>
          <p>{setRealFormat(totalPrice)}</p>
        </TotalPriceArea>
      </ShoppingCart>
      <BtnCheckout variant="secondary-custom">Finalizar compra</BtnCheckout>
    </>
  );
}
