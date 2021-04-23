import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { requestPokemon } from '../../../services/axios';
import { DivItem, PokemonDetails } from './styled';
import * as actions from '../../../store/modules/CartItems/action';

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
    dispatch(actions.addItemRequest({ image, name, price }));
  };

  return (
    <DivItem>
      <Image src={image} fluid />
      <PokemonDetails>
        <p>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
        <h5 style={{ fontWeight: 'bold' }}>{`R$${price
          .toFixed(2)
          .toString()
          .replace('.', ',')}`}</h5>
      </PokemonDetails>
      <Button variant="secondary-custom" onClick={handleAddToCart}>
        <FiShoppingCart />
        Adicionar
      </Button>
    </DivItem>
  );
}
