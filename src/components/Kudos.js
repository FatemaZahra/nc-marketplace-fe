import { useContext, useState } from "react";
import {UserContext} from '../context/UserContext'
import { Button } from "@mui/material";
import { modifyUserByUsername } from "../utils/api";

const Kudos = ({kudos, username}) => {
    const [kudosChange, setKudosChange] = useState(0)
    const {userContext} = useContext(UserContext)

    const handleClick = () => {
        setKudosChange((currKudos) => currKudos + 1)
        modifyUserByUsername(username, 1).catch((error) => {
            console.dir(error)
            setKudosChange((currKudos) => currKudos - 1)
        })
    }

    return (
        <>
        <p>Kudos {kudos}</p>
        <Button onClick={handleClick} disabled={kudosChange > 0 || userContext.username === username}>
            {userContext.username === username ? 'You can\'t give yourself kudos' : `Give Kudos to ${username}`}</Button>
        </>
    )
}

export default Kudos;
