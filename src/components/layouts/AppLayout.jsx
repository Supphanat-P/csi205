import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader";
import AppNav from "../AppNav";
import AppFooter from "../AppFooter";

const AppLayout = ({ menu, setMenu, products, carts }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppHeader />
      <AppNav menu={menu} setMenu={setMenu} products={products} carts={carts} />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
