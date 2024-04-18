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

const ProfessionalFeatures = () => {
  const [showSignup, setShowSignup] = useState(false);

  const ProfessionalFeatures = [
    {
      title: " Event & Community Creation",
      para: "Be the architect of experiences and the curator of communities. Launch and oversee your private or public events and communities with absolute ease.Set the stage for physical, virtual, or VR gatherings by just a link, or forge connections by crafting your own community space.Start ticket sales and open doors to new members in moments.Whether hosting standalone events or community- centered activities, ensure attendees enjoy a frictionless and engaging experience from start to finish from your fans.",
      image: image1,
    },
    {
      title: " Selling tickets and payouts",
      para: "Streamline your ticketing with our flexible solutions. From subscriptions to reserved seating, offer a variety of ticket types tailored to your unique needs. Keep track of sales with ease using colour-coded tickets. Adjust ticket offerings in real-time, even as your event unfolds. For private moments, send personalized invites with simple confirmation processes. Also sell add-ons like merch, parking tickets, food and drink for a more efficient fan experience. Put yourself in control and enhance ability to adapt swiftly to optimize your sales strategy at every turn.",
      image: image2,
    },
    {
      title: "Streamlined Management, Smart Logistics",
      para: "Perfect your event's operational flow. Ensure instant digital delivery of tickets and keep your audience engaged with real-time updates or respond promptly to attendee queries. Efficiently track and process returns and refunds, maintain inventory transparency, and get data to monitor the resale market. Utilize customizable templates to save time and capture early interest with pre-sale and early bird offers. Our AI assistant is ready to swiftly enact changes or assist in locating information, making logistics seamless. Turn logistics into a smooth journey, so you can focus on what you do best—creating memories. ",
      image: image3,
    },
    {
      title: "Effortless Promotion, Enhanced Connection",
      para: "Elevate your event's visibility with robust promotional tools. Post engaging video content in highlight reels and stories to captivate potential attendees. Do collaborated posts with venues, artists, and performers or targeted ads for your ideal audience. Even if you're selling tickets elsewhere, use our platform to amplify your reach—effortlessly link out to any ticketing service or social media. Communicate directly with attendees through real-time messaging, providing updates and exclusive promotions. Don’t just announce an event; build the excitement and forge lasting attendee connections.",
      image: image4,
    },
    {
      title: "Advanced IT and Tailored Security",
      para: "Elevate your IT and security measures. Equip yourself with a customizable QR scanner within the platform, adaptable to your unique event requirements, including timed entrances aligned with ticket color codes and more. Integrate seamlessly with our API, enabling white-labeled ticket sales directly on your website, while still leveraging our robust backend for all other processes. Create and track affiliate links effortlessly with our no-code solution, keeping a close eye on their performance. We combine advanced technology with user-friendly customization, ensuring your event is both cutting-edge and secure.",
      image: image5,
    },
    {
      title: "Financial Management",
      para: "Connect multiple accounts for simplified management and execute refunds with precision using our robust system. Gain valuable insights with detailed breakdowns of revenues by time, date, ticket type, and additional purchases. Efficiently track and manage affiliates, customize commission splits, and facilitate direct payments with ease. Utilize AI-driven dynamic pricing to optimize profit margins and establish pricing caps. Generate comprehensive financial reports that offer clarity and guide strategic decision-making. Get quick payouts and choose the accounts you want it to be sent in and divide the payouts.",
      image: image6,
    },
    {
      title: "Make informed decisions",
      para: "Utilize the power of data to maximize your success. Dive deep into analytics with custom reports that offer insights into various demographics such as age, gender, purchasing behaviours and more. Compare event types and timeframes to understand what attracts and engages your audience. Track sales trends, from weekend spikes to overall finances and prepare strategies for future. Our tools help you to measure engagement levels, financial metrics, and more, providing you with the knowledge to enhance every aspect of your event planning and execution.",
      image: image7,
    },
    {
      title: "Other advanced capabilities",
      para: "Explore the unique capabilities to enhance your event management. Implement virtual queues to streamline entry and enhance safety, reducing the potential for overcrowding. Facilitate tip collection directly through the platform, allowing for a smoother financial transaction for the good work of your team. Efficiently manage sponsors, sending tickets and obligations, ensuring that sponsor visibility and attendee engagement are maximized.",
      image: image8,
    },
  ];
  return (
    <div className="Professional-features-container">
      <div className="Professional-features-header">
        <p>
          {" "}
          Design exceptional experiences and cultivate your own thriving
          community, equipped with all the tools and insights needed for
          success.
        </p>
        <h1>How it works?</h1>
      </div>
      <div className="Professional-features-line"></div>
      {ProfessionalFeatures.map((feature, index) => (
        <div key={index} className="Professional-features">
          <div className="Professional-features-arrow">
            <div className="Professional-features-line"></div>
            <img src={featurefirsticon} alt="" />
          </div>
          <div className="Professional-features-text">
            <h1>{feature.title}</h1>
            <p>{feature.para}</p>
          </div>

          <div className="Professional-features-img">
            <img src={feature.image} alt="" />
          </div>
          {ProfessionalFeatures.length === index + 1 && (
            <button
              className="register-button"
              onClick={() => setShowSignup(!showSignup)}
            >
              Register
            </button>
          )}
          {ProfessionalFeatures.length !== index + 1 && (
            <div className="Professional-features-last-line"></div>
          )}
        </div>
      ))}
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default ProfessionalFeatures;
