import React from "react";
import FinalIntro from "../components/FinalIntro";
import LineSteps from "../components/LineSteps";
import ShortIntro from "../components/ShortIntro";
const Homepage = () => {
  return (
    <div>
      <ShortIntro />
      <LineSteps />
      <FinalIntro />
    </div>
  );
};

export default Homepage;
