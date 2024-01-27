import React from "react";

const Section2 = () => {
  return (
    <div className="p-8 text-white ">
      <div className="grid grid-cols-2 md:grid-cols-2">
        <div className="px-4">
          <h1 className="font-bold text-2xl lg:text-4xl px-6 py-6">
            About Tencent
          </h1>
          <p className="text-gray-400 px-6">
            Lorem ipsum dolor sit amet consectetur. Et risus orci quam odio.
            Convallis diam etiam risus pellentesque feugiat commodo arcu nunc.
            Morbi blandit volutpat mi eu sagittis ultrices in est mi. Aliquam
            lorem dolor sed amet condimentum diam odio viverra ullamcorper. Amet
            nibh.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 py-8 px-12 gap-x-6 gap-y-6">
            <div className="">
              <h1 className="uppercase text-gray-400">Industry</h1>
              <p className="font-bold">Gaming</p>
            </div>

            <div className="">
              <h1 className="uppercase text-gray-400">Services</h1>
              <p className="font-bold">Design, Development and Deployment</p>
            </div>

            <div className="">
              <h1 className="uppercase text-gray-400">Business Type</h1>
              <p className="font-bold">Enterprise</p>
            </div>

            <div className="">
              <h1 className="uppercase text-gray-400">Build your idea</h1>
              <p className="font-bold text-[#3F8AE2]">Consult With Expert </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
