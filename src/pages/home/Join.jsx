import React, { useState } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { styled } from "@mui/system";

const ServocesComponent = styled("Box")(({ theme }) => ({
  position: "relative",
  "& .servicessBox": {
    "& p": {
      maxWidth: "375px",
    },
  },

  "& h6": {
    maxWidth: "830px",
  },
  "& .rightservicesBox": {
    position: "absolute",
    right: "0",
    bottom: "-10px",
    zIndex: "999",
    "@media(max-width:1566px)": {
      maxWidth: "155px",
    },
    "@media(max-width:991px)": {
      maxWidth: "105px",
    },
  },
}));

const subheadings = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus ",
];

const headings = ["Step 1", "Step 2", "Step 3"];

export default function Join() {
  return (
    <>
      <ServocesComponent>
        <Container>
          <Box className="sectiongap">
            <ScrollAnimation animateIn="zoomIn">
              <Box align="center" className="subSectionGap">
                <Typography variant="h1" color="primary">
                  Join Now And Earn Rewards
                </Typography>
                <Typography variant="h6" color="secondary" mt={2.4}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It h
                </Typography>
              </Box>
            </ScrollAnimation>
            <Grid container spacing={2} mt={3}>
              {subheadings.map((text, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box className="joinNowBox">
                    <ScrollAnimation
                      animateIn="slideInUp"
                      delay={index * 300}
                      style={{ width: "100%" }}
                    >
                      <Box className="servicessBox" align="left">
                        <Typography
                          variant="h5"
                          color="primary"
                          dangerouslySetInnerHTML={{ __html: headings[index] }}
                        />
                        <Typography variant="body2" color="secondary" mt={1.2}>
                          {text}
                        </Typography>
                      </Box>
                    </ScrollAnimation>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </ServocesComponent>
    </>
  );
}
