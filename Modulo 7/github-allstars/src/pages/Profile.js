import React from "react";
import "./Profile.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router";

import { getUser, getUserRepos } from "../service";

function Profile() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [repos, setRepos] = React.useState([]);
  const { name } = useParams();

  React.useEffect(() => {
    Promise.all([getUser(name), getUserRepos(name)]).then(values => {
      setUser(values[0]);
      setRepos(values[1]);
      setLoading(false);
    });
  }, [name]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="container profile">
      <div className="header">
        <h1>{user.name}</h1>
        <Image
          className="header-img"
          thumbnail
          src={user.avatar_url}
          roundedCircle
        />
      </div>

      <div className="home-info">
        Followers: {user.followers} | Following: {user.following}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <Button>Ver GitHub</Button>
        </a>
      </div>

      <div className="repositories">
        {repos.map(repo => (
          <Card className="repository" key={repo.id}>
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>{repo.description}</Card.Text>
              <Card.Text>{repo.language}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Profile;
