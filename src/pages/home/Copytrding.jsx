import React, { useState } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { styled } from "@mui/system";

const ServocesComponent = styled("Box")(({ theme }) => ({
  position: "relative",
  "& .servicessBox": {
    background: "#fff",

    "& p": {
      //   maxWidth: "375px",
    },
  },
  "& .totalSavingBox": {
    boxShadow: "0px 4.63px 71.21px 0px #0000000D",
    background: "#fff",
    padding: "10px",
    borderRadius: "30px",
    minWidth: "220px",
    cursor: "pointer",
    position: "relative",
    right: "-76px",
    marginBottom: "30px",
    "@media(max-width:768px)": {
      right: "0px",
      marginBottom: "0px",
    },
  },
  "& h3": {
    fontWeight: "500",
  },
  "& h6": {
    maxWidth: "1197px",
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

export default function Copytrding() {
  return (
    <>
      <ServocesComponent>
        <Container>
          <Box className="sectiongap">
            <ScrollAnimation animateIn="slideInDown">
              <Box align="center" className="subSectionGap">
                <Typography variant="h1" color="primary">
                  Data
                </Typography>
                <Typography variant="h6" color="secondary" mt={2.4}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it toLorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unk
                </Typography>
              </Box>
            </ScrollAnimation>
            <Grid container spacing={3} mt={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="tradingBox pappergrabox total-height">
                  <img
                    src="/images/Copy/copy_1.svg"
                    alt="Imgae"
                    width="70px"
                    height="70px"
                  />

                  <Typography variant="h3" color="primary" mt={4}>
                    Access Expert Strategies
                  </Typography>

                  <Typography variant="h6" color="#98A2B3" mt={2}>
                    Benefit from the insights of top traders.
                  </Typography>
                  <ScrollAnimation animateIn="slideInLeft">
                    <Box mt={2}>
                      <img
                        src="/images/Copy/banner.svg"
                        alt="Imgae"
                        className="visaBannerImg"
                      />
                    </Box>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="tradingBox pappergrabox total-height">
                  <img
                    src="/images/Copy/copy_2.svg"
                    alt="Imgae"
                    width="70px"
                    height="70px"
                  />

                  <Typography variant="h3" color="primary" mt={4}>
                    Automated
                  </Typography>

                  <Typography variant="h6" color="#98A2B3" mt={2}>
                    Enjoy hands-free trading with real-time replication.
                  </Typography>
                  <Box mt={4} className="incomeBox incomemaxwidthBox">
                    <img
                      src="/images/income_tab.svg"
                      alt="Imgae"
                      style={{ cursor: "pointer" }}
                    />
                    <Box
                      className="displaySpaceBetween income-avergae"
                      style={{ flexWrap: "wrap" }}
                    >
                      <Box className="incomeavergae">
                        <Typography
                          variant="body2"
                          color="#9E9E9E"
                          fontSize="11px"
                          fontWeight="400"
                        >
                          Income Average
                        </Typography>
                        <Typography variant="h3" color="primary">
                          ₹1,00,546.00
                        </Typography>

                        <Typography
                          variant="body2"
                          color="#9E9E9E"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          <span style={{ color: "#14C38A" }}>
                            <img src="/images/Union.svg" /> +15,090.25{" "}
                          </span>{" "}
                          from last month
                        </Typography>
                      </Box>
                      <ScrollAnimation animateIn="slideInRight">
                        <Box className="totalSavingBox">
                          <img
                            src="/images/wallet.svg"
                            alt="Wallet"
                            width="70px"
                            height="70px"
                          />
                          <Typography variant="body2" color="#9E9E9E" mt={1.3}>
                            Total Savings
                          </Typography>
                          <Typography variant="h3" color="primary">
                            ₹30,546.00
                          </Typography>

                          <Typography
                            variant="body2"
                            color="#9E9E9E"
                            fontWeight="500"
                          >
                            2 of 5 goals complete
                          </Typography>
                          <Box
                            className="displayStart"
                            mt={1.4}
                            style={{ gap: "12px" }}
                          >
                            <img
                              src="/images/add-circle.svg"
                              width="40px"
                              height="40px"
                            />
                            <Typography
                              variant="body2"
                              color="#151515"
                              fontWeight="600"
                            >
                              Add saving goals
                            </Typography>
                          </Box>
                        </Box>
                      </ScrollAnimation>
                    </Box>

                    <img
                      src="/images/Chart.svg"
                      alt="Chart"
                      className="chat-img"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3} mt={0.3}>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="tradingBox pappergrabox total-height1">
                  <img
                    src="/images/Copy/copy_1.svg"
                    alt="Imgae"
                    width="70px"
                    height="70px"
                  />

                  <Typography variant="h3" color="primary" mt={4}>
                    Diversify Investments
                  </Typography>

                  <Typography variant="h6" color="#98A2B3" mt={2}>
                    Spread your investments across multiple expert
                    <br /> strategies.
                  </Typography>
                  <ScrollAnimation animateIn="slideInLeft">
                    <Box mt={2}>
                      <img
                        src="/images/Copy/banner.svg"
                        alt="Imgae"
                        className="visaBannerImg"
                      />
                    </Box>
                  </ScrollAnimation>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="tradingBox pappergrabox total-height1">
                  <img
                    src="/images/Copy/copy_2.svg"
                    alt="Imgae"
                    width="70px"
                    height="70px"
                  />

                  <Typography variant="h3" color="primary" mt={4}>
                    Transparent Performance
                  </Typography>

                  <Typography variant="h6" color="#98A2B3" mt={2}>
                    View detailed performance metrics and choose traders based
                    on proven success.
                  </Typography>
                  <Box mt={4} className="incomeBox incomemaxwidthBox">
                    <img
                      src="/images/income_tab.svg"
                      alt="Imgae"
                      style={{ cursor: "pointer" }}
                    />
                    <Box
                      className="displaySpaceBetween income-avergae"
                      style={{ flexWrap: "wrap" }}
                    >
                      <Box className="incomeavergae">
                        <Typography
                          variant="body2"
                          color="#9E9E9E"
                          fontSize="11px"
                          fontWeight="400"
                        >
                          Income Average
                        </Typography>
                        <Typography variant="h3" color="primary">
                          ₹1,00,546.00
                        </Typography>

                        <Typography
                          variant="body2"
                          color="#9E9E9E"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          <span style={{ color: "#14C38A" }}>
                            <img src="/images/Union.svg" /> +15,090.25{" "}
                          </span>{" "}
                          from last month
                        </Typography>
                      </Box>
                      <ScrollAnimation animateIn="slideInRight">
                        <Box className="totalSavingBox">
                          <img
                            src="/images/wallet.svg"
                            alt="Wallet"
                            width="70px"
                            height="70px"
                          />
                          <Typography variant="body2" color="#9E9E9E" mt={1.3}>
                            Total Savings
                          </Typography>
                          <Typography variant="h3" color="primary">
                            ₹30,546.00
                          </Typography>

                          <Typography
                            variant="body2"
                            color="#9E9E9E"
                            fontWeight="500"
                          >
                            2 of 5 goals complete
                          </Typography>
                          <Box
                            className="displayStart"
                            mt={1.4}
                            style={{ gap: "12px" }}
                          >
                            <img
                              src="/images/add-circle.svg"
                              width="40px"
                              height="40px"
                            />
                            <Typography
                              variant="body2"
                              color="#151515"
                              fontWeight="600"
                            >
                              Add saving goals
                            </Typography>
                          </Box>
                        </Box>
                      </ScrollAnimation>
                    </Box>

                    <img
                      src="/images/Chart.svg"
                      alt="Chart"
                      className="chat-img"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ServocesComponent>
    </>
  );
}
