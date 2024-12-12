import { styled } from "@mui/system";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import HomeLayout from "@/layout/HomeLayout";
import ScrollAnimation from "react-animate-on-scroll";
import AppContext from "@/context/AppContext";
const BannerComponent = styled("Box")(({ theme }) => ({
  position: "relative",
  overflowX: "hidden",
  "& h1": {
    textTransform: "capitalize",
    fontSize: "90px",
    lineHeight: "105.6px",
    color: "#fff !important",
    fontWeight: "500",

    [theme.breakpoints.down("sm")]: {
      fontSize: "55px !important",
      lineHeight: "70px !important",
    },
  },
  "& h6": {
    margin: "40px 0",
    fontSize: "21px",
  },

  "& .contentInnerBox": {
    // maxWidth: "600px",
    marginTop: "85px",
    "@media(max-width:991px)": {
      width: "auto",
      maxWidth: "100%",
    },
    "@media(max-width:480px)": {
      width: "100%",
      marginTop: "15px",
    },
  },
  "& .contentBox": {
    position: "relative",
    right: "0",
    width: "100%",
    height: "auto",
    "& img": {
      maxWidth: "670px",
      width: "auto",
      position: "absolute",
      left: "0",
      transform: "translateY(-21%)",
      zIndex: "99",
      left: "0",
      top: "-37px",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
  },
  "& .bannerlandingpage": {
    padding: "230px 0 197px",
    marginTop: "-130px",
    backgroundRepeat: "no-repeat",
    background: "#0C111D",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "135px 0 70px",
    },
  },
}));

export default function AboutUs() {
  const router = useRouter();
  const auth = useContext(AppContext);

  return (
    <BannerComponent>
      <Box className="bannerlandingpage">
        <Box className="contentBox">
          <img
            src="/images/banner_landing.svg"
            alt="Banner"
            style={{ width: "100%" }}
            className="bannerRightImg"
          />
        </Box>
        <Container>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} sm={12} md={0} lg={7}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Box className="contentBox">
                <Box className="contentInnerBox">
                  <ScrollAnimation animateIn="slideInDown">
                    <Typography
                      variant="h1"
                      style={{ fontFamily:    "'OptimaLTPro-Roman', sans-serif", }}
                      className="bannerText"
                    >
                      Get world’s best crypto trading bot
                    </Typography>
                  </ScrollAnimation>
                  {/* <ScrollAnimation animateIn="bounceIn"> */}
                  <Typography variant="h6" color="#98A2B3">
                    From easy money management, to financial goals and
                    investments. Open your account in a Flash
                  </Typography>
                  {/* </ScrollAnimation> */}
                  <Box className="displayStart">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        router.push(
                          auth?.userLoggedIn ? "/dashboard" : "/auth/login"
                        )
                      }
                    >
                      {auth?.userLoggedIn ? "Dashboard" : "Sign In"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BannerComponent>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
