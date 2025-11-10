import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNav = ({ menu, setMenu, products, carts }) => {
  const homeRef = useRef();
  const todosRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentsRef = useRef();
  const productsRef = useRef();
  const cartsRef = useRef();

  useEffect(() => {
    switch (menu) {
      case "Home":
        homeRef.current.click();
        break;
      case "Calculator":
        calculatorRef.current.click();
        break;
      case "Animation":
        animationRef.current.click();
        break;
      case "Components":
        componentsRef.current.click();
        break;
      case "Todos":
        todosRef.current.click();
        break;
      case "Products":
        productsRef.current.click();
        break;
      case "Carts":
        cartsRef.current.click();
        break;
    }
  }, [menu]);

  return (
    <div className="d-flex justify-content-center gap-2 bg-dark mt-2 p-2 nav">
      <Link to={"home"}>
        <Button
          variant={menu === "Home" ? "hold" : "outline-hold"}
          ref={homeRef}
          onClick={() => setMenu("Home")}
        >
          Home
        </Button>
      </Link>
      <Link to={"calculator"}>
        <Button
          variant={menu === "Calculator" ? "hold" : "outline-hold"}
          ref={calculatorRef}
          onClick={() => setMenu("Calculator")}
        >
          Calculator
        </Button>
      </Link>
      <Link to={"animation"}>
        <Button
          variant={menu === "Animation" ? "hold" : "outline-hold"}
          ref={animationRef}
          onClick={() => setMenu("Animation")}
        >
          Animation
        </Button>
      </Link>
      <Link to={"components"}>
        <Button
          variant={menu === "Components" ? "hold" : "outline-hold"}
          ref={componentsRef}
          onClick={() => setMenu("Components")}
        >
          Components
        </Button>
      </Link>
      <Link to={"todos"}>
        <Button
          variant={menu === "Todos" ? "hold" : "outline-hold"}
          ref={todosRef}
          onClick={() => setMenu("Todos")}
        >
          Todos
        </Button>
      </Link>
      <Link to={"products"}>
        <Button
          variant={menu === "Products" ? "hold" : "outline-hold"}
          ref={productsRef}
          onClick={() => setMenu("Products")}
        >
          Products {products.length}
        </Button>
      </Link>
      <Link to={"carts"}>
        <Button
          variant={menu === "Carts" ? "hold" : "outline-hold"}
          ref={cartsRef}
          onClick={() => setMenu("Carts")}
        >
          Carts {carts.length ? carts.length : 0}
        </Button>
      </Link>
      <Link>
        <Button
          variant={"outline-hold"}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      </Link>
    </div>
  );
};

export default AppNav;
