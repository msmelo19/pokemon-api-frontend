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
                <Button variant="secondary-custom" type="submit">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Container>
    </Navbar>
  );
}
