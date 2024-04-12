import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogsPage.css";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogImage1 from "../Assets/BlogImage1.jpeg";
import BlogImage2 from "../Assets/BlogImage2.jpeg";
import BlogImage3 from "../Assets/BlogImage3.jpeg";
import BlogImage4 from "../Assets/BlogImage4.jpeg";
import BlogImage5 from "../Assets/BlogImage5.jpeg";
import BlogImage6 from "../Assets/BlogImage6.jpeg";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Blogs = [
    {
      title: "Building Engaged Communities: Secrets to Success",
      image: BlogImage1,
      link: "/page1",
    },
    {
      title: "How Technology is Transforming Event Management with Eventiq",
      image: BlogImage2,
      link: "/page2",
    },
    {
      title: "The Ultimate Checklist for Event Organizers with Eventiq",
      image: BlogImage3,
      link: "/page3",
    },
    {
      title: "Social Media and Event Promotion: A Perfect Match",
      image: BlogImage4,
      link: "/page4",
    },
    {
      title: "The Rise of Hybrid Events: Combining the Best of Both Worlds",
      image: BlogImage5,
      link: "/page5",
    },
    {
      title: "Exploring the Future: VR Events and Their Potential",
      image: BlogImage6,
      link: "/page6",
    },
  ];
  return (
    <div>
      {/* <BlogContent/> */}
      <div className="Blogs">
        {Blogs.map((blog) => (
          <div className="Blogs-card">
            <div className="Blogs-card-img">
              <img src={blog.image} alt="" />
            </div>
            <div className="Blogs-card-text">{blog.title}</div>
            <div className="Blogs-link">
              <Link to={blog.link}>
                View Insight{" "}
                <div className="Link-arrow">
                  <FaArrowRightLong size={30} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
