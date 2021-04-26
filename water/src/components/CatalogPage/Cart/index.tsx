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
  ContainerItem,
  ImageAndName,
  BtnDelete,
} from './styled';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/CartItems/action';
import capitalize from '../../../utils/capitalize';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
                    <ImageAndName>
                      <OverlayTrigger
                        placement={'left'}
                        overlay={
                          <Tooltip id="del-item">
                            Remover {capitalize(pokemon.name)} do carrinho
                          </Tooltip>
                        }
                      >
                        <BtnDelete
                          variant="link"
                          onClick={() => handleClick(id)}
                        >
                          <TiDelete size={24} />
                        </BtnDelete>
                      </OverlayTrigger>
                      <img src={pokemon.image}></img>
                      <p>{capitalize(pokemon.name)}</p>
                    </ImageAndName>
                    <p>{setRealFormat(pokemon.price)}</p>
                  </ContainerItem>
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
