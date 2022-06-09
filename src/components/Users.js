import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import UserContext from "../context/UserContext";
// import { useParams } from "react-router-dom";
const Users = () => {
  const [users, setUser] = useState([{}]);
  const { setUserContext } = useContext(UserContext);
  //   const { username } = useParams();
  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUser(users);
    });
  });
  //   const handleKudosInc = () => {
  //     useEffect(() => {
  //       modifyUserByUsername(username).then(({ users }) => {
  //         setUser(users);
  //       });
  //     });
  //   };

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
                <Button>Kudo:{user.kudos}</Button>
                <Button
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  Sign-in
                </Button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
