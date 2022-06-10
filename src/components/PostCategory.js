import { TextField, Alert, Button } from "@mui/material";
import { postCategory } from "../utils/api";
import { useState } from "react";

const NewCategory = ({setCurrentCategories}) => {
    const [addedCategory, setAddedCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        postCategory(addedCategory).then(() => {
            setCurrentCategories((currList) => {
              return [addedCategory, ...currList];
            })
        }).catch((error) => {
           return <Alert severity="error">This is an error alert — check it out!</Alert>
        })
        setAddedCategory('');
      };

    return (
        <>
        <h2>Add New Category</h2>
        <form  onSubmit={handleSubmit}>
        <TextField
            id="outlined-category"
            label="Insert Category"
            value={addedCategory}
            onChange={(event) => setAddedCategory(event.target.value)}
        />
        <Button type="submit">Add Category</Button>
        </form>
        </>
    )
} 

export default NewCategory;

