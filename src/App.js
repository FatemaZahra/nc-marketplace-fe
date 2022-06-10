import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Basket from "./components/Basket";
import Orders from "./components/Orders";
import Home from "./components/Home";
import AllItems from "./components/AllItem";
import ItemsByCategory from "./components/ItemsByCategory";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [userContext, setUserContext] = useState({
    username: "Paul-R",
    avatar_url: "https://example.com/Paul-R.jpg",
    kudos: 15,
    items_in_basket: 2,
    items_ordered: 1,
  });
  
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ userContext, setUserContext }}>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/items/:category_name" element={<ItemsByCategory />} />
            <Route path="/items" element={<AllItems />} />
            <Route path="/users/:username/basket" element={<Basket />} />
            <Route path="/users/:username/orders" element={<Orders />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
