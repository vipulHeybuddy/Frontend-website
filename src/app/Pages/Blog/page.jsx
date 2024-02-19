"use client"
import "../../../styles/Font.css";
import BlogCard from '@/components/blogComponents/BlogCard'
import React, { useState } from 'react'
import './page.css'

const blogsArray = [
    {
        category: "development",
        id: 1,
        img: '/Images/blog/blogImg1.png'
        
    },
    
    {
        category: "development",
        id: 2,
        img: '/Images/blog/blogImg1.png'

    },
    
    {
        category: "design",
        id: 3,
        img: '/Images/blog/blogImg1.png'

    },

    {
        category: "design",
        id: 4,
        img: '/Images/blog/blogImg1.png'

    },

    {
        category: "development",
        id: 5,
        img: '/Images/blog/blogImg1.png'

    },

    {
        category: "3d",
        id: 6,
        img: '/Images/blog/blogImg3.png'

    },

    {
        category: "3d",
        id: 7,
        img: '/Images/blog/blogImg3.png'
    },

    {
        category: "games",
        id: 8,
        img: '/Images/blog/blogImg2.png'
        
    },

    {
        category: "games",
        id: 9,
        img: '/Images/blog/blogImg2.png'

    },

    {
        category: "games",
        id: 10,
        img: '/Images/blog/blogImg2.png'

    }
]

const page = () => {
    const [category, setCategory] = useState("")

    const toggleCategory =(categ) =>{
        setCategory(categ)
    }
    return (
        <div className='blogsContainer'>

            <div className="readOurBlog">

                <p className='text-[4vw] font-semibold'>Read Our Blog</p>
                <p className='text-[2vw] w-[65vw]'>Blog posts are typically written by HeyBuddy and other contributors. Be ready to be immersed with this Tech World</p>


            </div>
            <img className='read-blog-svg' alt='No-img' src='/read-blog.svg' />

            <div className='blogsWithCategories'>
                <div className='blogCategories '>
                    <p className='text-white font-bold text-[2vw]'>Blog Posts</p>
                    <div className=' flex justify-between  w-[60%] items-center text-white text-[1vw] font-semibold'>
                        <button onClick={()=> toggleCategory("")} className={category === "" ? "active-tab": "tab"}>All</button>
                        <button onClick={()=> toggleCategory("development")} className={category === "development" ? "active-tab": "tab"}>Development</button>
                        <button onClick={()=> toggleCategory("design")} className={category === "design" ? "active-tab": "tab"}>Design</button>
                        <button onClick={()=> toggleCategory("3d")} className={category === "3d" ? "active-tab": "tab"}>3D</button>
                        <button onClick={()=> toggleCategory("games")} className={category === "games" ? "active-tab": "tab"}>Games</button>
                    </div>
                </div>

                <div className='allBlogs'>
                    {
                    category ==="development" ? blogsArray.filter(blog => blog.category ==="development").map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    )):
                    category ==="design" ? blogsArray.filter(blog => blog.category ==="design").map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    )):
                    category ==="games" ? blogsArray.filter(blog => blog.category ==="games").map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    )):
                    category ==="3d" ? blogsArray.filter(blog => blog.category ==="3d").map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    )):
                    category === "" ? blogsArray.map((blog, index) => (
                        <BlogCard key={index} {...blog}/>
                    )): null
                    
                
                }
                
                    
                </div>
            </div>

        </div>
    )
}

export default page