import React from "react";

const Grid2 = () => {
  return (
    <div className="bg-[url('../../public/Images/Ellipse5.png')] bg-no-repeat bg-auto bg-[center_top_1rem]">
      <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      >
        {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
      </div>

      <div className="pt-[44px] lg:pt-[44px] ">
        <div className="mx-auto text-center justify-center ">
          <div className="p-4 lg:p-4  h-full ">
            <div className="lg:px-8 lg:pt-16">
              <h1 className="px-4 text-2xl lg:text-4xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-white text-sm lg:w-[60%]  mx-auto text-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus non provident mollitia doloribus, rerum minima.
                Dignissimos nobis nam ea quod facere vel officia veritatis iusto
                delectus maxime. Amet, praesentium nostrum.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-0rem)]"
            aria-hidden="true"
          >
            {/* <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6455c8] to-[#1100ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            /> */}
          </div>

          <div class="p-4 lg:p-2 lg:w-[60%]  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-12 grid-cols-2 md:grid-cols-2">
            
            <figure class="flex flex-col  p-8  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class=" mb-4 lg:py-8 lg:mb-8 dark:text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                 10+
                </h3>
                <p className="text-sm">years of experience</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col p-8  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                  100+
                </h3>
                <p className="text-sm">repeated clients</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                 400+
                </h3>
                <p className="text-sm">projects completed</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                  200+
                </h3>
                <p className="text-sm">happy clients</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
