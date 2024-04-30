import React, { useState } from "react";
import "./ProfessionalFeatures.css";
import featurefirsticon from "../Assets/features-first.png";
import image1 from "../Assets/Professionalfeature1.jpg";
import image2 from "../Assets/Professionalfeature2.jpg";
import image3 from "../Assets/Professionalfeature3.jpg";
import image4 from "../Assets/Professionalfeature4.jpg";
import image5 from "../Assets/Professionalfeature5.jpg";
import image6 from "../Assets/Professionalfeature6.jpg";
import image7 from "../Assets/Professionalfeature7.jpg";
import image8 from "../Assets/Professionalfeature8.jpg";
import SignupFormModal from "./SignupFormModal";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProfessionalFeatures = () => {
  const [showSignup, setShowSignup] = useState(false);
  const Navigate = useNavigate();

  const ProoFArray = [
    {
      title: "Creation.",
      para: (
        <>
          <p>
            Design memorable experiences by organizing private or public events
            and building your own community. Whether you're establishing your
            brand, fanbase, or event, make sure attendees have a frictionless
            and personalized experience by joining your community.
          </p>
        </>
      ),
      image: image1,
      icon: require("../Assets/icons/CreatorsIcon1.png"),
    },
    {
      title: "Connection.",
      para: (
        <>
          <p>
            Boost your visibility with powerful tools. Post captivating reels
            and stories, collaborate on posts with venues and artists, or use
            targeted ads to reach your ideal audience. Engage directly with
            attendees via real-time messaging to share updates and exclusive
            promotions, building excitement and lasting connections.
          </p>
        </>
      ),
      image: image2,
      icon: require("../Assets/icons/CreatorsIcon2.png"),
    },

    {
      title: "Tickets & Payouts.",
      para: (
        <>
          <p>
            Put yourself in control with our flexible ticketing solutions. From
            subscriptions to reserved seating, offer a variety of ticket types
            tailored to your unique needs. Adjust ticket offerings in real-time,
            send personalized invites, sell add-ons like food and merch or track
            sales with color-coded tickets.
          </p>
        </>
      ),
      image: image3,
      icon: require("../Assets/icons/CreatorsIcon3.png"),
    },

    {
      title: "Smart Management & Logistics.",
      para: (
        <>
          <p>
            Perfect your event's operational flow. Ensure instant digital
            delivery of tickets, efficiently track and process returns and
            refunds, maintain inventory transparency, use customizable templates
            to save time and capture early interest with pre-sale and early bird
            offers. Our AI assistant is ready to swiftly enact changes or assist
            in locating information, making logistics seamless.
          </p>
        </>
      ),
      image: image4,
      icon: require("../Assets/icons/CreatorsIcon4.png"),
    },
    {
      title: "Financial Metrics.",
      para: (
        <>
          <p>
            Connect multiple accounts for better management or custom and quick
            payouts. Gain valuable insights with detailed breakdowns of
            revenues. Efficiently track and manage affiliates, customize
            commission splits, and facilitate direct payments. Utilize AI-driven
            dynamic pricing to optimize sales based on demand.
          </p>
        </>
      ),
      image: image5,
      icon: require("../Assets/icons/CreatorsIcon5.png"),
    },
    {
      title: "Make informed decisions.",
      para: (
        <>
          <p>
            Discover other unique features such as enabling tip transactions or
            implementing virtual queues to streamline entries and increase
            safety. Efficiently handle sponsor relationships to ensure they
            reach maximum visibility. Elevate your IT and security measures with
            a customizable scanner, adaptable to specific requirements.
            Effortlessly create a link for checkout page to promote on other
            platforms.
          </p>
          <p>
            Our platform combines advanced technology with user-friendly
            customization, ensuring your event is both cutting-edge and secure.
          </p>
        </>
      ),
      image: image6,
      icon: require("../Assets/icons/CreatorsIcon6.png"),
    },
  ];

  // window.addEventListener("scroll", checkText);

  // function checkText() {
  //   const text = document.querySelectorAll(".Professional-features-text");
  //   const img = document.querySelectorAll(".Professional-features-img");
  //   const TriggerBottom = window.innerHeight+50;
  //   text.forEach((text) => {
  //     const textTop = text.getBoundingClientRect().top;
  //     if (textTop < TriggerBottom) {
  //       text.classList.add("Fadein");
  //     } else {
  //       text.classList.remove("Fadein");
  //     }
  //   });
  //   img.forEach((img) => {
  //     const imgTop = img.getBoundingClientRect().top;
  //     if (imgTop < TriggerBottom) {
  //       img.classList.add("Fadein");
  //     } else {
  //       img.classList.remove("Fadein");
  //     }
  //   });
  // }
  return (
    <div className="Professional-features-container">
      <div className="Professional-features-header">
        <p data-aos="fade-up">
          {" "}
          Design exceptional experiences and cultivate your own thriving
          community, equipped with all the tools and insights needed for
          success.
        </p>
        <h1 data-aos="fade-up">How it works?</h1>
        {/* <div>
          <div id="first-line"></div>
          <img id="iconimg" src={featurefirsticon} alt="" />
        </div> */}
      </div>
      {ProoFArray.map((feature, index) => (
        <div key={index} className="Professional-features">
          <div className="Professional-features-arrow">
            <img src={feature.icon} alt="" />
            {ProoFArray.length !== index + 1 && (
              <div
                className="Professional-features-line"
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              ></div>
            )}
          </div>
          <div className="Professional-features-text" data-aos="fade-up">
            <h1>{feature.title}</h1>
            <p>{feature.para}</p>
          </div>
          <div className="Professional-features-img" data-aos="fade-up">
            <img src={feature.image} alt="" />
          </div>
        </div>
      ))}
      <button
        className="register-button"
        onClick={() => setShowSignup(!showSignup)}
      >
        Register
      </button>
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
      <div className="Professional-features-faq">
        <h1 className="Professional-FAQ-Heading">
          Questions? We're glad you asked.
        </h1>
        <button className="Faq-btn" onClick={() => Navigate("/faq")}>
          FAQ's
        </button>
      </div>
    </div>
  );
};

export default ProfessionalFeatures;
