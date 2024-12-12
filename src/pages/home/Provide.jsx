import { fontSize, maxWidth, positions, styled, width } from "@mui/system";
import Slider from "react-slick";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

import { useRouter } from "next/router";

const ProvideBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: "999",

  "& .estimateBox": {
    // marginTop: "-60px",
    marginBottom: "40px",
  },

  "& .subBox": {
    marginBottom: "70px",
    "& p": {
      width: "100%",
      maxWidth: "720px",
    },
  },
  "& img": {
    width: "auto",
    maxWidth: "100%",
    marginTop: "30px",
  },
  "& .eastShade": {
    position: "absolute",
    top: "9%",
    zIndex: "-1",
    left: "0",
    [theme.breakpoints.down("md")]: {
      maxWidth: "141px",
      top: "-11%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-24%",
    },
  },
}));

const Provide = () => {
  const router = useRouter();
  return (
    <ProvideBox>
      <Box className="marginmainBox">
        {/* <Box align="center" className="estimateBox">
                    <Button variant="contained" color="primary" size="large" style={{textTransform: "uppercase"}}>
                        Estimate Your Profits
                    </Button>
                </Box> */}
        <img src="/images/easy_left.svg" alt="Easy" className="eastShade" />
        <Container>
          <Box align="center">
            <Typography variant="h1" color="primary" mb={1} align="center">
              EasyMining
            </Typography>
            <Typography variant="h3" color="primary" align="center">
              Try mining a block yourself!
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              mt={2}
              align="center"
              maxWidth="420px"
            >
              No need for hardware, we provide the hashpower and our platform
              takes care of the mining. Simply buy a package, sit back, and wait
              for the block reward!
            </Typography>

            <Box className="displayCenter" mt={5}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => router.push("/static/about")}
              >
                LEARN MORE
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => router.push("/auth/login")}
              >
                START MINING
              </Button>
            </Box>
            <img src="/images/easy_img.svg" alt="Easy" />
          </Box>

          {/* <ExploreTable /> */}
        </Container>
      </Box>
    </ProvideBox>
  );
};
export default Provide;
