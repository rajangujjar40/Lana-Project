import {
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const styles = {
  mainBox: {
    padding: "20px",
    position: "relative",
    zIndex: "999",
    cursor: "pointer",
    borderRadius: "12px",
    transition: "all ease 0.2s",
    "&:hover":{
      transform: "translateY(-5px)",
      boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
    },
    "& h5": {
      fontWeight: "500",
      fontSize: "15px",
    },
    "& .fontWeight600": {
      fontWeight: "600",
    },
  },
};

const Miningcard = ({ data, index }) => {
  const router = useRouter();
  const theme = useTheme();
  const { id, title, icon, image, image1, typo, coinname, aleosubcoin, value } =
    data;

  return (
    <Paper
      elevation={1}
      sx={styles.mainBox}
      onClick={() => router.push("/mining-pool")}
    >
      <Box className="featuresBox displaySpaceBetween" mb={3}>
        <Box className="displayStart">
          <img src={image} alt="image" />
          &nbsp; &nbsp;
          <Typography variant="h6" color="primary">
            {coinname}&nbsp;
            <span
              style={{
                color: "#00000099",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {aleosubcoin}
            </span>
          </Typography>{" "}
        </Box>
        <Typography variant="h5" color="#475467" style={{ fontSize: "18px" }}>
          {value}
        </Typography>
      </Box>
      <Box className="featuresBox displaySpaceBetween">
        <Typography variant="h5" color="#475467">
          {title}
        </Typography>

        <Typography variant="h5" color="#0C111D" className="fontWeight600">
          {typo}
        </Typography>
      </Box>
      <Box className="featuresBox displaySpaceBetween" mt={1}>
        <Typography variant="h5" color="#475467">
          Workers
        </Typography>

        <Typography variant="h5" color="#0C111D" className="fontWeight600">
          2353
        </Typography>
      </Box>
      <Box className="featuresBox displaySpaceBetween" mt={1}>
        <Typography variant="h5" color="#475467">
          Pool Fee
        </Typography>

        <Typography variant="h5" color="#0C111D" className="fontWeight600">
          2%
        </Typography>
      </Box>
      <Box className="featuresBox displaySpaceBetween" mt={1}>
        <Typography variant="h5" color="#475467">
          Threshold
        </Typography>

        <Typography variant="h5" color="#0C111D" className="fontWeight600">
          0.005-100
        </Typography>
      </Box>
      <Box className="featuresBox displaySpaceBetween" mt={1}>
        <Typography variant="h5" color="#475467">
          Method Of Payment
        </Typography>

        <Typography variant="h5" color="#0C111D" className="fontWeight600">
          FPPS
        </Typography>
      </Box>
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

export default Miningcard;
