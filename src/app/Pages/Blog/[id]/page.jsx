import React from "react";

import "../../../../styles/Font.css";
import "./page.css";
import BlogContent1 from "@/components/Blog/BlogContent1";
import BlogContent2 from "@/components/Blog/BlogContent2";
import BlogContent3 from "@/components/Blog/BlogContent3";
import BlogContent4 from "@/components/Blog/BlogContent4";
import { Blogs } from "@/components/Blogs";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

function page({ params }) {
  const { id } = params;
  const SelectedBlog = Blogs.filter((blog) => blog.id === parseInt(id));
  const { blogType } = SelectedBlog[0];
  return (
    <section
      className={` mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top ${
        blogType === "Games"
          ? "bg-[url('/Images/EllipseGame.svg')]"
          : blogType === "Development"
          ? "bg-[url('/Images/EllipseDev.svg')]"
          : blogType === "3D"
          ? "bg-[url('/Images/Ellipse3D.svg')]"
          : "bg-[url('/Images/EllipseDesign.svg')]"
      }`}
    >
      {parseInt(id) === 1 && (
        <BlogContent1 blogId={id} SelectedBlog={SelectedBlog[0]} />
      )}
      {parseInt(id) === 2 && (
        <BlogContent2 blogId={id} SelectedBlog={SelectedBlog[0]} />
      )}
      {parseInt(id) === 3 && (
        <BlogContent3 blogId={id} SelectedBlog={SelectedBlog[0]} />
      )}
      {parseInt(id) === 4 && (
        <BlogContent4 blogId={id} SelectedBlog={SelectedBlog[0]} />
      )}

      {/* related blogs */}
      <section className="lg:w-[90%] xl:w-[80%] mx-auto px-5 lg:px-0">
        <h1 className="text-lg font-bold text-white">Related blogs</h1>
        {/* section of the related blogs and this will be added later */}
        <div>related blogs to be added later</div>
      </section>
    </section>
  );
}

export default page;
