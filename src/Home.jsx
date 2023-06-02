import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { MovingComponent } from "react-moving-text"
import "./index.css";


const Home = () => {
  return (
    
    
    <>
    
      <Navbar />
      <div className="overskrift">
      <MovingComponent type="typewriter"
  dataText={[
  'Gallery',
  'Album ',
  'Collections ',
  'Memories'
]} />
      </div>
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
