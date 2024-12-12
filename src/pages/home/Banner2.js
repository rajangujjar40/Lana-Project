import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f3f1ef",
  height: "65vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  gap: "1.5rem",
  willChange: "opacity",
  opacity: 0.76987,
  "& .styled-box": {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    opacity: 1,
    "& .styled-typography": {
      color: "#0a0a3d",
      fontSize: "1.5rem",
      fontWeight: "400",
      lineHeight: "1.5em",
      fontFamily: "'OptimaLTPro-Roman', sans-serif",
      letterSpacing: "normal",
      maxWidth: "880px",
      textAlign: "center",
    },
  },
}));

export default function Banner2() {
  return (
    <StyledContainer>
      <Box className="styled-box">
        <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft">
          <Typography className="styled-typography" variant="h6">
            The 32-storey tower houses a range of exclusive penthouses to
            apartments with two to four bedrooms. With gracious proportions,
            private terraces, and floor-to-ceiling windows, each one overlooks
            the cityscape of Dubai.
          </Typography>
        </ScrollAnimation>
      </Box>
    </StyledContainer>
  );
}
