import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Quotes from "./components/Quotes/Quotes";
import Experience from "./components/Experience/Experience";
import Cybersec from "./components/Experience/Cybersec/Cybersec";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Communities from "./components/Communities/Communities";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quotes />
      <Experience />
      <Communities />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;
