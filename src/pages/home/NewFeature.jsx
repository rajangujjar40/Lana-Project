import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  featureStyle: {
    maxWidth: "109px",
    border: "1px solid rgba(130, 124, 224, 1)",
    borderRadius: "100px",
    padding: "8px 12px",
    fontFamily: "'ro-Roman', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    backgroundImage:
      "linear-gradient(rgba(130, 124, 224, 1) 100%, rgba(161, 184, 225, 1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  imgStyle: {
    borderRadius: "30px",
    Width: "auto",
    maxHeight: "75dvh",
    textAlign: "right",
    maxWidth: "100%",
    // height: "100%",
  },
};

const NewFeature = () => {
  return (
    <Container className="sectionGap">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={5}>
          <Box>
            <Typography sx={styles.featureStyle}>New Feature</Typography>
            <Typography variant="h1" color="primary" mt={2}>
              Exclusive Airdrop Opportunities
            </Typography>
            <Typography variant="h4" color="secondary" mt={2}>
              Are you ready to elevate your crypto journey? Don't miss out on
              this limited-time opportunity to participate in our exclusive
              airdrop event! As a valued member of our community, we're offering
              you a chance to claim your share of tokens and join us on our
              exciting blockchain journey
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={1} md={1}></Grid>
        <Grid item xs={12} sm={5} md={6}>
          <img
            src="images/feature.jpeg"
            alt="feature"
            style={styles.imgStyle}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewFeature;
