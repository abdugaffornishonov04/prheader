import { Fragment } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MessageMe from "./components/MessageMe/MessageMe";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection/>
      <MessageMe/>
    </Fragment>
  );
}

export default App;
