import React from "react";

import "../../../../styles/Font.css";
import "./page.css";
import BlogContent from "@/components/Blog/BlogContent";
import { Blogs } from "@/components/Blogs";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

function page({ params }) {
    const {id} = params;
    const SelectedBlog = Blogs.filter(blog=>blog.id === parseInt(id));
  return (
    <section>
      <BlogContent blogId={id} SelectedBlog={SelectedBlog[0]} />
    </section>
  );
}

export default page;
