import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import OverViewBanner from "./OverViewBanner";

const OverviewContainer = styled.div`
  z-index: 0;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 200vh; /* Large height to allow scrolling */
  display: flex;
  position: relative;
`;

const ContentContainer = styled.div`
  margin-top: 168px;
  position: sticky;
  top: 250px;
  z-index: 1;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  text-align: center;
`;

const StickyBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: transform 0.3s ease-out;
`;

const StyledContainer = styled(Box)(({ theme }) => ({
  // backgroundColor: "#f3f1ef",
  // height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  gap: "1.5rem",
  willChange: "opacity",
  opacity: 0.76987,
  "& .content-box": {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    opacity: 1,
    "&.residences-text": {
      "& .residences": {
        color: "#a18a6b",
        fontSize: ".875rem",
        fontWeight: "500",
        lineHeight: "1.75em",
        letterSpacing: ".1em",
      },
    },
    "&.ultimate-address-text": {
      "& .address": {
        textTransform: "uppercase",
        fontSize: "3rem",
        fontWeight: "400",
        lineHeight: "105%",
        color: "#0a0a3d",
      },
    },
    "&.description-text": {
      "& .description": {
        color: "#0a0a3d",
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.75em",
        letterSpacing: ".1em",
        maxWidth: "640px",
      },
    },
  },
}));

const ScrollAnimationSection = () => {
  const [transformValue, setTransformValue] = useState(1);
  const [imagePosition, setImagePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // For scaling effect
      const scale = Math.max(1 - scrollPosition / 1000, 0.8); // Reduces size as you scroll
      setTransformValue(scale);

      // For image movement (upward) effect
      const imageMove = Math.min(scrollPosition / 2, 200); // Moves the image upwards as you scroll
      setImagePosition(imageMove);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <OverviewContainer>
      {/* Sticky content section */}
      <ContentContainer>
        <StyledContainer>
          <Box className="content-box residences-text">
            <Typography variant="h6" className="residences">
              OVERVIEW
            </Typography>
          </Box>
          <Box className="content-box ultimate-address-text">
            <Typography variant="h3" className="address">
              A LIFE LESS ORDINARY
            </Typography>
          </Box>
          <Box className="content-box description-text">
            <Typography variant="body1" className="description">
              With only 39 exquisite apartments, managed exclusively by
              Dorchester Collection, this elite waterfront development in the
              Burj Khalifa District is the perfect embodiment of the legendary
              Dorchester Collection experience, the iconic architecture of
              Foster + Partners, and the timeless design of Gilles & Boissier.
            </Typography>
          </Box>
        </StyledContainer>
      </ContentContainer>

      {/* Fixed Banner component */}
      <StickyBanner
        style={
          {
            // transform: `scale(${transformValue}) translateY(-${imagePosition}px)`,
          }
        }
      >
        <OverViewBanner />
      </StickyBanner>
    </OverviewContainer>
  );
};

export default ScrollAnimationSection;
