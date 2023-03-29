import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"
import MostPopular from "../HomeSection/Popular/MostPopular"

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular/>
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </>
  )
}

export default Home