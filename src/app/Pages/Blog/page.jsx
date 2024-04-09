"use client";
import "../../../styles/Font.css";
import BlogCard from "@/components/blogComponents/BlogCard";
import React, { useState } from "react";
import "./page.css";

const blogsArray = [
  {
    category: "Games",
    id: 1,
    name: "blog1",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob1.png",
    title: "Top Game Development Companies - Choose the Best One",
    summary:
      "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  },

  {
    category: "Development",
    id: 2,
    name: "blog2",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob2.png",
    title: "Why should I invest in game app development? Complete Guide",
    summary:
      " The answer to the above question is pretty straightforward the Games market is booming and you should not miss this opportunity. It is growing in every dimension, geographically, technologicall...",
  },

  {
    category: "3D",
    id: 3,
    name: "blog3",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob3.png",
    title: "AI in Games: Refining the Way Games Developed & Play",
    summary:
      "AI in Games is no longer a new phenomenon. It's trending, extensively adapted, and rapidly evolving. Just like Artificial Intelligence (AI) has disrupted all major industries like Healthcare, Hospitality, Banking...",
  },

  {
    category: "Design",
    id: 4,
    name: "blog4",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Blogmob/blogmob4.png",
    title: "What is CGI: Definition, Development & Common Examples",
    summary:
      "Ever wondered what made the Avatar movie a hit, or why there is such a huge and crazy fan community for the Harry Potter franchise? Well, that’s pretty straightforward, this is because they take us in...",
  },

  // {
  //   category: "Development",
  //   id: 5,
  //   img: "/Images/blog/blogImg1.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },

  // {
  //   category: "3D",
  //   id: 6,
  //   img: "/Images/blog/blogImg3.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },

  // {
  //   category: "3D",
  //   id: 7,
  //   img: "/Images/blog/blogImg3.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },

  // {
  //   category: "Games",
  //   id: 8,
  //   img: "/Images/blog/blogImg2.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },

  // {
  //   category: "Games",
  //   id: 9,
  //   img: "/Images/blog/blogImg2.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },

  // {
  //   category: "Games",
  //   id: 10,
  //   img: "/Images/blog/blogImg2.png",
  //   title: "Top Game Development Companies - Choose the Best One",
  //   summary:
  //     "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  // },
];

const page = () => {
  const [category, setCategory] = useState("");

  const toggleCategory = (categ) => {
    setCategory(categ);
  };
  return (
    <div className="blogsContainer">
      <div className="readOurBlog">
        <p className="text-[4vw] font-semibold">Read Our Blog</p>
        <p className="text-[2vw] w-[65vw]">
          Blog posts are typically written by HeyBuddy and other contributors.
          Be ready to be immersed with this Tech World
        </p>
      </div>
      <img className="read-blog-svg" alt="No-img" src="/read-blog.svg" />

      <div className="blogsWithCategories">
        <div className="blogCategories ">
          <p className="text-white font-bold md:text-[2vw]  ">Blog Posts</p>
          <div className=" flex justify-between  w-[60%] items-center text-white md:text-[1em] font-semibold">
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "tab active-tab" : "tab"}
            >
              All
            </button>
            <button
              onClick={() => toggleCategory("Development")}
              className={category === "Development" ? "tab active-tab" : "tab"}
            >
              Development
            </button>
            <button
              onClick={() => toggleCategory("Design")}
              className={category === "Design" ? "tab active-tab" : "tab"}
            >
              Design
            </button>
            <button
              onClick={() => toggleCategory("3D")}
              className={category === "3D" ? "tab active-tab" : "tab"}
            >
              3D
            </button>
            <button
              onClick={() => toggleCategory("Games")}
              className={category === "Games" ? "tab active-tab" : "tab"}
            >
              Games
            </button>
          </div>
        </div>

        <div className="allBlogs">
          {category === "Development"
            ? blogsArray
                .filter((blog) => blog.category === "Development")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "Design"
            ? blogsArray
                .filter((blog) => blog.category === "Design")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "Games"
            ? blogsArray
                .filter((blog) => blog.category === "Games")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === "3D"
            ? blogsArray
                .filter((blog) => blog.category === "3D")
                .map((blog, index) => <BlogCard key={index} {...blog} />)
            : category === ""
            ? blogsArray.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default page;
