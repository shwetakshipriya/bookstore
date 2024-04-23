import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import {}  from "react-router-dom"

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
