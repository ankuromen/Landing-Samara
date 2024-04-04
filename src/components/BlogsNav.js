import React from "react";
import "./BlogsNav.css";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const BlogsNav = () => {
  return (
    <div>
      <div className="Blogs-nav">
        <ul>
          <NavLink>Latest Articles</NavLink>
          <NavLink>Customer Service</NavLink>
          <NavLink>Growth & Culture</NavLink>
          <NavLink>Inside Help Scout</NavLink>
          <NavLink>Support Toolkit</NavLink>
        </ul>
        <div>
          <CiSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default BlogsNav;
