import placeholder from "../../assets/150x150.png";
import { Card, Button, Badge } from "react-bootstrap";
const Products = ({ products, carts, setCarts }) => {
  return (
    <>
      <div
        className="products-container ms-auto me-auto m-3 justify-content-center align-content-center"
        style={{ width: "fit-content" }}
      >
        <div className="products-items-container">
          {products.map((product) => (
            <Card
              style={{ width: "15rem" }}
              key={product.id}
              className="product-item"
            >
              <Card.Img variant="top" src={placeholder} alt={product.id} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price.toFixed(2)}</Card.Text>
                {carts.find((item) => item.id === product.id) ? (
                  <Badge bg="danger" className="p-2">
                    Added to Cart
                  </Badge>
                ) : (
                  <Button
                    variant="outline-primary btn-outline-primary"
                    className="btn-outline-primary"
                    onClick={() => {
                      setCarts([...carts, product]);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
