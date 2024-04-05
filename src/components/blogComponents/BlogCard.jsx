import React from "react";
import Link from "next/link";
// import 'src/app/Pages/Blog/page.css'

const BlogCard = ({ category, id, name, img, title, summary }) => {
  return (
    <div className="blog">
      <Link href={`/Pages/Blog/${name}`}>
        <img src={img} alt="" className="h-[13rem] w-full rounded-lg" />
        <p className="font-extrabold my-4">{title}</p>
        <p className="md:text-[1em]  text-[1.8vw]">{summary}</p>

        <div className="flex items-center justify-between my-2">
          <span className="flex items-center gap-2">
            {/* <img className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className={`h-4 w-4 rounded-full ${
                category === "Games"
                  ? "bg-[#FF5C00]"
                  : category === "Development"
                  ? "bg-[#26B403]"
                  : category === "3D"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
              {category}
            </p>
          </span>
          <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
            3min
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
