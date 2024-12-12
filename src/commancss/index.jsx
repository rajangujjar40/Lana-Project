import { styled } from "@mui/system";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  FormControl,
} from "@mui/material";

export const PhoneInputBox = styled(FormControl)(({ theme }) => ({
  "& .outlineborder1": {
    "& .react-tel-input .form-control": {
      width: "100%",
      color: "#6D6D6D",
      borderRadius: "10px",
      height: "50px",
      background: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    "& .react-tel-input .country-list .country": {
      padding: "7px 9px",
      textAlign: "left",
      backgroundColor: "#2D2D2D",
      color: "#fff",
      "&:hover": {
        background: "#000000e3",
      },
    },
    "& .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus":
      {
        backgroundColor: "transparent !important",
      },
    "& .react-tel-input .selected-flag": {
      backgroundColor: "#262626",
      "&:hover": {
        backgroundColor: "none",
      },
    },
    "& .react-tel-input .selected-flag .arrow": {
      left: "20px",
    },

    "& .react-tel-input .country-list .country.highlight": {
      background: "#000000e3 !important",
      fontSize: "16px",
    },
    "& .react-tel-input .flag-dropdown ": {
      backgroundColor: "transparent",
      border: "none",
      height: "44px",
      position: "absolute",
      top: "5px",
    },
    "& .react-tel-input .flag-dropdown.open .selected-flag": {
      background: "#FFFFFF06",
      fontSize: "16px",
    },
  },
  "& .outlineborder2": {
    "& .react-tel-input .form-control": {
      width: "100%",
      color: "#6D6D6D",
      borderRadius: "10px",
      height: "50px",
      background: "transparent",
      border: "1px solid #808080a3",
    },
    "& .react-tel-input .country-list .country": {
      padding: "7px 9px",
      textAlign: "left",
      backgroundColor: "#2D2D2D",
      color: "#fff",
      "&:hover": {
        background: "#000000e3",
      },
    },
    "& .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus":
      {
        backgroundColor: "transparent !important",
      },
    "& .react-tel-input .selected-flag": {
      // backgroundColor: "#202020",
      "&:hover": {
        backgroundColor: "none",
      },
    },
    "& .react-tel-input .selected-flag .arrow": {
      left: "20px",
    },

    "& .react-tel-input .country-list .country.highlight": {
      background: "#000000e3 !important",
      fontSize: "16px",
    },
    "& .react-tel-input .flag-dropdown ": {
      backgroundColor: "transparent",
      border: "none",
      height: "44px",
      position: "absolute",
      top: "5px",
    },
    "& .react-tel-input .flag-dropdown.open .selected-flag": {
      background: "#FFFFFF06",
      fontSize: "16px",
    },
  },
}));
export const FormControlBox = styled(FormControl)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .OTPDark": {
    "& input": {
      color: "#fff",
      width: "60px !important",
      height: "60px !important",
      border: "0px",
      background: "rgba(255, 255, 255, 0.02)",
      margin: "0 8px",
      fontSize: "18px",
      textAlign: "center",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      "@media(max-width:460px)": {
        width: "41px !important",
        height: "41px !important",
      },
      "@media(max-width:380px)": {
        width: "31px !important",
        height: "31px !important",
      },
    },
  },
  "& .OTPLight": {
    "& input": {
      color: "#000",
      width: "60px !important",
      height: "60px !important",
      border: "0px",
      background: "rgba(255, 255, 255, 1)",
      margin: "0 8px",
      fontSize: "18px",
      textAlign: "center",
      borderRadius: "10px",
      border: "1px solid #808080a3",
      "@media(max-width:460px)": {
        width: "41px !important",
        height: "41px !important",
      },
      "@media(max-width:380px)": {
        width: "31px !important",
        height: "31px !important",
      },
    },
  },
}));
