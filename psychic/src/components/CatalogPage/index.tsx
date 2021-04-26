import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { requestType } from '../../services/axios';
import { get } from 'lodash';
import Cart from './Cart';
import Catalog from './Catalog';
import { ContainerCatalog } from './styled';
import PaginationPokemon from './PaginationPokemon';
import paginate from '../../utils/paginate';

export default function CatalogPage(props: any): JSX.Element {
  const { timestamp } = props;
  const searchedPokemon: string = get(props, 'location.state.searchedPokemon');
  const pageProps = get(props, 'location.state.page', 1);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [pokemonCatalog, setPokemonCatalog] = React.useState([]);

  React.useEffect(() => {
    setPage(pageProps);
  }, [timestamp]);

  React.useEffect(() => {
    const getPokemon = async () => {
      const numOfPokemonShown = 10;
      const { data } = await requestType.get('/');
      const { pokemon } = data;

      if (searchedPokemon) {
        const filteredPokemon = pokemon.filter((item: any) => {
          const name = get(item, 'pokemon.name');
          if (searchedPokemon.toLowerCase() === name) {
            return item;
          }
        });
        setTotalPages(
          paginate(filteredPokemon, page, numOfPokemonShown).totalPages,
        );

        setPokemonCatalog(
          paginate(filteredPokemon, page, numOfPokemonShown).array,
        );
      } else {
        setTotalPages(paginate(pokemon, page, numOfPokemonShown).totalPages);

        setPokemonCatalog(paginate(pokemon, page, numOfPokemonShown).array);
      }
    };

    getPokemon();
  }, [page, searchedPokemon]);

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
