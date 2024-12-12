import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  TextField,
  IconButton,
} from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const StyledFooterContainer = styled(Box)`
  background-color: #1d1d1d;
  color: white;
  padding: 4rem 2rem;

  .footer-logo {
    text-align: center;
    margin-bottom: 3rem;
  }

  .footer-logo img {
    width: 150px;
  }

  .footer-section {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    padding-left: 0;
  }

  li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }

  li a:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .newsletter {
    margin-top: 1rem;
    border-bottom: 1px solid white;
  }

  .newsletter input {
    background: none;
    border: none;
    ${'' /* border-bottom: 1px solid rgba(255, 255, 255, 0.5); */}
    color: white;
    padding: 0.5rem;
    width: 100%;
    ${'' /* margin-bottom: 1rem; */}
  }

  .newsletter input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .footer-bottom {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    padding-top: 1.5rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    color: white;
    font-size: 1.25rem;
    transition: color 0.3s;
  }
  .footer-bottom {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    padding-top: 1.5rem;
  }

  .footer-bottom .links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    text-align: center;
  }

  .footer-bottom .links a {
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s;
  }

  .footer-bottom .links a:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    color: white;
    font-size: 1.25rem;
    transition: color 0.3s;
  }

  .social-icons a:hover {
    color: rgba(255, 255, 255, 0.6);
  }
    .footer-wrapper {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    border-style: none none solid;
    border-width: 1px;
    border-color: #242424;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4.875rem;
    padding-bottom: 4.875rem;
    display: flex;
  }
 .footer-wrapper a img {
    width: 358px;
    vertical-align: middle;
    max-width: 100%;
  }
`;

const Footer = () => {
  return (
    <StyledFooterContainer>
        <Box className="footer-wrapper" mb={2}>
        <a href="/">
          <img src="/images/footerLogo.svg" alt="footer" />
        </a>
      </Box>
      <Grid container spacing={4} className="footer-section">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3">Residential</Typography>
          <List disablePadding>
            <ListItem disablePadding style={{maxWidth:"180px"}}>
              <a href="">The Alba Residences, Dorchester Collection, Dubai</a>
            </ListItem>
            <ListItem disablePadding style={{maxWidth:"180px"}}>
              <a href="">AVA at Palm Jumeirah, Dorchester Collection, Dubai</a>
            </ListItem>
            <ListItem disablePadding style={{maxWidth:"180px"}}>
              <a href="">ORLA Infinity, Dorchester Collection</a>
            </ListItem>
            <ListItem disablePadding style={{maxWidth:"180px"}}>
              <a href="">ORLA, Dorchester Collection, Dubai</a>
            </ListItem>
            <ListItem disablePadding style={{maxWidth:"180px"}}>
              <a href="">VELA VIENTO, Dorchester Collection, Dubai</a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3">Mixed Use</Typography>
          <List disablePadding>
            <ListItem disablePadding>
              <a href="">The OPUS by OMNIYAT</a>
            </ListItem>
            <ListItem disablePadding>
              <a href="">The Lana, Dorchester Collection, Dubai</a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3">Explore</Typography>
          <List disablePadding>
            <ListItem disablePadding>
              <a href="">Our Story</a>
            </ListItem>
            <ListItem disablePadding>
              <a href="">Contact Us</a>
            </ListItem>
            <ListItem disablePadding>
              <a href="">News</a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h3">Stay in the know</Typography>
          <Box className="newsletter">
            <input type="email" placeholder="Email Address" />
          </Box>
        </Grid>
      </Grid>
      <Box className="footer-bottom">
        <Typography> OMNIYAT &copy; 2024</Typography>
        <Box className="links">
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
          <a href="">Cookie Policy</a>
        </Box>
        <Box className="social-icons">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </Box>
      </Box>
    </StyledFooterContainer>
  );
};

export default Footer;