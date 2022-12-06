import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Porfolio/Porfolio";
import TestMonial from "./components/TestMonials/TestMonials";
import Contect from "./components/Contect/Contect";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <TestMonial />
      <Contect />
      <Footer />
    </div>
  );
};

export default App;
