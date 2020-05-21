import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { getUsers } from "../../service";
import { setUsers } from "./actions";

function Home() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getUsers().then(response => {
      dispatch(setUsers(response));
    });
  }, [dispatch]);

  return (
    <div className="home">
      {users.map(user => (
        <Card style={{ width: "18rem" }} key={user.id}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Link to={`/user/${user.login}`}>
              <Button variant="secondary">Perfil</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Home;
