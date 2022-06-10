import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import UserContext from "../context/UserContext";
import Kudos from "./Kudos";
import NewUser from "./PostUser";

const Users = () => {
  const [users, setUser] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUserContext } = useContext(UserContext);
 
  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUser(users);
      setIsLoading(false);
    });
  }, []);

  if(isLoading) { return <p>Loading...</p>}

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <>
              <li>
                <h3>{user.username}</h3>
                <img scr={user.avatar_url} alt={user.username} />
                <Button
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  Sign-in
                </Button>
                <Kudos kudos={user.kudos} username={user.username}/>
              </li>
            </>
          );
        })}
      </ul>
      <NewUser setUser={setUser}/>
    </>
  );
};

export default Users;
