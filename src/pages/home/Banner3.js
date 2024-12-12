import React from "react";
import { Box, maxWidth, styled, textAlign, textTransform } from "@mui/system";
import { Typography } from "@mui/material";
const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f3f1ef",
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
        textTransform: "uppercase",
      },
    },
    "&.ultimate-address-text": {
      "& .address": {
        textTransform: "none",
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.5em",
        color: "#0a0a3d",
        letterSpacing: "normal",
        textAlign: "center",
        maxWidth: "930px",
        fontFamily: "'OptimaLTPro-Roman', sans-serif",
      },
    },
  },
}));
export default function Banner3() {
  return (
    <StyledContainer>
      <Box className="content-box residences-text">
        <Typography variant="h6" className="residences">
          Lifestyle provider
        </Typography>
      </Box>
      <Box className="content-box ultimate-address-text">
        <Typography variant="h6" className="address">
          A lifestyle of comfort and ease awaits at the hands of Dorchester
          Collection’s legendary service. Homeowners enjoy the luxury and
          freedom of a private home with the added convenience and prestige of
          exceptional five-star service, and the exclusive amenities aligned
          with this world-class reputation.
        </Typography>
      </Box>
    </StyledContainer>
  );
}
