import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cart from '../Cart';
import Catalog from '../Catalog';
import { ContainerCatalog } from './styled';

export default function CatalogPage(): JSX.Element {
  return (
    <ContainerCatalog fluid>
      <Row>
        <Col md={7} lg={8}>
          <Catalog />
        </Col>
        <Col md={5} lg={4}>
          <Cart />
        </Col>
      </Row>
    </ContainerCatalog>
  );
}
