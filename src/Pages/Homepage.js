import React from "react";
import { useEffect } from "react";
import "../App.css";
import CTA from "../components/CTA";
import MemoriesComponent from "../components/MemoriesComponent";
import CommunitiesComponent from "../components/CommunitiesComponent";
import ClassicsBusiness from "../components/ClassicsBusiness";
import ClassicsFans from "../components/ClassicsFans";
import DemoCTA from "../components/DemoCTA";
import ScrollingBanner from "../components/ScrollingBanner";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Homepage-Conatiner">
      <CTA />
      <MemoriesComponent />
      <CommunitiesComponent />
      <ClassicsBusiness />
      <ClassicsFans />
      <DemoCTA />
      <ScrollingBanner />
    </div>
  );
};

export default Homepage;
