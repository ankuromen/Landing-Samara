import React from "react";
import CTA from "../components/CTA";
import MemoriesComponent from "../components/MemoriesComponent";
import CommunitiesComponent from "../components/CommunitiesComponent";
import AudienceComponent from "../components/AudienceComponent";
import DemoCTA from "../components/DemoCTA";
import ScrollingBanner from "../components/ScrollingBanner";
const Homepage = () => {
  return (
    <div>
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
