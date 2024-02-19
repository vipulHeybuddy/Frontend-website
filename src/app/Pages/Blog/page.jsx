import "../../../styles/Font.css";
import BlogCard from '@/components/blogComponents/BlogCard'
import React from 'react'
import './page.css'

const blogsArray = [
    {
        category: "development",
        id: 1,
        img: '/Images/blog/blogImg2.png'
        
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
        img: '/Images/blog/blogImg2.png'

    },

    {
        category: "development",
        id: 5,
        img: '/Images/blog/blogImg2.png'

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
    return (
        <div className='blogsContainer'>

            <div className="readOurBlog">

                <p className='text-[4vw] font-semibold'>Read Our Blog</p>
                <p className='text-[1.3vw] w-[37.6vw]'>Blog posts are typically written by HeyBuddy and other contributors.Be ready to be immersed with this Tech World</p>


            </div>
            <img className='read-blog-svg' alt='No-img' src='/read-blog.svg' />

            <div className='blogsWithCategories'>
                <div className='blogCategories '>
                    <p className='text-white font-bold text-[2vw]'>Blog Posts</p>
                    <div className=' flex justify-between  w-[45%] items-center text-white text-[1vw] font-semibold'>
                        <button className='text-blue-400'>All</button>
                        <button>Development</button>
                        <button>Design</button>
                        <button>3D</button>
                        <button>Games</button>
                    </div>
                </div>

                <div className='allBlogs'>
                    {blogsArray.map((blog, index) => (
                        <BlogCard key={index} {...blog}/>
                    ) )}
                
                    
                </div>
            </div>

        </div>
    )
}

export default page