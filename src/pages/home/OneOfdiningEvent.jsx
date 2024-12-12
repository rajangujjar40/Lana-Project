import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

const DataSetting = [
  {
    image: "/images/lifeStyle.webp",
    title: "One-off dining events and functions",
    des: "Experience in-residence dining encounters and restaurant reservations, amongst radiant design and extraordinary service.",
  },
  {
    image: "/images/lifeStyle1.webp",
    title: "À la carte services",
    des: "Experience in-residence dining encounters and restaurant reservations, amongst radiant design and extraordinary service.",
  },
  {
    image: "/images/lifeStyle2.webp",
    title: "Luxury amenities",
    des: "Experience in-residence dining encounters and restaurant reservations, amongst radiant design and extraordinary service.",
  },
  {
    image: "/images/lifeStyle3.webp",
    title: "Expansive outdoor pool",
    des: "Experience in-residence dining encounters and restaurant reservations, amongst radiant design and extraordinary service.",
  },
  {
    image: "/images/lifeStyle4.webp",
    title: "Modern conference rooms",
    des: "Experience in-residence dining encounters and restaurant reservations, amongst radiant design and extraordinary service.",
  },
];

const SliderContainer = styled("div")({
  position: "relative",
  width: "100%",
  margin: "0 auto",
  overflow: "hidden",
  marginBottom: "30px",
  backgroundColor: "#f3f1ef",
});

const SliderWrapper = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease",
});

const Card = styled("div")(({ image }) => ({
  flex: "0 0 auto",
  width: "762px",
  margin: "0 10px",
  border: "1px solid #ddd",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  background: "#fff",
  display: "flex",
  "& .textClx": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-betwee",
    maxWidth: "385px",
    justifyContent: "space-between",
  },
}));

const CardImage = styled("img")({
  minHeight: "100%",
  display: "block",
  cursor: "pointer",
  width: "377px",
  transition: "transform 0.5s ease", // Smooth zoom transition
  "&:hover": {
    transform: "scale(1.1)", // Zoom effect on hover
  },
});
const CardCaption = styled("div")({
  padding: "40px 20px",
  fontSize: "27px",
  fontWeight: "400",
  color: "#0a0a3d",
});

const CardCaptionDes = styled("div")({
  padding: "40px 20px",
  fontSize: "16px",
  fontWeight: "300",
  color: "#0a0a3d",
});

const NavButton = styled("button")({
  border: "none",
  color: "#000",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  zIndex: 10,
  background: "transparent", // No background color
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LineContainer = styled("div")({
  position: "absolute",
  bottom: "65px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
});

const LineSegment = styled("div")(({ isActive }) => ({
  width: "50px",
  height: "3px",
  background: isActive ? "#000" : "rgba(1, 2, 5, 0.1)",
  cursor: "pointer",
  transition: "background 0.3s ease",
}));

const OneOfdiningEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const containerWidth =
        document.querySelector(".slider-container")?.offsetWidth || 0;
      const cardWidths = DataSetting.map((item) => 762);
      const totalCardWidth =
        cardWidths.reduce((a, b) => a + b, 0) / cardWidths.length;

      setCardWidth(totalCardWidth + 20); // Card width + margin
      setVisibleCards(containerWidth / (totalCardWidth + 20));
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= DataSetting.length - Math.ceil(visibleCards)
        ? prevIndex + 1
        : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer className="slider-container">
      <SliderWrapper
        style={{
          transform: `translateX(-${currentIndex * cardWidth}px)`,
        }}
      >
        {DataSetting.map((item, index) => (
          <Card key={index} image={item.image}>
            <Box height={"400px"} overflow="hidden">
              <CardImage src={item.image} alt={item.title} />
            </Box>
            <Box className="textClx">
              <CardCaption>{item.title}</CardCaption>
              <CardCaptionDes>{item.des}</CardCaptionDes>
            </Box>
          </Card>
        ))}
      </SliderWrapper>

      <Box my={7}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <NavButton onClick={handlePrev}>
            <ArrowBackIcon style={{ color: "#000" }} />
          </NavButton>
          <NavButton onClick={handleNext}>
            <ArrowForwardIcon style={{ color: "#000" }} />
          </NavButton>
        </Box>

        <LineContainer>
          {DataSetting.map((_, index) => (
            <LineSegment
              key={index}
              isActive={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </LineContainer>
      </Box>
    </SliderContainer>
  );
};

export default OneOfdiningEvent;
