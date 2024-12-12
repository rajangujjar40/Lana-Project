import { useContext, useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { createCustomTheme, lighttheme } from "@/theme";

const RootBox = styled("div")(({ theme }) => ({
  backgroundSize: "cover",
  backgroundColor: "#FFFFFF",

  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const MainLayout = styled("div")(({ theme }) => ({
  minHeight: "calc(100vh - 120px)",
  backgroundColor: "#FFFFFF",
  // paddingTop: "130px",
  backgroundRepeat: "no-repeat",
  // backgroundImage: "url(/images/Landing_back.svg)",

  backgroundPosition: "top left",
  backgroundSize: "cover",
  // backgroundAttachment: "fixed",
  zIndex: "2",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "100px",
  },
}));

export default function HomeLayout({ children }) {
  const background = "root";

  return (
    <ThemeProvider theme={lighttheme}>
      <RootBox>
        <Topbar />
        <MainLayout className={background}>
          <div style={{ position: "relative", zIndex: "9" }}> {children}</div>
          <Footer />
        </MainLayout>
      </RootBox>
    </ThemeProvider>
  );
}
