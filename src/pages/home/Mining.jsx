import Miningcard from "@/components/Miningcard";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { fontSize, styled } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
const TokenComponent = styled("Box")(({ theme }) => ({
  position: "relative",
  "& .tokenmainBox": {
    marginBottom: "80px",
    marginTop: "160px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    },
  },
  "& h1": {
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
    fontSize:"18px !important",
    },
  },
}));
const Mining = () => {
  const router = useRouter();
  const cardData = [
    {
      id: 1,
      title: "Request Private Access",
      coinname: "ALEO",
      aleosubcoin: "Aleo",
      value: "234.34 PH/s",
      image: "/images/Coin/aleo.svg",
      typo: "192",
    },
    {
      id: 2,
      title: "Request Private Access",
      coinname: "BTC",
      aleosubcoin: "Bitcoin",
      value: "234.34 PH/s",
      image: "/images/Coin/btc.svg",
      typo: "192",
    },
    {
      id: 3,
      title: "Request Private Access",
      coinname: "RVN",
      aleosubcoin: "Ravencoin",
      value: "234.34 PH/s",
      image: "/images/Coin/rvn.svg",
      typo: "192",
    },
    {
      id: 4,
      title: "Request Private Access",
      coinname: "ETC",
      aleosubcoin: "Eth Classic",
      value: "234.34 PH/s",
      image: "/images/Coin/etc.svg",
      typo: "192",
    },
  ];
  return (
    <TokenComponent>
      <Box className="tokenmainBox">
        <Container>
          <Box className="displaySpaceBetween" mb={4}>
            <Typography variant="h1" color="primary" align="left">
              Start Mining With Aleoprover Pool
            </Typography>
            <Button
              variant="contained"
              onClick={() => router.push("/mining-pool")}
              color="secondary"
              size="large"
              endIcon={<img src="/images/arrow-up.svg" />}
            >
              Start Mining Now
            </Button>
          </Box>

          <Grid container spacing={2} alignItems="center">
            {cardData.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Miningcard data={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </TokenComponent>
  );
};
export default Mining;
