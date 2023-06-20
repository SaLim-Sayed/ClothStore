import React from "react";
import Card from "react-bootstrap/Card";

function Product({ product }) {
  return (
    <div className="col col-lg-3 col-md-6 col-sm-12 my-2">
      <Card >
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title style={{ height: "70px" }}>{product.title}</Card.Title>
          <Card.Text style={{ height: "300px", overflowY: "scroll" }}>
            {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price : {product.price} $</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Product;
