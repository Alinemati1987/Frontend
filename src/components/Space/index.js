import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Space(props) {
  return (
    <Jumbotron
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        margin: "10px",
        padding: "20px",
        boxShadow: " 5px 5px darkkhaki",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink ? (
        <Link to={`/spaces/${props.id}`}>
          <Button>Visit space</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
