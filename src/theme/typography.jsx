import { fontFamily } from "@mui/system";

export const typography = {
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 62,
      lineHeight: "76.8px",
      fontFamily:  "'OptimaLTPro-Roman', sans-serif",
      letterSpacing: "0",
      "@media(max-width:767px)": {
        fontSize: "29px",
        lineHeight: "35px",
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: 36,
      lineHeight: "55.86px",
      fontFamily:  "'OptimaLTPro-Roman', sans-serif",
      letterSpacing: "0",
      "@media(max-width:767px)": {
        fontSize: "20px",
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: 33,
      lineHeight: "39px",
      letterSpacing: "0",
      fontFamily:  "'OptimaLTPro-Roman', sans-serif",
      "@media(max-width:767px)": {
        fontSize: "20px !important",
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: 30,
      lineHeight: "20px",
      fontFamily:  "'OptimaLTPro-Roman', sans-serif",
      "@media(max-width:767px)": {
        fontSize: "20px !important",
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: 26,
      lineHeight: "33.6px",
      letterSpacing: "0",
      fontFamily: "'Roboto', sans-serif",
      "@media(max-width:767px)": {
        fontSize: "20px !important",
      },
    },
    h6: {
      fontWeight: 400,
      fontSize: 20,
      fontFamily: "'Roboto', sans-serif",
      lineHeight: "32.2px",
      letterSpacing: "0",
      "@media(max-width:767px)": {
        fontSize: "15px !important",
        lineHeight: "25px",
      },
    },
    overline: {
      fontWeight: 500,
    },
    button: {
      textTransform: "capitalize",
      borderRadius: 27,
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: "18px",
      fontFamily:  "'OptimaLTPro-Roman', sans-serif",
    },
    body1: {
      fontSize: 19,
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.5px",
      fontFamily: "'Roboto', sans-serif",
      "@media(max-width:767px)": {
        fontSize: "10px !important",
      },
    },
    body2: {
      fontSize: 16,
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      lineHeight: "25.2px",
      "@media(max-width:767px)": {
        fontSize: "15px !important",
        lineHeight: "23px",
      },
    },
  },
};
