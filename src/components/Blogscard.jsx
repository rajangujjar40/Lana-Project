import React, { useEffect, useRef } from "react";
import { border, borderRadius, color, fontSize, styled } from "@mui/system";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { Avatar, Button, IconButton, Typography } from "@mui/material";

const BlogscardBox = styled("Box")(({ theme }) => ({
  "& .teamCardBox": {
    position: "relative",
    borderRadius: "12px",
    height: "auto",
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #DCDCDC",
    "& .founderName": {
      opacity: "1",
    },
    "& .descriptionText": {
      fontSize: "12px",
    },
    "& .sociallinkBox": {
      opacity: "1",
      justifyContent: "center",
    },
    "& .hoverText": {
      display: "none",
    },
    "& .subhoverText": {
      display: "none",
    },
    "& .eventButton": {
      background: "rgb(253, 231, 246)",
      color: "rgba(0, 0, 0, 0.8)",
      border: "1px solid rgb(220, 220, 220)",
      padding: "2px 9px",
      fontSize: "12px",
    },
    "& .readButton": {
      background: "#FCFCFD",
      color: "#0C111D",
      border: "1px solid #9D9898",
      padding: "8px 25px",
      fontSize: "16px",
      borderRadius: "8px",
    },
  },
}));
const BoxContent = styled("Box")(({ theme }) => ({
  position: "relative",
  "& .socilIconBox": {
    position: "absolute",
    zIndex: "9",
    top: "14px",
    right: "11px",
    fontSize: "28px",
  },
  img: {
    objectFit: "cover",
    height: "260px !important",
    width: "100%",
    borderRadius: "12px",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    zIndex: "2",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "all 0.3s ease-in-out",
      // opacity: "0.1",
    },
  },

  "& .cardTypeButton": {
    position: "absolute",
    top: "6px",
    right: "6px",
    zIndex: "3",
    "& svg": { color: theme.palette.text.primary },
  },
}));
const Blogscard = ({ data, index }) => {
  let pathname = window.location.pathname;
  const router = useRouter();
  const { image, name, profile, type, slots, time, task, tasks } = data;
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
    <BlogscardBox>
      <Box
        display="flex"
        flexDirection="column"
        border={0}
        className="teamCardBox"
        onClick={() => router.push("/blog-details")}
      >
        <BoxContent>
          <img ref={imageRef} src={image} alt="" layout="responsive" />
        </BoxContent>
        <Box my={1} align="left">
          {pathname === "/" && <Button className="eventButton">Events</Button>}

          {pathname === "/blog" && (
            <Typography
              variant="body2"
              color="#5E5D5DCC"
              style={{ fontSize: "14px", fontWeight: "400" }}
              mt={1}
              className="founderName"
            >
              09 July 2024 | Design
            </Typography>
          )}
          <Typography
            variant="h5"
            color="#0C111D"
            style={{ fontWeight: "600" }}
            className="textEllypsis founderName"
            mt={1}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="#475467"
            style={{ fontSize: "16px", fontWeight: "400" }}
            mt={1}
            className="founderName"
          >
            {profile}
          </Typography>
          {pathname === "/" && (
            <Typography
              variant="body2"
              color="#5E5D5DCC"
              style={{ fontSize: "14px", fontWeight: "400" }}
              mt={1}
              className="founderName"
            >
              09 July 2024 | Design
            </Typography>
          )}
          {pathname === "/blog" && (
            <Box align="center" mt={2}>
              <Button className="readButton">Read More</Button>
            </Box>
          )}
        </Box>
      </Box>
    </BlogscardBox>
  );
};
export default Blogscard;
