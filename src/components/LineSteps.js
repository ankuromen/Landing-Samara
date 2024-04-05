import React from "react";
import "./LineSteps.css";

const LineSteps = () => {
  const professionalFeatures = [
    {
      title: "Create Your Profile",
      para: "Set up a professional profile to showcase your brand or entity, helping potential attendees and partners understand your mission and offerings.",
    },
    {
      title: "Establish Your Community",
      para: "Build a dedicated space for your followers and supporters where you can engage directly, share updates, and foster a loyal community around your events.",
    },
    {
      title: "Organize and Sell Tickets for Events",
      para: "Use intuitive tools to create events, set up ticketing, and manage sales, providing a seamless experience for both you and your attendees.",
    },
    {
      title: "Manage Your Events",
      para: "Keep track of event logistics, attendee information, and day-to-day management tasks with comprehensive event organization features.",
    },
    {
      title: "Promote Your Events / Find Affiliates",
      para: "Market your events effectively through integrated promotional tools and connect with affiliates to extend your reach and boost ticket sales.",
    },

    {
      title: "Forge Partnerships and Sponsorships",
      para: "Develop valuable relationships with partners and sponsors to enhance your event's profile, financial stability, and market presence.",
    },
    {
      title: "Oversee Finances",
      para: "Control your event's financial health with detailed tracking of revenue, expenditures, and financial reporting to make informed decisions.",
    },
    {
      title: "Gain Insights with Analytics",
      para: "Access advanced analytics to understand attendee behavior, event performance, and market trends, helping you tailor future events for success.",
    },
    {
      title: "Enhance Engagement and Connectivity",
      para: "Strengthen relationships with your audience and collaborators through interactive tools, ensuring ongoing engagement and building a robust network.",
    },
    {
      title: "Continual Improvement and Growth",
      para: "Leverage data-driven insights and community feedback to refine your offerings, fostering an environment of continuous improvement and sustainable growth.",
    },
  ];
  return (
    <div>
      <ul className="timeline">
        <li className="start">
          <h3>{professionalFeatures[0].title}</h3>
          <p>{professionalFeatures[0].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">two weeks later</div>
          <h3>{professionalFeatures[1].title}</h3>
          <p>{professionalFeatures[1].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">one week later</div>
          <h3>{professionalFeatures[2].title}</h3>
          <p>{professionalFeatures[2].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="time">one week later</div>
          <h3>{professionalFeatures[3].title}</h3>
          <p>{professionalFeatures[3].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">two weeks later</div>
          <h3>{professionalFeatures[4].title}</h3>
          <p>{professionalFeatures[4].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">one week later</div>
          <h3>{professionalFeatures[5].title}</h3>
          <p>{professionalFeatures[5].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">one week later</div>
          <h3>{professionalFeatures[6].title}</h3>
          <p>{professionalFeatures[6].para}</p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">two weeks later</div>
          <h3>{professionalFeatures[7].title}</h3>
          <p>{professionalFeatures[7].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">one week later</div>
          <h3>{professionalFeatures[8].title}</h3>
          <p>{professionalFeatures[8].para}</p>
        </li>
        <li className="right">
          <div className="bullet"></div>
        </li>
        <li className="center">
          <div className="time">one week later</div>
          <h3>{professionalFeatures[9].title}</h3>
          <p>{professionalFeatures[9].para}</p>
        </li>
      </ul>
    </div>
  );
};

export default LineSteps;
