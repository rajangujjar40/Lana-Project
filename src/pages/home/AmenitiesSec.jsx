import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const StyledContainer = styled(Box)(({ theme }) => ({
  height: "90vh",
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
        letterSpacing: ".1em",
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

export default function AmenitiesSec() {
  return (
    <ScrollAnimation animateIn="zoomIn">
      <StyledContainer>
        <Box className="content-box residences-text">
          <Typography variant="h6" className="residences">
            Amenities
          </Typography>
        </Box>
        <Box className="content-box ultimate-address-text">
          <Typography variant="h3" className="address">
            Amenities for the Discerning Few
          </Typography>
        </Box>
        <Box className="content-box description-text">
          <Typography variant="body1" className="description">
            The Lana Residences, Dorchester Collection, Dubai, provides its
            residents with a spectrum of luxury living and leisure, that
            includes an outdoor pool overlooking the stunning Downtown skyline,
            fully equipped gym with yoga studios, dining and function room with
            conference facilities and lounge.
          </Typography>
        </Box>
      </StyledContainer>
    </ScrollAnimation>
  );
}
