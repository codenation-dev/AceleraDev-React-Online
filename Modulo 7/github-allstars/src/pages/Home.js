import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { getUsers } from "../service";

function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="home">
      {users.map(user => (
        <Card style={{ width: "18rem" }} key={user.id}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <a href="/user">
              <Button variant="secondary">Perfil</Button>
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Home;
