import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Users from './components/Users'
import Basket from './components/Basket'
import Orders from './components/Orders'
import Home from './components/Home'
import ItemsByCategory from "./components/ItemsByCategory";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Header />
          <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path='/items?category_name=:category_name' element={<ItemsByCategory />} />
          <Route path="/users/:username/basket" element={<Basket />} />
          <Route path="/users/:username/orders" element={<Orders />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
