import React from "react";
import '../App.css';
import CTA from "../components/CTA";
import MemoriesComponent from "../components/MemoriesComponent";
import CommunitiesComponent from "../components/CommunitiesComponent";
import ForBusiness from "../components/ForBusiness";
import ForFans from "../components/ForFans";
import DemoCTA from "../components/DemoCTA";
import ScrollingBanner from "../components/ScrollingBanner";
const Homepage = () => {
  return (
    <div className="Homepage-Conatiner">
      <CTA />
      <MemoriesComponent />
      <CommunitiesComponent />
      <ForBusiness />
      <ForFans />
      <DemoCTA />
      <ScrollingBanner />
    </div>
  );
};

export default Homepage;
