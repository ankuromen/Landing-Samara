import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "../components/ClassicsContent.css";
import Portrait from "../Assets/test123.jpg";
import Image1 from "../Assets/image1.jpeg";
import Image2 from "../Assets/image2.jpeg";
import Image3 from "../Assets/image3.jpeg";
import Image4 from "../Assets/image4.jpeg";
import Image5 from "../Assets/image5.jpeg";
import Image6 from "../Assets/image6.jpeg";
const ClassicsContent = () => {
  // {
  //     title: "Helping Businesses Build Something Bigger",
  //     para: "Wheather you are planning for tomorrow or budgeting for today.Evntiq connects you with working capital you need to run your business on your terms.",
  //     image: Portrait,
  //   },
  //   {
  //     title:
  //       "Our features helps you express yourself and connect with people you love.",
  //   },
  const classicFeatures = [
    {
      title: "Profile",
      para: "Customize your personal space with profile settings that reflect your interests and personality, making it easier for like-minded individuals and groups to connect with you.",
      image: Image1,
    },
    {
      title: "Add Artists, Friends, etc. Follows",
      para: "Connect with your favorite artists, friends, and organizations, keeping you updated on their latest events, activities, and community engagements.",
      image: Image2,
    },
    {
      title: "Find Events, Communities, and Content",
      para: "Discover a wide range of events, join vibrant communities tailored to your interests, and access engaging content all in one place.",
      image: Image3,
    },
    {
      title: "Buy Tickets, Share",
      para: "Purchase tickets effortlessly for the events you love, and share them with friends and family to invite them along or promote your favorite gatherings.",
      image: Image4,
    },
    {
      title: "Create a Community",
      para: "Build and customize your community hub where you can host events, share content, and foster discussions, enhancing engagement and connectivity.",
      image: Image5,
    },
    {
      title: "Explore the World, Grow Your Network, Have Fun",
      para: "Venture into a world of endless possibilities, expand your social circle, and enjoy a plethora of activities and events designed to entertain and inspire.",
      image: Image6,
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);

  //   useEffect(() => {
  //   const swiperFull = document.querySelector(".swiper-full");

  //   if (swiperFull) { // Check if element exists
  //     const handleScroll = () => {
  //       // ... rest of your scroll handling code
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //   }

  //   // Cleanup function
  //   return () => {
  //     if (swiperFull) {
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  //   document.addEventListener("scroll", (event) => {
  //     console.log("event");
  //   });
  return (
    <div>
      {/* <div className="Classic-Card">
        <section className="Classic-Card-Sec1">
          <h1>Helping Businesses Build Something Bigger</h1>
          <p>
            Wheather you are planning for tomorrow or budgeting for today.
            Evntiq connects you with working capital you need to run your
            business on your terms.
          </p>
          <button>Unlock Capital</button>
        </section>
        <section>
          <img src={Portrait} alt="img" />
        </section>
      </div> */}
      {/* <h1 className="Body-Classic-Text">
        Our features helps you express yourself and connect with people you
        love.
      </h1> */}
      <div className="swiper-full">
        <div className="swiper-with-progress">
          <Swiper
            direction={"vertical"}
            speed={900}
            mousewheel={{
              sensitivity: 2,
              releaseOnEdges: true,
            }}
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex + 1)}
            onSlideChangeTransitionStart={() => {
              document.querySelectorAll(".slide-para").forEach((p) => {
                p.classList.remove("animate-popup");
              });
              const activeSlideText = document.querySelector(
                ".swiper-slide-active .slide-para"
              );
              activeSlideText.classList.add("animate-popup");
            }}
            modules={[Pagination, Mousewheel, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-img">
                <img src={Portrait} alt="" />
              </div>
              <div className="slide-para animate-popup">
                <h2>Helping Businesses Build Something Bigger</h2>
                <p className="slide-text">
                  Wheather you are planning for tomorrow or budgeting for
                  today.Evntiq connects you with working capital you need to run
                  your business on your terms.
                </p>
                <button className="demo-btn">Request a Demo</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-para" id="feature-text">
                <h2>
                  Our features helps you express yourself and connect with
                  people you love.
                </h2>
              </div>
            </SwiperSlide>
            {classicFeatures.map((feature, key) => (
              <div>
                <SwiperSlide key={key}>
                  <div className="slide-img">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="slide-para animate-popup">
                    <h2>{feature.title}</h2>
                    <p className="slide-text">{feature.para}</p>
                    <button className="demo-btn">Request a Demo</button>
                  </div>
                  {/* <div className="slider-progress-bar">
                  <div
                    className="slider-progress-bar-current"
                    style={{
                      height: `calc(${
                        ((key + 1) / classicFeatures.length) * 100
                      }%)`,
                    }}
                  ></div>
                </div> */}
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          <div className="slider-progress-bar">
            <div
              className="slider-progress-bar-current"
              style={{
                height: `calc(${
                  (slideIndex /
                    document.querySelectorAll(".swiper-slide").length) *
                  100
                }%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicsContent;
