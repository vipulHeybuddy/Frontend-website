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
    img: "https://s3-alpha-sig.figma.com/img/bd77/1937/efb5e2c99e80153e295ba038aad0ee9a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZ8~KVwbLsG-SLfmifsvYrOo6LKhHGX55jok5K4bEAGIDDXCSmIEF~x0pH8-tX8MTP1~mxYf90VWz0hFm02lDCXr7A8cVxTaAOdGL7cw6gnmQSpIWtuVi5sF0t~bFlvNhp5WsOgP4iPyuDQLAwvDzzXYlPeyokoJoGly~WIT5O6Pe4v2LWiKgNQlePm6PMFaXmTDGIuBkLbmfF4rpepEDZ4JFQAb3G-MWVCvdhw0K7rj3HbvDCKwlzZV5q6-LuD6sfd3eAxQRky1hwptecMS-LDA9mJyOjCo~cC~aMhq1b-ZVFMhZMfjpKqQqelSgQjrD4zs886Lk1Nxs0hSXw3ZYg__",
    title: "Top Game Development Companies - Choose the Best One",
    summary:
      "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community, a higher engagement rate among ot...",
  },

  {
    category: "Development",
    id: 2,
    name: "blog2",
    img: "https://s3-alpha-sig.figma.com/img/7ecd/aed3/939ab6a459edf1b1dbce99687a3eefa0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoY8pzOJSJOMq5ExIMHtykgnAN1NuVEGt12IDKb5WdMQvESms-ae24D0oJP5og77UvdEvFbEiArWQpy0t9~rqGEKj5Ym8Fzed3ZrCK5Xr1sVw0JGY37BzLOYL0MEmRMGNw7iP485KhcPxckxENajgYx30qTRpHRVxwCmTMce7LlzF1esY47py-eEM20ZtpcDto0pE7SyDuSEpakmrtBy7JP~OYsfBFGjbpuZrgRNvuZ-eFWCtbBZw4B~UhqbhFm4er-IlhBX~sjV8fmxjJqfup03~Kc0z46kz0mghdZbU4nvYDTs8yofV1yydKrOSPxn3aaCzihLo3DwL00TDVukQA__",
    title: "Why should I invest in game app development? Complete Guide",
    summary:
      " The answer to the above question is pretty straightforward the Games market is booming and you should not miss this opportunity. It is growing in every dimension, geographically, technologicall...",
  },

  {
    category: "3D",
    id: 3,
    name: "blog3",
    img: "https://s3-alpha-sig.figma.com/img/f373/32ef/39d15fba4c38417e833c8483481a5103?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dw0Ph0JQ2IKEA0TzQ28RpcOM3~5Q4Bj0pgniJtoBDKbDX3Hkp4WDhjIvU7Sa2J1Z8rGLewdstbSq13lHbUz8A8AoFoR0nNj4abmFs5tCY~oV8PXcTb4psPAlHlbW~-9d4E0pj6tIFBSuaD1klMhAwvdQeZ6D1uB3mQGyIhMzf5pCj-0FNoONf3Pb7Axb19HilQs04C7iZ2gMoYn-QMK7YQZpjWhcOih-mL9mPxn8Gw7l-LZwH2AIlTi1yUJkI1-MT3U~OLXHRkoGPDHWavPSiE1O2FiLTzZq8YtCDBZjqWeu3FkXsLhTQJ5lOvscjtfbFde2k7Q29sO42igjPvhkuQ__",
    title: "AI in Games: Refining the Way Games Developed & Play",
    summary:
      "AI in Games is no longer a new phenomenon. It's trending, extensively adapted, and rapidly evolving. Just like Artificial Intelligence (AI) has disrupted all major industries like Healthcare, Hospitality, Banking...",
  },

  {
    category: "Design",
    id: 4,
    name: "blog4",
    img: "https://s3-alpha-sig.figma.com/img/230f/d45d/9be5dd0d735331c8467ed92adcaaa6a0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdNs-duObWO5bUjRBZMHBqKj8klt3n-OpZ2P2BDn3aENDtoKr7snrVDd4cy4BSvyxn5z3FDetgYQQgA7Xn-tBYosjVutT-f7G0B9mC7XNDKzBIlc8GY8XLyF5rYgl58xEki~GbhfdS1Ip9jfNO4cfMfw7hCsnH8o~QW5xWUC51xL9d6GAQlC2lIBKICUXeVf~6P~cQXbPVmv7ZHABxGUT4QJzNsW1QUrJbEkh1~MnKXxhb-R58UMvm~CgQX5m0diXvWoDUg~DNv6V3rL1gYnbHYqlCCwqcORcRFMDQ-l8MNwffgcQsFomY8T1fi7D68sr7mXfLHbZBI0hGhjy00XuQ__",
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
