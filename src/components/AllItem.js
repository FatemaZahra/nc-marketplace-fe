import { useEffect, useState } from "react";
import { fetchItems } from "../utils/api";
import ItemCard from "./ItemCard";
import NewItem from "./PostItem";

const AllItems = () => {
  const [currentItem, setCurrentItem] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems().then(({ items }) => {
      setCurrentItem(items);
      setIsLoading(false)
    });
  });

  if(isLoading) { return <p>Loading...</p>}

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
      <NewItem setCurrentItem={setCurrentItem}/>
    </>
  );
};

export default AllItems;
