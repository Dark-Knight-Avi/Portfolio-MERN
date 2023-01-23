import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
