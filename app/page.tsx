import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Flats from "@/components/Flats";
import Steps from "@/components/Steps";
import About from "@/components/About";
import Lists from "@/components/Lists";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Trust />
        <Flats />
        <Steps />
        <About />
        <Lists />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
