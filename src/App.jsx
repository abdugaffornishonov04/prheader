import { Fragment } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MessageMe from "./components/MessageMe/MessageMe";
// import CarouselExample from "./components/Carousel/CarouselExample";
import CustomMicrosoft from "./components/Carousel/CustomMicrosoft";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <div className="container">
        {/* <CarouselExample /> */}
        <CustomMicrosoft/>
      </div>
      <p>lorem1000</p>
      <MessageMe />
    </Fragment>
  );
}

export default App;
