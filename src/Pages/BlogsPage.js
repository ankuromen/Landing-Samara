import React from "react";
import { Link } from "react-router-dom";
import "./BlogsPage.css";
// import BlogContent from "../components/BlogContent";

import BlogsNav from "../components/BlogsNav";

const BlogsPage = () => {
  return (
    <div>
      <BlogsNav />
      {/* <BlogContent/> */}
      <div className="Blogs">
        <Link to="/page1">
          <div className="Blogs-card">
            Building Engaged Communities: Secrets to Success
          </div>
        </Link>
        <Link to="/page2">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        </Link>
        <Link to="/page3">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        </Link>
        <Link to="/page4">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        </Link>
        <Link to="/page5">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        </Link>
        <Link to="/page6">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogsPage;
