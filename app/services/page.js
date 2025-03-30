import AnalysisSection from "../components/AnalysisSection";
import FocusAreas from "../components/FocusAreas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CrossCuttingAreas from "../components/MDAreas";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
        <Header/>
        <Services/>
        <AnalysisSection/>
        <FocusAreas/>
        <CrossCuttingAreas/>
        <Footer/>
    </>
    
  );
}
