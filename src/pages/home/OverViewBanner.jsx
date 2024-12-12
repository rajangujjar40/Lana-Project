import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
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

  "& .nav-button": {
    position: "absolute",
    top: "78%",
    transform: "translateY(-50%)",
    fontSize: "36px",
    color: "white",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 10,
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
    gap: "10px",
    zIndex: 10,
  },

  "& .text-image": {
    position: "absolute",
    top: "78%",
    left: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: "10",
  },
}));

const CardText = [
  {
    images: "/images/b1.png",
    title: "ARCHITECTURE BY FOSTER+PARTNERS",
    desc: "The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.",
  },
  {
    images: "/images/b2.png",
    title: "For the mind, body and soul",
    desc: "The Lana Residences, Dorchester Collection, Dubai provides its residents with a spectrum of luxury living and leisure.",
  },
  {
    images: "/images/b3.png",
    title: "In the heart of Dubai",
    desc: "Across the water from The Lana Residences, Dorchester Collection, Dubai, lies Burj Khalifa District, a stylish area that combines shops and offices with residential buildings and hotels.",
  },
  {
    images: "/images/b1.png",
    title: "Interiors by Gilles et Boissier",
    desc: "At The Lana Residences, Dorchester Collection, Dubai, Gilles et Boissier has used natural materials and pieces from its own line of furniture and lighting to unify the building, from the smallest details to the striking marble entrance lobby.",
  },
];

const OverViewBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CardText.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CardText.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <div className="full_carousel_container sticky-top">
        <div
          className="owl-stage"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {CardText.map((item, index) => (
            <div className="full_carousel_slide" key={index}>
              <img
                src={item.images}
                alt={`Slide ${index + 1}`}
                className="full_carousel_image"
              />

              {currentIndex === index && (
                <div className="text-image">
                  <ScrollAnimation animateIn="slideInDown">
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#fff", fontSize: "29px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      mt={2}
                      variant="subtitle1"
                      style={{ color: "#fff", maxWidth: "620px" }}
                    >
                      {item.desc}
                    </Typography>
                  </ScrollAnimation>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-buttons-container">
          <button className="nav-button prev" onClick={goToNext}>
            <span className="material-icons">arrow_forward</span>
          </button>
          <button className="nav-button next" onClick={goToPrev}>
            <span className="material-icons">arrow_back</span>
          </button>
        </div>
      </div>
    </SliderContainer>
  );
};

export default OverViewBanner;
