import React from 'react'

const Section5 = () => {

  const List = [
    {
      id: "1",
      serialno:"01",
      heading: "Enhanced Brand Engagement1",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      serialno:"01",
      heading: "Enhanced Brand Engagement2",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      serialno:"01",
      heading: "Enhanced Brand Engagement3",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  
  ];



  return (
    <div>
      <div className='py-8 lg:w-[80%] mx-auto'>

      
      <div className="py-8 lg:w-[90%] text-white mx-auto text-center">
        <h1 className="py-4 font-bold text-2xl lg:text-4xl">
        Outcome
        </h1>
        <p className="text-xl lg:text-2xl">
        Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.
        </p>
      </div>

      <div className='grid justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4'>
      {List.map((section, index) => (
            <div className="px-2">

          <figure class="flex flex-col p-4 lg:p-6 hover:bg-yellow-600 hover:bg-opacity-30 rounded-2xl  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <span className="text-left text-4xl lg:text-6xl font-semibold text-gray-400">{section.serialno}</span>

              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
      </div>
      </div>



      <div className=" h-[442px] bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">

      </div>

    </div>
  )
}

export default Section5