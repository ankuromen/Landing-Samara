import React from "react";
import "../components/StoryInfo.css";
const StoryInfo = () => {
  return (
    <div className="Story-Info-Container">
      {/* <h1>Who are we?</h1>
      <h1>What are we building?</h1>
      <h1>Why are we building it?</h1> */}
      <div className="Story-Info">
        <h3 className="Story-Info-Sub">FOUNDED IN</h3>
        <h3 className="Story-Info-SubPara">2024</h3>
      </div>
      <div className="Story-Info">
        <h3 className="Story-Info-Sub">MICROHUBS</h3>
        <h3 className="Story-Info-SubPara">
          50 Laurier Ave E 50 Laurier Ave E, Ottawa, ON K1N 1H7, Canada
        </h3>
      </div>
      <div className="Story-Info">
        <h3 className="Story-Info-Subnote">Eventiq is build for</h3>
        <h3 className="Story-Info-SubDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </h3>
      </div>
    </div>
  );
};

export default StoryInfo;
