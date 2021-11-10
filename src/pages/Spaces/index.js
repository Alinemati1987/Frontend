import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";
import Space from "../../components/Space";

export default function Spaces() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  console.log("spaces are:", spaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1>Spaces</h1>
      </Jumbotron>
      <Container>
        {spaces.map((space) => (
          <Space
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            showLink={true}
          />
        ))}
      </Container>
    </div>
  );
}
