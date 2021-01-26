import "../../App.css"
import HeroSection from "../herosection";
import React from "react";
import Cards from "../Cards";
import Footer from "../../Footer";

function Home (){
  return(
    <>
    <HeroSection />
    <Cards />
    </>
  )
}

export default Home;