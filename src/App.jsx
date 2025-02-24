import React from "react";
import "./style/App.css"
import Header from "./component/Header";
import HeroWork from "./component/HeroWork";
import Features from "./component/Features";
import Tabs from "./component/Tabs";
import Intergrations from "./component/Integration";
import Faq from "./component/Faq";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";


function App() {

  return (
    <>
      <Header />
      <content>
      <HeroWork />
      <Features />
      <Tabs />
      <Intergrations />
      <Faq />
      <Testimonials />
      </content>
      <Footer />
    </>
  )
}

export default App
