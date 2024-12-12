import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../components/Logo";
import Link from "next/link";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import AppContext from "@/context/AppContext";
import { RxCross2 } from "react-icons/rx";
import ScrollAnimation from "react-animate-on-scroll";

const DrawerBox = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#0c111d !important",
    backgroundImage: "url('/images/sideDrawarImage.webp')",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "15px",
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  "& .MuiDrawer-paper::before": {
    content: "''",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    pointerEvents: "none",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const CrossButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 2,
  color: "#fff",
  backgroundColor: "transparent",
}));

const MenuButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "500",
  color: "#FFFFFF",
  lineHeight: "20.65px",
  marginLeft: "0px !important",
  "&:hover": {
    color: "#7A5AF8",
    background: "transparent",
  },
  "&.Mui-disabled": {
    color: "#fff",
  },
  transition: "opacity 0.3s ease",
  opacity: 1,

  "&.hidden": {
    opacity: 0,
  },
}));

const menuItems = [
  {
    label: "Home",
    link: "/",
    userType: true,
    displayMobileOnly: false,
  },
  {
    label: "Referrals",
    link: "/refferal",
    userType: true,
    displayMobileOnly: false,
  },
  {
    label: "Faqs",
    link: "/static/faq",
    userType: true,
    displayMobileOnly: false,
  },
  {
    label: "Support",
    link: "/contactus",
    userType: true,
    displayMobileOnly: false,
  },
];

export default function Topbar() {
  const router = useRouter();
  const auth = useContext(AppContext);
  const { pathname } = router;
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    scrolled: false,
    showDialog: false,
    signInDialogOpen: false,
    prevScrollY: 0,
  });

  const { mobileView, drawerOpen, scrolled, prevScrollY } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      setState((prevState) => ({
        ...prevState,
        mobileView: window.innerWidth < 991,
      }));
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setState((prevState) => ({ ...prevState, scrolled: true }));
      } else {
        setState((prevState) => ({ ...prevState, scrolled: false }));
      }

      setState((prevState) => ({ ...prevState, prevScrollY: currentScrollY }));
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const showDialogShown = localStorage.getItem("showDialogShown");
      if (!showDialogShown) {
        setState((prevState) => ({ ...prevState, showDialog: true }));
        localStorage.setItem("showDialogShown", true);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const handleDialogClose = () =>
    setState((prevState) => ({ ...prevState, showDialog: false }));

  const renderMenuItems = () => {
    const currentPath = router.pathname;

    return menuItems.map((menuItem) => {
      return (
        <MenuButton
          key={menuItem.label}
          color="primary"
          onClick={() => router.push(menuItem.link)}
          disabled={!menuItem.userType}
          sx={{
            color: "#ffffff80",
          }}
          className={scrolled ? "hidden" : ""}
        >
          {menuItem.label}
        </MenuButton>
      );
    });
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <Box className="displaySpaceBetween width100">
          <Box className="displaySpaceBetween width100" mr={1}>
            <Link href="/">
              <Logo className="logoImg" />
            </Link>
          </Box>
          <IconButton
            onClick={handleDrawerOpen}
            style={{ width: "auto", marginRight: "-5px", padding: "0px" }}
          >
            <MenuIcon style={{ color: "#7a5af8" }} />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" style={{ padding: "0px" }}>
        <Toolbar sx={{ paddingTop: "10px" }}>
          <Box
            className="displaySpaceBetween width100"
            style={{ alignItems: "start" }}
          >
            <IconButton
              onClick={handleDrawerOpen}
              style={{
                width: "auto",
                marginRight: "-5px",
                padding: "0px",
                color: "#fff",
                backgroundColor: "transparent",
              }}
            >
              <MenuIcon style={{ fontSize: "30px" }} />
            </IconButton>
            <Box className="displayCenter" style={{ flexDirection: "column" }}>
              <Link href="/">
                <img
                  src={
                    scrolled ? "/images/circleLogo.svg" : "/images/textLogo.svg"
                  }
                  alt="Logo"
                  width="100%"
                  onClick={() => router.push("/")}
                  style={{
                    cursor: "pointer",
                    transition: "max-width 0.3s ease",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    opacity: "1",
                  }}
                />
              </Link>
              <Box
                className="displayCenter menuGapBox"
                style={{ display: scrolled ? "none" : "", marginTop: "45px" }}
              >
                <Box className="displayStart" sx={{ gap: "79px" }}>
                  {renderMenuItems()}
                </Box>
              </Box>
            </Box>
            <Box className="displayStart menuGapBox">
              <Box className="displayStart">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "140px" }}
                  onClick={() => {
                    router.push(
                      auth?.userLoggedIn ? "/dashboard" : "/auth/login"
                    );
                  }}
                >
                  {auth?.userLoggedIn ? "Dashboard" : "Sign In"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    );
  };

  return (
    <>
      <AppBar
        elevation={0}
        className={scrolled ? "scrolled" : "scrolled1"}
        sx={{
          backgroundColor: "#00000059 !important",
          transition: "height 0.3s ease, padding 0.3s ease",
        }}
      >
        {mobileView ? displayMobile() : displayDesktop()}
        <DrawerBox
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className="drawerBox"
        >
          <Box pt={3.8} pl={2}>
            <Box mt={0} mb={2}>
              <IconButton
                onClick={handleDrawerClose}
                style={{
                  width: "auto",
                  marginRight: "-5px",
                  padding: "0px",
                  color: "#fff",
                  backgroundColor: "transparent",
                }}
              >
                <RxCross2 style={{ fontSize: "30px" }} />
              </IconButton>
            </Box>
            <Box
              mt={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                "& button": {
                  justifyContent: "start",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  transform: "translateX(0)",
                  opacity: 1,
                  "&:hover": {
                    opacity: 0.7,
                    transform: "translateX(5px)",
                  },
                },
                "& button:nth-of-type(2)": {
                  fontSize: "30px",
                  marginBottom: "23px",
                  color: "#fff9",
                },
              }}
            >
              {menuItems.map((item, index) => (
                <ScrollAnimation
                  key={index}
                  animateIn="slideInLeft"
                  animateOut="slideOutLeft"
                  delay={index * 300} // Set delay based on index to animate each button one by one
                  animateOnce={true} // Ensures the animation runs only once when the element is visible
                >
                  <MenuButton
                    key={item.label}
                    color="primary"
                    onClick={() => router.push(item.link)}
                    disabled={!item.userType}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#ffffff80",
                      gap: "22px",
                      ...(index === 1 && {
                        fontSize: "30px",
                        marginBottom: "23px",
                        color: "#fff9",
                      }),
                    }}
                    className={scrolled ? "hidden" : ""}
                  >
                    {item.label}
                  </MenuButton>
                </ScrollAnimation>
              ))}
            </Box>
          </Box>
        </DrawerBox>
      </AppBar>
    </>
  );
}
