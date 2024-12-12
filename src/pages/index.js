import HomeLayout from "@/layout/HomeLayout";
import About from "./home/about-us";
import CustomHead from "@/components/CustomHead";
// import Success from "./home/Success";
import Copytrding from "./home/Copytrding";
// import Strategies from "./home/Strategies";
import Join from "./home/Join";
import BannerSec from "./home/BannerSec";
import Banner2 from "./home/Banner2";
import Banner from "./home/Banner";
import BuildingSec from "./home/BuildingSec";
import OverView from "./home/OverView";
import Cardbanner from "./home/cardbanner";
import Banner1 from "./home/banner1";
import Banner3 from "./home/Banner3";
import BottomSection from "./home/BottomSection";
import AmenitiesSec from "./home/AmenitiesSec";
import OneOfdiningEvent from "./home/OneOfdiningEvent";
import LocationPoint from "./LocationPoint";
export default function ClientPage() {
  return (
    <>
      <CustomHead
        title="LANA | Get world’s best web"
        description="From easy money management, to financial goals and investments. Open your account in a Flash"
        image="/images/black_logo.png"
        video=""
        isVideo={false}
      />
      <div className="overflowXHidden">
        <BannerSec />
        <OverView />
        {/* <About /> */}
        <Banner1 />
        <Banner />
        <Banner2 />
        <BuildingSec />
        <AmenitiesSec />
        <Cardbanner />
        {/* <Success /> */}
        {/* <Copytrding /> */}
        {/* <Strategies /> */}
        {/* <Join /> */}
        <BottomSection />
        <Banner3 />
        <OneOfdiningEvent />
        <LocationPoint />
        {/* <Aleoprover /> */}
        {/* <Provide /> */}
        {/* <Hashpower /> */}
        {/* <Brains /> */}
        {/* <Blog /> */}
        {/* <Stay /> */}
        {/* <Mining />
        {/* <Howwork /> */}
        {/* <Different /> */}
      </div>
    </>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
