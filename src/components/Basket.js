import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "@mui/material";

import { getBasketByUser } from "../utils/api";
import BasketCard from "./BasketCard";

const Basket = ({ currentBasket, setCurrentBasket }) => {
  const { userContext } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  console.log(currentBasket, "currentBasket");
  useEffect(() => {
    getBasketByUser(userContext.username).then(({ items }) => {
      setCurrentBasket(items);
      setIsLoading(false);
    });
  }, [userContext.username]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul>
        {currentBasket.map((item) => {
          return (
            <>
              <BasketCard key={item.item_id} item={item} />
            </>
          );
        })}
      </ul>
      <Button variant="contained">Check-out</Button>
    </>
  );
};

export default Basket;
