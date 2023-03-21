import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./index.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="overskrift">My album</h1>
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
