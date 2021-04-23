import React from 'react';
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

export default function Header(): JSX.Element {
  return (
    <Navbar expand="md">
      <Container>
        <Col md>
          <Navbar.Brand>WaterStore</Navbar.Brand>
        </Col>
        <Col md>
          <Form className="ml-auto">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Qual Pokémon você está procurando?"
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
