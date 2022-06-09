import { Button } from "@mui/material";
const ItemCard = ({ item }) => {
  return (
    <>
      <li key={item.item_id}>
        <p>{item.item_name}</p>
        <p>{item.description}</p>
        <img scr={item.img_url} alt={item.item_name} />
        <p>Price: {item.price}</p>
        <Button>Order</Button>
        <Button>Add to Basket</Button>
      </li>
    </>
  );
};
export default ItemCard;
