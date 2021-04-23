import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { requestType } from '../../services/axios';
import Cart from './Cart';
import Catalog from './Catalog';
import { ContainerCatalog } from './styled';
import PaginationPokemon from './PaginationPokemon';

export default function CatalogPage(): JSX.Element {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [pokemonCatalog, setPokemonCatalog] = React.useState([]);

  const getPokemon = async () => {
    const numOfPokemonShown = 10;
    const { data } = await requestType.get('/');
    const { pokemon } = data;

    const startIndex = (page - 1) * numOfPokemonShown;
    const endIndex = page * numOfPokemonShown;
    setTotalPages(Math.ceil(pokemon.length / numOfPokemonShown));

    const pokemonResult = pokemon.slice(startIndex, endIndex);
    setPokemonCatalog(pokemonResult);
  };

  React.useEffect(() => {
    getPokemon();
  }, [page]);

  return (
    <ContainerCatalog fluid>
      <Row>
        <Col md={7} lg={8}>
          <Catalog pokemonCatalog={pokemonCatalog} />
        </Col>
        <Col md={5} lg={4}>
          <Cart />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaginationPokemon
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </Col>
      </Row>
    </ContainerCatalog>
  );
}
