import { Alert, Button } from "@mui/material";
import { addToBasketByUser } from "../utils/api";
import { UserContext } from "../context/UserContext";
import { useState, useContext } from "react";

const AddItemToBasket = ({ item_id, setCurrentBasket }) => {
  const { userContext } = useContext(UserContext);
  const [addedItemToBasket, setAddedItemToBasket] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // setAddedItemToBasket(item_id);
    addToBasketByUser(userContext.username, item_id)
      .then(({ item }) => {
        setCurrentBasket((currList) => {
          return [item, ...currList];
        });
      })
      .catch((error) => {
        console.dir(error);
        return (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        );
      });
    setAddedItemToBasket(0);
  };

  return (
    <>
      <Button onClick={handleSubmit}>Add to Basket</Button>
    </>
  );
};

export default AddItemToBasket;
