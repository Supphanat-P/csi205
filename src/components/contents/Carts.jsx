import placeholder from "../../assets/150x150.png";
import { Card, Button, Badge } from "react-bootstrap";
const Carts = ({ carts, setCarts }) => {
  return (
    <>
      <div
        className="products-container ms-auto me-auto m-3 justify-content-center align-content-center"
        style={{ width: "fit-content" }}
      >
        <div className="products-items-container">
          {carts.map((product) => (
            <Card
              style={{ width: "15rem", height: "fit-content" }}
              key={product.id}
              className="product-item"
            >
              <Card.Img variant="top" src={placeholder} alt={product.id} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price.toFixed(2)}</Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((item) => item.id !== product.id));
                  }}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="d-flex justify-content-center p-3">
          <h4>Total Items: {carts.length}</h4>
          <h4>&nbsp;-&nbsp;</h4>
          <h4>
            Total Price: $
            {carts.reduce((p, cart) => p + cart.price, 0).toFixed(2)}
          </h4>
        </div>
      </div>
    </>
  );
};
export default Carts;
