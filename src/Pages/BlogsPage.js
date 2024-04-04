import React from "react";
import "./BlogsPage.css";
// import BlogContent from "../components/BlogContent";
import BlogsNav from "../components/BlogsNav";

const BlogsPage = () => {
  return (
    <div>
      <BlogsNav />
      {/* <BlogContent/> */}
      <div className="Blogs">
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
        <div className="Blogs-card">
          Building Engaged Communities: Secrets to Success
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
