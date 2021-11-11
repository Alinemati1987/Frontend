import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Space from "../../components/Space";
import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { fetchSpaceById } from "../../store/spaces/actions";
import { selectSpaceDetails } from "../../store/spaces/selectors";

export default function SpaceDetails() {
  const { id } = useParams();

  const space = useSelector(selectSpaceDetails);
  const dispatch = useDispatch();

  console.log("detailSpace is:", space);

  useEffect(() => {
    dispatch(fetchSpaceById(parseInt(id)));
  }, []);

  if (!space) return <Loading />;

  return (
    <div>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel space={space} />
      </Container>
    </div>
  );
}
