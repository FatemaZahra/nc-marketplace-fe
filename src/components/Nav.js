import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
             <Link to="/">Home</Link>
             <Link to="/users">Users</Link>
             <Link to="/users/:username/basket">Basket</Link>
             <Link to="/users/:username/orders">Orders</Link>
        </nav>
    )
}

export default Nav;