import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { useEffect, useState } from "react";

import Animation from "./components/contents/Animation";
import Home from "./components/contents/Home";
import Calculator from "./components/contents/Calculator";
import ReactComponents from "./components/contents/ReactComponents";
import Todos from "./components/contents/Todos";
import AppLayout from "./components/layouts/AppLayout";
import Products from "./components/contents/products";
import Carts from "./components/contents/Carts";
import Login from "./components/contents/Login";
import { fecthProductsWithPrice } from "./data/productsdata";

function App() {
  const [menu, setMenu] = useState(0);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setProducts(fecthProductsWithPrice());
  }, []);

  console.log("Token:", token);
  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <BrowserRouter basename="/csi205">
        <Routes>
          <Route
            element={
              <AppLayout
                menu={menu}
                setMenu={setMenu}
                products={products}
                carts={carts}
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/components" element={<ReactComponents />} />
            <Route path="/Todos" element={<Todos />} />

            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route
              path="/carts"
              element={<Carts carts={carts} setCarts={setCarts} />}
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
