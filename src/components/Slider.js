import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  // height: "100dvh",
  overflow: "hidden",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    height: "100svh",
  },

  "& .sticky-top": {
    position: "sticky",
    top: 0,
  },

  "& .owl-stage": {
    display: "flex",
    transition: "transform 0.3s cubic-bezier(0.65, 0, 0.35, 1)",
  },

  "& .full_carousel_slide": {
    flex: "0 0 100%",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },

  "& .full_carousel_slide::before": {
    content: "''",
    position: "absolute",
    height: "480px",
    width: "100%",
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 1) 100%)",
    zIndex: 2,
  },

  "& .full_carousel_image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  // Navigation Buttons
  "& .nav-button": {
    position: "absolute",
    top: "78%",
    transform: "translateY(-50%)",
    fontSize: "36px", // Increase icon size
    color: "white", // Set the icon color to white
    background: "transparent", // Remove the background
    border: "none",
    cursor: "pointer",
    zIndex: 10, // Ensure the buttons are on top
  },

  "& .prev": {
    left: "10px",
  },

  "& .next": {
    right: "10px",
  },

  "& .nav-buttons-container": {
    position: "absolute",
    top: "78%",
    right: "100px",
    display: "flex",
    gap: "10px", // Space between the buttons
    zIndex: 10, // Ensure the buttons are on top
  },

  // Line Navigation
  "& .line-container": {
    background: "rgba(255, 255, 255, 0.1)",
    position: "absolute",
    top: "78%", // Adjust the position of the line
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    width: "13%", // Control the width of the line
    gap: "5px", // Gap between the line segments
    zIndex: 10, // Ensure the line is on top
  },

  "& .line-segment": {
    width: "80px", // Control the size of each segment
    height: "3px", // Height of the line segment
    transition: "background 0.3s ease", // Smooth transition for active state
  },

  "& .line-segment.active": {
    background: "rgba(255, 255, 255, 1)", // Active line color (white)
  },
}));

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/images/b1.png", "/images/b2.png", "/images/b3.png"];

  // Update the index to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Update the index to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Manually go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      <div className="full_carousel_container sticky-top">
        <div
          className="owl-stage"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="full_carousel_slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="full_carousel_image"
              />
            </div>
          ))}
        </div>

        <div className="nav-buttons-container">
          <button className="nav-button prev" onClick={goToPrev}>
            <span className="material-icons">arrow_forward</span>
          </button>

          <button className="nav-button next" onClick={goToNext}>
            <span className="material-icons">arrow_back</span>
          </button>
        </div>
        <div className="line-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`line-segment ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </SliderContainer>
  );
};

export default Slider;
