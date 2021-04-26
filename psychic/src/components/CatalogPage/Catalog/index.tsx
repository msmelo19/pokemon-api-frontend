import React from 'react';
import IProps from './IProps';
import { PokemonCatalog } from './styled';
import Item from './Item';

export default function Catalog(props: IProps): JSX.Element {
  const { pokemonCatalog } = props;

  return (
    <PokemonCatalog>
      {pokemonCatalog.map((item: any) => {
        const { pokemon } = item;
        const { name } = pokemon;
        const { url } = pokemon;

        return <Item key={url} name={name} url={url} />;
      })}
    </PokemonCatalog>
  );
}
