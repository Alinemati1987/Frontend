import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// import { useDispatch } from "react-redux";
// import { deleteStory } from "../../store/user/actions";

export default function StoryCarousel(props) {
  // const dispatch = useDispatch();

  // const onDelete = id => {
  //   console.log("deleting story!", id);
  //   dispatch(deleteStory(id));
  // };
  return (
    <Carousel className="mt-5">
      {props.space.stories.map((story) => {
        return (
          <Carousel.Item key={story.id}>
            {story.imageUrl ? (
              <img
                style={{ borderRadius: "15px" }}
                className="d-block w-100"
                src={story.imageUrl}
                alt={story.name}
              />
            ) : null}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.space.backgroundColor}85`,
                color: props.space.color,
                borderRadius: "25px",
              }}
              className="p-5"
            >
              <h3>{story.name}</h3>
              <p>{story.content}</p>
              {/* <Button variant='danger' onClick={() => onDelete(story.id)}>
                Delete story
              </Button> */}
              <Button>Delete Story</Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
