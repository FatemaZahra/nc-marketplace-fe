import { TextField, Alert, Button } from "@mui/material";
import { postUser } from "../utils/api";
import { useState } from "react";

const NewUser = ({setUser}) => {
    const [addedUser, setAddedUser] = useState({username: '', avatar_url: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        postUser(addedUser).then(() => {
            setUser((currList) => {
              return [addedUser, ...currList];
            })
        }).catch((error) => {
            console.dir(error)
           return <Alert severity="error">This is an error alert — check it out!</Alert>
        })
        setAddedUser({username: '', avatar_url: ''});
      };

    const handleInput = (event) => {
        const {name, value} = event.target
        setAddedUser((currUser) => {
            return {...currUser, [name]: value}
        })
    }

    return (
        <>
        <h2>Add New User</h2>
        <form  onSubmit={handleSubmit}>
        <TextField
            id="outlined-username"
            label="Insert Username"
            name='username'
            value={addedUser.username}
            onChange={handleInput}
        />
         <TextField
            id="outlined-avatar"
            label="Insert Avatar URL"
            name='avatar_url'
            value={addedUser.avatar_url}
            onChange={handleInput}
        />
        <Button type="submit">Add User</Button>
        </form>
        </>
    )
} 

export default NewUser;

