import React from "react";
import "./style/App.css"
import Header from "./component/Header";
import HeroWork from "./component/HeroWork";
import Features from "./component/Features";
import Tabs from "./component/Tabs";
import Intergrations from "./component/Integration";


function App() {

  return (
    <>
      <Header />
      <HeroWork  />
      <Features  />
      <Tabs />
      <Intergrations />
    </>
  )
}

export default App
