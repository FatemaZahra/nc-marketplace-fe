import { useEffect, useState } from "react";
import { fetchItems } from "../utils/api";
import ItemCard from "./ItemCard";

const AllItems = () => {
  const [currentItem, setCurrentItem] = useState([{}]);
  useEffect(() => {
    fetchItems().then(({ items }) => {
      setCurrentItem(items);
    });
  });
  return (
    <>
      <ul>
        {currentItem.map((item) => {
          return (
            <>
              <p>Category: {item.category_name}</p>
              <ItemCard key={item.item_id} item={item} />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default AllItems;
