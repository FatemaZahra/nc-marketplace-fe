import { Button } from "@mui/material";
const BasketCard = ({ item }) => {
  return (
    <>
      <li key={item.item_id} className="Category">
        <p>{item.item_name}</p>
        <p>{item.description}</p>
        <img scr={item.img_url} alt={item.item_name} />
        <p>Price: {item.price}</p>
        <Button>Qty: +</Button>
        <Button>Remove From Basket</Button>
      </li>
    </>
  );
};
export default BasketCard;
