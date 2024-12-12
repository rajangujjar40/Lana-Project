import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { Avatar, IconButton, Typography } from "@mui/material";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const TaskCardBox = styled("Box")(({ theme }) => ({
  "&:hover": {
    // "& .saveButton": {
    //   display: "block",
    // },
    "& .imgShadow": {
      display: "block",
    },
    // "& .baseButton": {
    //   background: "linear-gradient(90deg, #2C4EC9 4.74%, #007089 93.1%)",
    //   "& p": { color: "#fff" },
    // },
    // "& .baseButton:first-child": {
    //   background: "linear-gradient(94.88deg, #AE47FF 10.93%, #5500C1 83.21%)",
    // },
    // "& .baseButton:last-child": {
    //   background: "linear-gradient(90deg, #55C92C 4.74%, #008968 93.1%)",
    // },
  },
  "& .baseButton": {
    background: theme.palette.background.basebutton,
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 12px",
    "& p": {
      fontSize: "14px",
    },
  },
  "& .baseText": {
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 12px",
    "& p": {
      fontSize: "14px",
    },
  },
}));
const BoxContent = styled("Box")(({ theme }) => ({
  position: "relative",
  img: {
    objectFit: "cover",
    height: "210px",
    width: "100%",
    borderRadius: "23px",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    zIndex: "2",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "all 0.3s ease-in-out",
    },
  },
  "& .imgShadow": {
    display: "none",
    position: "absolute",
    width: "108%",
    height: "101%",
    left: "0",
    top: "0",
    filter: "blur(10px)",
    zIndex: "1",
    borderRadius: "23px",
    transition: "all 0.3s ease-in-out",
  },
  "& .cardTypeButton": {
    position: "absolute",
    top: "6px",
    right: "6px",
    zIndex: "3",
    "& svg": { color: theme.palette.text.primary },
  },
  "& .saveButton": {
    display: "none",
    position: "absolute",
    bottom: "10px",
    right: "6px",
    width: "40px",
    height: "40px",
    zIndex: "3",

    "& svg": { fontSize: "18px" },
  },
}));
const PastAirdropCard = ({ data, index }) => {
  const router = useRouter();
  const { image, name, type } = data;
  const imageRef = useRef(null);
  const updateDimensions = () => {
    if (imageRef.current) {
      const offsetWidth = imageRef.current.offsetWidth;
      const newOffsetWidth = offsetWidth - 110;
      imageRef.current.style.height = newOffsetWidth + "px";
    }
  };

  useEffect(() => {
    updateDimensions();
  }, [data, name]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <TaskCardBox>
      <Box display="flex" flexDirection="column" border={0} mb={2}>
        <BoxContent
          onClick={() =>
            router.push(
              type === "response" ? "/campaign-details" : "/campaign-details2"
            )
          }
          style={{ cursor: "pointer" }}
        >
          <img ref={imageRef} src={image} alt="" layout="responsive" />
          <img src={image} className="imgShadow" alt="" layout="responsive" />
          <Avatar className="cardTypeButton">
            {type === "response" ? <MdOutlineAccessTime /> : <FiUsers />}
          </Avatar>
          <IconButton
            className="saveButton"
            color="primary"
            variant="contained"
          >
            <FiBookmark />
          </IconButton>
        </BoxContent>
        <Box my={1}>
          <Typography variant="h5" color="primary" className="textEllypsis">
            {name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-start" width="100%" gap={1.2}>
          <Box className="baseButton">
            <Typography
              variant="body2"
              color="primary"
              className="font500 fontSource"
            >
              Won 20 SOL
            </Typography>
          </Box>
          <Box className="baseText">
            <Typography
              variant="body2"
              color="secondary"
              className="font500 fontSource"
            >
              20/3/24
            </Typography>
          </Box>
          {/* <Box className="baseButton">
            <Typography
              variant="body2"
              color="primary"
              className="font500 fontSource"
            >
              10/20 Slots
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </TaskCardBox>
  );
};
export default PastAirdropCard;
