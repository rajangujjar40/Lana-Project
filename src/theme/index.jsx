"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { typography } from "./typography";

import _ from "lodash";

const baseOptions = {
  direction: "ltr",
  // themeOption,
  overrides: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "#475467CC !important",
          // whiteSpace: "pre !important",
          wordBreak: "break-all",
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        markLabel: {
          marginLeft: "-14px",
        },
      },
    },
    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          boxShadow: "none",
        },
        containedSizeLarge: { fontSize: "16px", padding: "10px 22px" },
        containedPrimary: {
          borderRadius: "0px",
          fontWeight: "500",
          background: "#507CED",
        },
      },
    },
  },
};

const themesOptions = [];
export const lighttheme = createTheme({
  palette: {
    mode: "light", // default mode

    primary: {
      main: "#000", // customize primary color
    },
    secondary: {
      main: "#6C6D6E", // customize secondary color
    },
    background: {
      primary: "#E7ECF4",
      secondary: "#fff",
      taskBg: "rgba(0, 0, 0, 0.05)",
      basebutton: "#D0E4E4",
      tooltrip: "#D0E4E4",
      custom: "#0000000D",
      timerback: "#fff",
    },
    text: {
      primary: "rgba(38, 38, 38, 1)",
      secondary: "rgba(38, 38, 38,0.7)",
      black: "#fff",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#475467CC !important",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media(min-width:1300px)": {
            maxWidth: "1510px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "pre !important",
          borderBottom: "1px solid rgb(81 81 81 / 9%)",
          color: "#475467CC",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: { backgroundColor: "#ffffff80" },
        rounded: { backgroundColor: "#000", borderRadius: "50%" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          whiteSpace: "pre !important",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: "18px",
        },
        rail: {
          backgroundColor: "#fff",
          opacity: "2",
        },
        track: {
          background: "linear-gradient(90deg, #436DFF 4.74%, #02D1FF 93.1%)",
          border: "none",
        },
        markLabel: {
          top: "50px !important",
          fontSize: "14px",
          fontWeight: 400,
          left: "10px !important",
        },
        mark: {
          width: "0px",
          height: "0px",
        },
        thumb: {
          position: "relative",
          "&::before": {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            background: "#000",
            padding: "0px",
            height: "100%",
          },

          "&::after": {
            position: "absolute",
            content: '""',
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            top: "50%",
            padding: "-15px",
            left: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            MozTransform: "translate(-50%, -50%)",
            MsTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(90deg, #436DFF 4.74%, #02D1FF 93.1%)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          color: "#98A2B3",
          "&:hover": {
            // backgroundColor: "rgba(255,255,255,0.7)",
            backgroundColor: "#000",
            color: "#fff",
          },
        },
        colorSecondary: {
          backgroundColor: "transparent",
          color: "#000",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          backgroundColor: "rgba(255,255,255,1)",
        },
        notchedOutline: { borderColor: "rgba(234, 236, 240, 1)" },
        input: { padding: "12.5px 14px" },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "20px",
          borderRadius: "8px",
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          padding: "0px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "none",
          backgroundImage: "none",
          "&.MuiDialog-paper": {
            backgroundImage: "none",
            background: "transparent",
            backgroundColor: "transparent",
            borderRadius: "30px",

            "&:before": {
              content: "' '",
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#E7ECF4",
              backdropFilter: "blur(10px)",
            },
          },
          "&.MuiAccordion-root": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            borderRadius: "30px",
            padding: "0",
          },
        },

        elevation1: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "24px",
          padding: "40px 40px 30px",
          "@media(max-width:767px)": {
            padding: "25px",
          },
        },
        elevation2: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "24px",
          padding: "20px",
          "@media(max-width:767px)": {
            padding: "20px",
          },
        },
        elevation3: {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: "24px",
        },
        elevation4: {
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "24px",
          "@media(max-width:500px)": {
            padding: "10px",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(255,255,255,1)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "rgba(108, 109, 110, 1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          boxShadow: "none",
          whiteSpace: "pre",
        },
        textSizeLarge: {
          fontSize: "16px",
          padding: "8.5px 22px",
          fontWeight: "500",
          borderRadius: "30px",
          "@media(max-width:767px)": {
            minWidth: "100px",
            fontSize: "12px",
            padding: "8px 15px",
          },
        },
        containedSizeLarge: {
          fontSize: "16px",
          padding: "8.5px 22px",
          fontWeight: "500",
          minWidth: "150px",
          "@media(max-width:767px)": {
            minWidth: "100px",
            fontSize: "12px",
            padding: "8px 15px",
          },
        },
        containedInfo: {
          backgroundColor: "rgba(0,0,0, 0.5) !important",
          borderRadius: "0px",
        },
        containedPrimary: {
          borderRadius: "0px",
          background: "#414141",
          color: "#ffffff80",
        },
        containedSecondary: {
          borderRadius: "0px",
          background: "#ffffff80",
          color: "#414141",
        },
      },
    },
  },
  typography: {
    ...typography.typography,
    body1: {
      color: "#fff", // Example typography color for body1
    },
    // Add more typography color settings as needed
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0C111D",
    },
    secondary: {
      main: "#667085",
    },
    background: {
      primary: "#05020D",
      secondary: "rgba(255,255,255,0.05)",
      taskBg: "rgba(255,255,255,0.05)",
      basebutton: "#1B1B1B",
      tooltrip: "#4C3160",
      custom: "rgba(255,255,255,0.05)",
      timerback: "#FFFFFF0D",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255,255,255,0.7)",
      black: "#000",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#EAECF0 ",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media(min-width:1300px)": {
            maxWidth: "1400px",
          },
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: { backgroundColor: "#00000080" },
        rounded: { backgroundColor: "#fff", borderRadius: "50%" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "pre !important",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 400,
          wordBreak: "break-word",
          color: "#475467CC ",
          borderBottom: "1px solid rgb(81 81 81 / 9%)",
        },
      },
    },
    elevation4: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "25px",
      "@media(max-width:500px)": {
        padding: "10px",
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "#53B651",
          color: "#fff",
          justifyContent: "center",
        },
        message: {
          color: "#fff",
        },
        alert: {
          color: "#fff",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#475467",
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          height: "18px",
          "@media(max-width:767px)": {
            width: "97%",
          },
        },
        rail: {
          backgroundColor: " rgba(255,255,255,0.05)",
          opacity: "2",
        },
        track: {
          background: "linear-gradient(90deg, #436DFF 4.74%, #02D1FF 93.1%)",
          border: "none",
        },
        markLabel: {
          top: "50px",
          fontSize: "14px",
          fontWeight: 400,
          // marginLeft: "-16px",
          "@media(max-width:767px)": {
            marginLeft: "0px",
          },
        },
        mark: {
          width: "0px",
          height: "0px",
        },
        thumb: {
          position: "relative",
          "&::before": {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            background: "#fff",
            padding: "0px",
            height: "100%",
          },

          "&::after": {
            position: "absolute",
            content: '""',
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            top: "50%",
            padding: "-15px",
            left: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            MozTransform: "translate(-50%, -50%)",
            MsTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(90deg, #436DFF 4.74%, #02D1FF 93.1%)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#7A5AF8",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#98A2B3",
        },
        colorSecondary: {
          backgroundColor: "transparent",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#414141",
            color: "#fff",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#26252E",
          borderRadius: "8px !important",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#0C111D",
          fontSize: "14px",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          fontWeight: "400",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "0px",
          borderRadius: "8px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          padding: "0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "32px",
          padding: "32px",
          backgroundColor: "#ffffff !important",
          "@media(max-width:767px)": {
            padding: "20px",
            margin: "10px",
          },
        },
        paperWidthSm: {
          maxWidth: "550px !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          border: "1px solid #EAECF0",
        },
        notchedOutline: { borderColor: "transparent" },
        input: {
          fontWeight: "500",
          color: "#98A2B3",
          fontSize: "14px",
          padding: "15.5px 14px",
          lineHeight: "20px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#182230",
          },
          "&:-internal-autofill-selected": {
            color: "#182230",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgba(255, 255, 255, 0.04)",
          boxShadow: "none",
          backgroundImage: "none",

          "&.MuiAccordion-root": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            borderRadius: "30px",
            padding: "0",
          },
        },

        elevation1: {
          backgroundColor: "#fff",
          boxShadow: "0px 4px 44px 0px rgba(0,0,0,0.14)",
          borderRadius: "24px",
          padding: "20px",
          "@media(max-width:767px)": {
            padding: "15px",
          },
        },
        elevation2: {
          backgroundColor: "#fff",
          boxShadow: "none",
          borderRadius: "12px",
          padding: "16px",
          "@media(max-width:767px)": {
            padding: "20px",
          },
        },
        elevation3: {
          backgroundColor: "#F2F4F7",
          borderRadius: "8px",
          padding: "14px 12px",
        },
        elevation4: {
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "24px",
          "@media(max-width:500px)": {
            padding: "10px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontSize: "35px",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginLeft: "16px",
        },
        line: {
          minHeight: "40px",
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          marginLeft: "16px",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          padding: "0px 0px",
        },
        label: {
          fontSize: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          boxShadow: "none",
          whiteSpace: "pre",
        },
        containedInfo: {
          backgroundColor: "rgba(255,255,255, 0.05) !important",
          borderRadius: "5px",
          fontWeight: 500,
          fontSize: "16px",
          color: "#fff",
        },
        textSizeLarge: {
          fontSize: "16px",
          padding: "8.5px 22px",
          fontWeight: "400",
          borderRadius: "30px",
          "@media(max-width:767px)": {
            minWidth: "100px",
            fontSize: "12px",
            padding: "8px 15px",
          },
        },
        containedSizeLarge: {
          fontSize: "16px",
          padding: "9px 30px",
          fontWeight: "400",
          minWidth: "100px",
          "@media(max-width:767px)": {
            minWidth: "100px",
            fontSize: "12px",
            padding: "8px 15px",
          },
        },
        outlinedPrimary: {
          borderRadius: "8px",
          background: "transparent",
          padding: "6px 10px",
          fontSize: "14px",
          border: "1px solid #7A5AF8",
          color: "#7A5AF8",
          fontWeight: "400",
          boxShadow: "none",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          // "&:hover": {
          //   background: "linear-gradient(180deg, #E365F7 0%, #8900BA 100%)",
          //   color: "#FFFFFF",
          //   border: "1px solid #8900ba",
          // },
          "@media(max-width:767px)": {
            minWidth: "100px",
            fontSize: "12px",
            padding: "8px 15px",
          },
        },
        containedPrimary: {
          borderRadius: "32px",
          background: "#7A5AF8",
          padding: "12px 30px",
          fontSize: "14px",
          border: "none",
          color: "#FFFFFF",
          fontWeight: "500",
          boxShadow: "none",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          lineHeight: "24px",
          "&:hover": {
            color: "#fff",
            background: "#182230",
          },
        },
        containedDanger: {
          borderRadius: "5px",
          background: "#ED3737",
          color: "#fff",
          fontWeight: "400",
          "&:hover": {
            background: "#ED3737",
            color: "#fff",
          },
        },

        containedSecondary: {
          borderRadius: "8px",
          background: "transparent",
          padding: "9px 16px",
          fontSize: "16px",
          color: "#FFFFFF",
          fontWeight: "600",
          fontFamily:  "'OptimaLTPro-Roman', sans-serif",
          height: "48px",
          border: "1px solid #FFFFFF",
          boxShadow: "0px 1px 2px 0px #0000000D",
          "&:hover": {
            background: "linear-gradient(180deg, #E365F7 0%, #8900BA 100%)",
            color: "#FFFFFF",
            border: "1px solid #8900ba",
          },
        },
      },
    },
  },
  typography: {
    ...typography.typography,
    body1: {
      color: "#475467", // Example typography color for body1
    },
    // Add more typography color settings as needed
  },
});

export const createCustomTheme = (config = {}) => {
  let themeOption = themesOptions.find((theme) => theme.mode === config.theme);
  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOption] = themesOptions;
  }

  // Merge base options with selected theme options
  let theme = createTheme(
    _.merge({}, baseOptions, themeOption, {
      direction: config.direction,
    })
  );

  // Enable responsive font sizes if required
  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
