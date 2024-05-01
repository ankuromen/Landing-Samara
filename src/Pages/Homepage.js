import React from "react";
import { useEffect } from "react";
import "../App.css";
import MemoriesComponent from "../components/MemoriesComponent";
import CommunitiesComponent from "../components/CommunitiesComponent";
import ClassicsBusiness from "../components/ClassicsBusiness";
import ClassicsFans from "../components/ClassicsFans";
import DemoCTA from "../components/DemoCTA";
import ScrollingBanner from "../components/ScrollingBanner";
import HomeBanner from "../components/HomeBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import './HomePage.css';
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   if (
  //     (document.body.scrollTop < 200 ||
  //       document.documentElement.scrollTop < 200) &&
  //     window.onscroll
  //   ) {
  //     scrollFunction();
  //   }
  // }, [window.scroll]);

  // function scrollFunction() {
  //   console.log(window.scroll);
  //   document
  //     .querySelector(".Memories-Container")
  //     .scrollIntoView({ behavior: "smooth" });
  // }
  return (
    <div className="Homepage-Conatiner">
      <Swiper
        direction={"vertical"}
        speed={900}
        touchReleaseOnEdges={true}
        mousewheel={{
          sensitivity: 2,
          releaseOnEdges: true,
        }}
        modules={[Pagination, Mousewheel, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomeBanner />
        </SwiperSlide>
        <SwiperSlide>
          <MemoriesComponent />
        </SwiperSlide>
      </Swiper>

      <CommunitiesComponent />
      <ClassicsBusiness />
      <ClassicsFans />
      <DemoCTA />
      <ScrollingBanner />
    </div>
  );
};

export default Homepage;
