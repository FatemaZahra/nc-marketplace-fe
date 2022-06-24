import { TextField, Alert, Button } from "@mui/material";
import { postItem } from "../utils/api";
import { useState } from "react";

const NewItem = ({ setCurrentItem }) => {
  const [addedItem, setAddedItem] = useState({
    item_name: "",
    img_url: "",
    price: 0,
    description: "",
    category_name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    postItem(addedItem)
      .then(() => {
        setCurrentItem((currList) => {
          return [addedItem, ...currList];
        });
      })
      .catch((error) => {
        console.dir(error);
        return (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        );
      });
    setAddedItem({
      item_name: "",
      img_url: "",
      price: 0,
      description: "",
      category_name: "",
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setAddedItem((currentItem) => {
      return { ...currentItem, [name]: value };
    });
  };

  return (
    <>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-name"
          label="Insert Item Name"
          name="item_name"
          value={addedItem.item_name}
          onChange={handleInput}
        />
        <TextField
          id="outlined-img"
          label="Insert Image URL"
          name="img_url"
          value={addedItem.img_url}
          onChange={handleInput}
        />
        <TextField
          id="outlined-price"
          label="Insert Price"
          name="price"
          value={addedItem.price}
          onChange={handleInput}
        />
        <TextField
          id="outlined-description"
          label="Insert description"
          name="description"
          value={addedItem.description}
          onChange={handleInput}
        />
        <TextField
          id="outlined-category_name"
          label="Insert Category"
          name="category_name"
          value={addedItem.category_name}
          onChange={handleInput}
        />
        <Button type="submit">Add Item</Button>
      </form>
    </>
  );
};

export default NewItem;
