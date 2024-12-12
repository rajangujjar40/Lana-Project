import BrainsCard from "@/components/BrainsCard";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { display, maxWidth, positions, styled } from "@mui/system";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
const TokenComponent = styled("Box")(({ theme }) => ({
  position: "relative",
  "& .tokenmainBox": {
    marginBottom: "80px",
    marginTop: "270px",
    "@media(max-width:1024px)": {
      marginTop: "0px",
    },
    position: "relative",
    "& .rightBannerImg1": {
      position: "absolute",
      left: "0",
      width: "auto",
      maxWidth: "700px",
      zIndex: "-1",
      display: "block",
      "@media(max-width:1200px)": {
        maxWidth: "500px",
      },
      "@media(max-width:800px)": {
        display: "none",
      },
    },
    "& .actionButton": {
      cursor: "pointer",
    },
  },
  "& .whtHeadingText": {
    marginBottom: "180px",
    "@media(max-width:1024px)": {
      marginBottom: "40px",
    },
  },
  "& .contentfixBox": {
    maxWidth: "100% !important",

    "@media(max-width:1366px)": {
      marginLeft: "100px",
    },
    "@media(max-width:1200px)": {
      marginLeft: "60px",
    },
    "@media(max-width:800px)": {
      margin: "0px",
    },
  },
  "& h1": {
    textTransform: "capitalize",
  },
  "& h6": {
    width: "100%",
    maxWidth: "594px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  "& .rightBannerImg1-phone": {
    display: "none",
    "@media(max-width:800px)": {
      display: "block",
      maxWidth: "100%",
      marginTop: "30px",
    },
    "@media(max-width:767px)": {
      display: "none",
    },
  },
}));
const Professional = () => {
  const router = useRouter();
  return (
    <TokenComponent>
      <Box className="tokenmainBox">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6} className="displayCenter">
              <img
                src="/images/tutorials_1.svg"
                alt="Banner"
                className="rightBannerImg1"
              />

              <img
                src="/images/tutorials_1-phone.png"
                alt="Banner"
                className="rightBannerImg1-phone"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="contentfixBox">
                <img src="/images/request/automation.svg" />
                <Typography variant="h4" mt={1} mb={1}>
                  Create professional demos and tutorials.
                </Typography>
                <Typography variant="h5" fontSize="18px" color="#404040" mb={2}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Typography>
                <Box
                  className="displayStart"
                  gap="10px"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/auth/login")}
                >
                  <Typography
                    variant="h5"
                    fontSize="18px"
                    fontWeight="500"
                    color="#8900BA"
                  >
                    Action Button
                  </Typography>
                  <BsArrowRight color="#8900BA" fontSize="large" />
                  {/* <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<BsArrowRight />}
                  >
                    Action Button
                  </Button> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TokenComponent>
  );
};
export default Professional;
