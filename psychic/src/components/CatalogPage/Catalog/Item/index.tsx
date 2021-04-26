import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { requestPokemon } from '../../../../services/axios';
import {
  DivItem,
  ImagePokemon,
  DivImage,
  NameAndPrice,
  Name,
  Price,
  PokemonDetails,
  DivButton,
} from './styled';
import * as actions from '../../../../store/modules/CartItems/action';
import { setRealFormat } from '../../../../utils/realFormat';
import capitalize from '../../../../utils/capitalize';

interface IItemProps {
  name: string;
  url: string;
}

export default function Item(props: IItemProps): JSX.Element {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const { name } = props;
  const { url } = props;

  React.useEffect(() => {
    const getPokemon = async () => {
      const { data } = await requestPokemon(url).get('/');
      const { sprites } = data;
      const { front_default } = sprites;
      setImage(front_default);
    };
    getPokemon();

    setPrice(Math.random() * 100);
  }, []);

  const handleAddToCart = () => {
    dispatch(actions.addItemCart({ image, name, price }));
  };

  return (
    <DivItem>
      <DivImage>
        <ImagePokemon src={image} />
      </DivImage>
      <PokemonDetails>
        <NameAndPrice>
          <Name>{capitalize(name)}</Name>
          <Price>{setRealFormat(price)}</Price>
        </NameAndPrice>
        <DivButton>
          <OverlayTrigger
            placement={'right'}
            overlay={
              <Tooltip id="add-cart">
                Adicionar {capitalize(name)} ao carrinho
              </Tooltip>
            }
          >
            <Button
              variant="primary-custom"
              onClick={handleAddToCart}
              style={{ borderRadius: '50%', padding: '12px' }}
            >
              <FiShoppingCart />
            </Button>
          </OverlayTrigger>
        </DivButton>
      </PokemonDetails>
    </DivItem>
  );
}
