import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

import Yaguaretes from "./pages/Yaguaretes";
import CienciaTecnologia from "./pages/CienciaTecnologia";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <section id="contacto">
      <Contact/>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yaguaretes" element={<Yaguaretes />} />
        <Route path="/ciencia-tecnologia" element={<CienciaTecnologia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;