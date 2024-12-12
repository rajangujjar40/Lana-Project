import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const StyledContainer = styled(Box)(({ theme }) => ({
  height: "70vh",
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
      maxWidth: "710px",
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

export default function LocationPoint() {
  return (
    <ScrollAnimation animateIn="zoomIn">
      <StyledContainer>
        <Box className="content-box residences-text">
          <Typography variant="h6" className="residences">
            Location
          </Typography>
        </Box>
        <Box className="content-box ultimate-address-text">
          <Typography variant="h3" className="address">
            the PRESTIGIOUS focal point of the marasi marina
          </Typography>
        </Box>
      </StyledContainer>
    </ScrollAnimation>
  );
}
