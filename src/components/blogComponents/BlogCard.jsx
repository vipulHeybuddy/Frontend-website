import React from 'react'
import 'src/app/Pages/Blog/page.css'

const BlogCard = ({category, id, img}) => {
  return (
    <div className='blog'>
      <img src={img} alt="" />
      <p className='font-bold'>Top Game Development Companies-Choose the best one</p>
      <p className='text-[.7em]'>Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global gaming community, a higher engagement rate among ot...</p>

      <div className='flex items-center justify-between'>
        <span className='flex items-center gap-2'>

          <img className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
          <p className='text-[.7em]'>By <span className='font-bold'>John Doe</span> in Game Development</p>
        </span>
        <p className='text-[.7em]'>3min</p>
      </div>
    </div>
  )
}

export default BlogCard