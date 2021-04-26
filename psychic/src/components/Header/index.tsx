import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Navbar,
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Header(props: RouteComponentProps): JSX.Element {
  const { history } = props;
  const [pokemon, setPokemon] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    history.push({
      pathname: '/',
      state: {
        searchedPokemon: pokemon,
      },
    });
  };
  return (
    <Navbar expand="md">
      <Container>
        <Col md>
          <Link
            to={{
              pathname: '/',
              state: { page: 1 },
            }}
          >
            <Navbar.Brand>Psychic</Navbar.Brand>
          </Link>
        </Col>
        <Col md>
          <Form className="ml-auto" onSubmit={(e) => handleSearch(e)}>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Busque aqui seu Pokémon"
                value={pokemon}
                onChange={(e) => setPokemon(e.target.value)}
              ></FormControl>
              <InputGroup.Append>
                <Button
                  variant="secondary-custom"
                  style={{ lineHeight: 0 }}
                  type="submit"
                >
                  <FaSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Container>
    </Navbar>
  );
}

export default withRouter(Header);
