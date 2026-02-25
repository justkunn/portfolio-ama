import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";
import Portofolio from "./components/Portofolio";

export default function App() {
  return (
    <>
      <Navbar />
      <LenisScroll />
      <div className="min-h-screen max-w-6xl mx-auto px-6 py-20 space-y-16">
        <section id="home" className="pt-6">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="portofolio">
          <Portofolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}
