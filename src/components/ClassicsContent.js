import React, { useState } from "react";
import SignupFormModal from "./SignupFormModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "../components/ClassicsContent.css";
// import Image1 from "../Assets/image1.jpeg";
// import Image2 from "../Assets/image2.jpeg";
// import Image3 from "../Assets/image3.jpeg";
// import Image4 from "../Assets/image4.jpeg";
// import Image5 from "../Assets/image5.jpeg";
// import Image6 from "../Assets/image6.jpeg";
import video1 from "../Assets/FansVideo.mp4";
const ClassicsContent = () => {
  const [showSignup, setShowSignup] = useState(false);
  const classicFeatures = [
    {
      title: "Explore & Follow.",
      para: "Explore and follow your favourite brands, communities, venues, creators, artists or events. Check out highlights and see what’s trending to find your perfect fit—from finding local art or yoga classes to Coachella! ",
      image: video1,
    },
    {
      title: "Connect & Share.",
      para: "Connect with friends and family. Share events, communities, and content effortlessly. Whether it’s a captivating video, an exciting post, or just the anticipation of a shared event, bring everyone closer",
      image: video1,
    },
    {
      title: "Dynamic Content.",
      para: "Interact with captivating videos, posts, and stories. ",
      image: video1,
    },
    {
      title: "Experience & Rewards.",
      para: "Enjoy a seamless experience whether you're buying tickets for a VR-hosted sports game or signing up for a Pilates class. Earn points through participation and purchases, and use them to get discounts. ",
      image: video1,
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex + 1);
  };

  return (
    <div>
      <div className="swiper-full">
        <div className="swiper-with-progress">
          <Swiper
            direction={"vertical"}
            speed={900}
            touchReleaseOnEdges={true}
            mousewheel={{
              sensitivity: 2,
              releaseOnEdges: true,
            }}
            onSlideChange={handleSlideChange}
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
              <div className="slide-para animate-popup" id="feature-text">
                <h3 className="feature-text-heading">Feel the </h3>
                <h3 className="feature-text-heading">Unforgettable.</h3>
                <p className="slide-text" id="slide-text-head"></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-para" id="feature-text">
                <h2>
                  Our features don't just bring the world closer— they help in
                  binding the threads of joy, community and memories.
                </h2>
              </div>
            </SwiperSlide>
            {classicFeatures.map((feature, key) => (
              <div>
                <SwiperSlide key={key}>
                  <div className="slide-img">
                    <video
                      src={feature.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                    {/* <img src={feature.image} alt="" /> */}
                  </div>
                  <div className="slide-para animate-popup">
                    <h2>{feature.title}</h2>
                    <p className="slide-text">{feature.para}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <SwiperSlide>
              <div className="slide-para" id="feature-text">
                <h2>
                  Ready for the extraordinary? Join the the waitlist today & be
                  among the first to discover a new universe.
                </h2>
                <button
                  className="merged-button"
                  id="Classics-Slide-Btn"
                  onClick={() => setShowSignup(!showSignup)}
                >
                  Sign up
                </button>
              </div>
            </SwiperSlide>
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
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default ClassicsContent;
