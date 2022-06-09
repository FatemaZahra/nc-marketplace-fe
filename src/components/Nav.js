import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

const Nav = () => {
  const { userContext } = useContext(UserContext);

  return (
    <nav>
      <span>{userContext.username}</span>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/items">All Items</Link>
      <Link to="/users/:username/basket">Basket</Link>
      <Link to="/users/:username/orders">Orders</Link>
    </nav>
  );
};

export default Nav;
