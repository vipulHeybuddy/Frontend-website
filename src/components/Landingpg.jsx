import React from "react";
import Image from "next/image";
import Solar from '../../public/Images/Frame.png'


const Landingpg = () => {
  return (
    <div>
      <div className=" bg-[url('../../public/Images/Ellipse8.png')] bg-no-repeat bg-cover">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            
          </div>
          <div className="mx-auto lg:w-[60%] py-32 sm:pt-48 lg:pt-56">
            <div className="text-center">
              <h1 className="lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl">
                A Metaverse Development Comapny From Future
              </h1>
              <p className="mt-6 text-center mx-auto lg:w-[60%] lg:text-2xl lg:leading-8 text-white ">
                We will grow your business 10X with our exceptionally well
                services
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-3xl bg-blue-600 px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get in Touch <span aria-hidden="true" className="px-2 text-xl ">→</span>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div> */}
        </div>
      </div>
      {/* <div className="mx-auto text-center justify-center pb-16">
      <Image
          width={700} height={700}
            src={Solar}
            alt="Sl1"

            className="mx-auto"
            

          />
      </div> */}
    </div>
  );
};

export default Landingpg;
