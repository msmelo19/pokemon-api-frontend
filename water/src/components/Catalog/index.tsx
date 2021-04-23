import React from 'react';
import { PokemonCatalog } from './styled';
import Item from './Item';
import { requestType } from '../../services/axios';

export default function Catalog(): JSX.Element {
  const [pokemonCatalog, setPokemonCatalog] = React.useState([]);

  React.useEffect(() => {
    const getPokemon = async () => {
      const page = 1;
      const numOfPokemon = 10;
      const { data } = await requestType.get('/');
      const { pokemon } = data;

      const startIndex = (page - 1) * numOfPokemon;
      const endIndex = page * numOfPokemon;
      const pokemonResult = pokemon.slice(startIndex, endIndex);
      setPokemonCatalog(pokemonResult);
    };
    getPokemon();
  }, []);

  return (
    <PokemonCatalog>
      {pokemonCatalog.map(({ pokemon }) => {
        const { name } = pokemon;
        const { url } = pokemon;

        return <Item key={url} name={name} url={url} />;
      })}
    </PokemonCatalog>
  );
}
