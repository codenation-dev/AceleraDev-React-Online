import React from "react";
import "./Card.css";

export function CardImg(props) {
  return <img src={props.image} className="card-img-top" alt={props.alt} />;
}

export function CardBody(props) {
  return <div className="card-body">{props.children}</div>;
}

export function CardTitle(props) {
  return <h5 className="card-title">{props.title}</h5>;
}

export function CardText(props) {
  return <p className="card-text">{props.text}</p>;
}

export function Card(props) {
  return <div className="card">{props.children}</div>;
}
