import React from "react";
import { Col, Row } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import Modaldepot from "../../share/From/Modaldepot";
import Modaldistributor from "../../share/From/Modal_Distributor";
import Modaldivision from "../../share/From/Modal_division";
import ProductList from "./ProductList";

const Product = () => {
  const { dataShow } = React.useContext(DataContext);
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
      <Row>
        <Col>{dataShow && <ProductList />}</Col>
      </Row>
    </div>
  );
};

export default Product;
