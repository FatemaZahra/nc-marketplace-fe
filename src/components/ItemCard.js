import { Button } from "@mui/material";
import AddItemToBasket from "./AddItemToBasket";
const ItemCard = ({ item, setCurrentBasket }) => {
  return (
    <>
      <li key={item.item_id}>
        <p>{item.item_name}</p>
        <p>{item.description}</p>
        <img scr={item.img_url} alt={item.item_name} />
        <p>Price: {item.price}</p>
        <Button>Order</Button>
        <AddItemToBasket
          item_id={item.item_id}
          setCurrentBasket={setCurrentBasket}
        />
      </li>
    </>
  );
};
export default ItemCard;
