import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeComponent from "./components/HomeComponent";
import HomeSectorialAreas from "./components/HomeSectorialAreas";
import OurExpertise from "./components/OurExpertise";
import OurTeam from "./components/OurTeam";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <HomeComponent />
        <WhatWeDo/>
        <WhyChooseUs/>
        <HomeSectorialAreas/>
        <OurExpertise/>
        <OurTeam/>
      </div>
      <Footer/>
    </>
  );
}
