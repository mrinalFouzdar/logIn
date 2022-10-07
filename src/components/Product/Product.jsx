import React from "react";
import { Col, Row } from "react-bootstrap";
import Modaldepot from "../../share/From/Modaldepot";
import Modaldistributor from "../../share/From/Modal_Distributor";
import Modaldivision from "../../share/From/Modal_division";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <div className="m-2">
      <Row>
        <Col lg={4} sm={4}>
          <Modaldistributor />
        </Col>
        <Col lg={4} sm={4}>
          <Modaldivision />
        </Col>
        <Col lg={4} sm={4}>
          <Modaldepot />
        </Col>
      </Row>
      <Row >
        <Col>{<ProductList />}</Col>
      </Row>
    </div>
  );
};

export default Product;
