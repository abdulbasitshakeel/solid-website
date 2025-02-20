import React from "react";
import "./style/App.css"
import Header from "./component/Header";
import HeroWork from "./component/HeroWork";
import Features from "./component/Features";
import Tabs from "./component/Tabs";
import Intergrations from "./component/Integration";
import Faq from "./component/Faq";


function App() {

  return (
    <>
      <Header />
      <HeroWork />
      <Features />
      <Tabs />
      <Intergrations />
      <Faq />
    </>
  )
}

export default App
