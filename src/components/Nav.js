import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

const Nav = () => {
  const { userContext } = useContext(UserContext);

  return (
    <nav className="NavBar">
      <span className="NavIcon">{userContext.username}</span>
      <Link to="/" className="NavIcon">
        Home
      </Link>
      <Link to="/users" className="NavIcon">
        Users
      </Link>
      <Link to="/items" className="NavIcon">
        All Items
      </Link>
      <Link to={`/users/${userContext.username}/basket`} className="NavIcon">
        Basket
      </Link>
      <Link to={`/users/${userContext.username}/orders`} className="NavIcon">
        Previous-Orders
      </Link>
    </nav>
  );
};

export default Nav;
