import React from "react";
import '../App.css';
import CTA from "../components/CTA";
import MemoriesComponent from "../components/MemoriesComponent";
import CommunitiesComponent from "../components/CommunitiesComponent";
import AudienceComponent from "../components/AudienceComponent";
import DemoCTA from "../components/DemoCTA";
import ScrollingBanner from "../components/ScrollingBanner";
const Homepage = () => {
  return (
    <div className="Homepage-Conatiner">
      <CTA />
      <MemoriesComponent />
      <CommunitiesComponent />
      <AudienceComponent />
      <DemoCTA />
      <ScrollingBanner />
    </div>
  );
};

export default Homepage;
