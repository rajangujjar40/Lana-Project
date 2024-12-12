import {
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { borderRadius, maxWidth } from "@mui/system";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const styles = {
  mainBox: {
    padding: "20px",
    position: "relative",
    zIndex: "999",
    cursor: "pointer",
    borderRadius: "12px",
    "& p": {
      maxWidth: "323.47px",
    },
    "&:hover": {
      background: "#A53DB5",
      "& h6": {
        color: "#fff",
      },

      "& h4": {
        color: "#fff",
      },

      "& .arrowButton": {
        background: "#fff",
        "& svg": {
          color: "#507CED",
        },
      },
    },

    "& .featuresBox": {
      width: "40px",
      height: "40px",
      "& img": {
        width: "auto",
        maxWidth: "100%",
      },
    },
  },
};

const ProvideCard = ({ data, index }) => {
  const theme = useTheme();
  const { id, title, icon, image, image1, typo } = data;

  return (
    <Paper elevation={1} sx={styles.mainBox}>
      <Box className="featuresBox">
        <img src={image} alt="image" />
      </Box>
      <Typography mt={1} variant="h4" color="primary" fontSize="24px">
        {title}
      </Typography>
      <Typography variant="h6" fontWeight="400" color="#0C111D" mt={1}>
        {typo}
      </Typography>
      {/* <Box mt={3} className="displayStart">
        <Typography variant="body2" color="primary" mr={2}>
          Read More
        </Typography>
        <IconButton className="arrowButton">
          <FaArrowRight fontSize="15px" />
        </IconButton>
      </Box> */}
    </Paper>
  );
};

export default ProvideCard;
