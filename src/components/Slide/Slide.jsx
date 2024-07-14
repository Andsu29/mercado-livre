import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./slide.css";

const Slide = ({ pictures }) => {
  return (
    <>
      <Carousel>
        {pictures.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="img-carrossel">
              <img src={item.url} alt={item.title} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slide;
