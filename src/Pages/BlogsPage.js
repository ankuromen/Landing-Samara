import React from "react";
import { Link } from "react-router-dom";
import "./BlogsPage.css";
// import BlogContent from "../components/BlogContent";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogsNav from "../components/BlogsNav";

const BlogsPage = () => {
  const Blogs = [
    {
      title: "Building Engaged Communities: Secrets to Success",
      image:
        "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page1",
    },
    {
      title: "How Technology is Transforming Event Management with Eventiq",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page2",
    },
    {
      title: "The Ultimate Checklist for Event Organizers with Eventiq",
      image:
        "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page3",
    },
    {
      title: "Social Media and Event Promotion: A Perfect Match",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page4",
    },
    {
      title: "The Rise of Hybrid Events: Combining the Best of Both Worlds",
      image:
        "https://images.pexels.com/photos/7241416/pexels-photo-7241416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page5",
    },
    {
      title: "Exploring the Future: VR Events and Their Potential",
      image:
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/page6",
    },
  ];
  return (
    <div>
      <BlogsNav />

      {/* <BlogContent/> */}
      <div className="Blogs">
        {Blogs.map((blog) => (
          <div className="Blogs-card">
            <div className="Blogs-card-img">
              <img  src={blog.image} alt="" />
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
      {/* 
        <Swiper pagination={{ clickable: true }} modules={Pagination} >
          <SwiperSlide>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="Blogs-card">
              <Link to="/page2">
                <img
                  className="Blogs-card-img"
                  src="https://images.pexels.com/photos/17719829/pexels-photo-17719829/free-photo-of-two-bicycles-parked-next-to-a-green-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Img"
                />
                <div className="Blogs-card-text">
                  How Technology is Transforming Event Management with Eventiq
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Blogs-card">
              <Link to="/page3">
                <img
                  className="Blogs-card-img"
                  src="https://images.pexels.com/photos/17719829/pexels-photo-17719829/free-photo-of-two-bicycles-parked-next-to-a-green-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Img"
                />
                <div className="Blogs-card-text">
                  The Ultimate Checklist for Event Organizers with Eventiq
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Blogs-card">
              <Link to="/page4">
                <img
                  className="Blogs-card-img"
                  src="https://images.pexels.com/photos/17719829/pexels-photo-17719829/free-photo-of-two-bicycles-parked-next-to-a-green-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Img"
                />
                <div className="Blogs-card-text">
                  Social Media and Event Promotion: A Perfect Match
                </div>
              </Link>{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Blogs-card">
              <Link to="/page5">
                <img
                  className="Blogs-card-img"
                  src="https://images.pexels.com/photos/17719829/pexels-photo-17719829/free-photo-of-two-bicycles-parked-next-to-a-green-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Img"
                />
                <div className="Blogs-card-text">
                  The Rise of Hybrid Events: Combining the Best of Both Worlds
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Blogs-card">
              <Link to="/page6">
                <img
                  className="Blogs-card-img"
                  src="https://images.pexels.com/photos/17719829/pexels-photo-17719829/free-photo-of-two-bicycles-parked-next-to-a-green-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Img"
                />
                <div className="Blogs-card-text">
                  Building Engaged Communities: Secrets to Success
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default BlogsPage;
