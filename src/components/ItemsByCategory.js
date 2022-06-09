import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemsByCategory } from "../utils/api";
import ItemCard from "./ItemCard";

const ItemsByCategory = () => {
  const { category_name } = useParams();
  const [currentItems, setCurrentItems] = useState([{}]);
  useEffect(() => {
    fetchItemsByCategory(category_name).then(({ items }) => {
      setCurrentItems(items);
    });
  }, [category_name]);

  return (
    <>
      <ul>
        {currentItems.map((item) => {
          return <ItemCard key={item.item_id} item={item} />;
        })}
      </ul>
    </>
  );
};
export default ItemsByCategory;
