import { ThemeProvider } from "@mui/material/styles";
import "src/Scss/main.css";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import PageLoader from "@/components/PageLoader";
import ContextWrapper from "@/context/ContextWrapper";
import { lighttheme } from "@/theme";
import CustomHead from "@/components/CustomHead";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import CookieConsentBanner from "@/components/CookieConsentBanner";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = new QueryClient();
  const appInfo = {
    appName: "Bitefge-App",
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const stopLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={lighttheme}>
        {/* <CookieConsentBanner /> */}
        <ContextWrapper>
          <CustomHead
            title="LANA | Get world’s best web"
            description="From easy money management, to financial goals and investments. Open your account in a Flash"
            image="/images/black_logo.png"
            video=""
            isVideo={false}
          />
          <Toaster
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {loading && <PageLoader />}
          {!loading && isClient && (
            <> {getLayout(<Component {...pageProps} />)}</>
          )}
        </ContextWrapper>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
