import React from "react";

import Button from "./components/Button";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from "./components/Card";
import FormGroup from "./components/FormGroup";
import Container from "./components/Container";
import Label from "./components/Label";
import Loading from "./components/Loading";
import Select from "./components/Select";
import "./App.css";

import data from "./data/data.json";

import {
  filterByStatus,
  filterByGender,
  generateEpisodesCharacters
} from "./utils";
import { URL } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      characters: [],
      originalCharacters: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await fetch(URL)
      .then(resp => resp.json())
      .then(data => data.results);

    this.setState({
      characters: response,
      loading: false
    });
  }

  handleClickStatus(event, status) {
    event.preventDefault();

    let newCharacters = data.results;

    if (status !== "") {
      newCharacters = filterByStatus(data.results, status);
    }

    this.setState({
      characters: newCharacters
    });
  }

  handleClickGender(event, gender) {
    event.preventDefault();

    let newCharacters = data.results;

    if (gender !== "") {
      newCharacters = filterByGender(data.results, gender);
    }

    this.setState({
      characters: newCharacters
    });
  }

  handleChange(episode) {
    const episodes = generateEpisodesCharacters(data.results);
    this.setState({
      characters: episodes[episode]
    });
  }

  render() {
    return (
      <Container>
        <FormGroup>
          <Label label="Status" />
          <div data-testid="all-status">
            <Button
              name="Todos"
              handleClick={event => this.handleClickStatus(event, "")}
            />
            <Button
              name="Vivo"
              handleClick={event => this.handleClickStatus(event, "Alive")}
            />
            <Button
              name="Morto"
              handleClick={event => this.handleClickStatus(event, "Dead")}
            />
            <Button
              name="Desconhecido"
              handleClick={event => this.handleClickStatus(event, "unknown")}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Sexo" />
          <div data-testid="all-genders">
            <Button
              name="Todos"
              handleClick={event => this.handleClickGender(event, "")}
            />
            <Button
              name="Homem"
              handleClick={event => this.handleClickGender(event, "Male")}
            />
            <Button
              name="Mulher"
              handleClick={event => this.handleClickGender(event, "Female")}
            />
            <Button
              name="Desconhecido"
              handleClick={event => this.handleClickGender(event, "unknown")}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Episódio" />
          <Select
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            handleChange={value => this.handleChange(value)}
          />
        </FormGroup>

        {this.state.loading ? <Loading /> : null}

        <section>
          {this.state.characters.map(character => {
            return (
              <Card key={character.id}>
                <CardImg image={character.image} alt={character.name} />
                <CardBody>
                  <CardTitle title={character.name} />
                  <CardText text={`Situação: ${character.status}`} />
                  <CardText text={`Sexo: ${character.gender}`} />
                </CardBody>
              </Card>
            );
          })}
        </section>
      </Container>
    );
  }
}

export default App;
