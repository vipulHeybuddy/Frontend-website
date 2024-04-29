import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Section1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse1.png')] bg-no-repeat bg-auto bg-[center_top_0rem]   mx-auto">
      <div className="">
        <div className="w-[90%] lg:w-[50%] mx-auto">
          <h1
            style={{ fontSize: "3rem" }}
            className="mx-auto text-center text-white font-extrabold text-4xl pt-56 "
          >
            About Us
          </h1>
          <p className="text-center text-white text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            fugiat minus eligendi? Necessitatibus aliquam provident tempore
            eligendi quas, magni perspiciatis maxime non accusamus eos alias
            hic, dolorem consequatur. Repellendus, expedita.
          </p>
        </div>
        <div className="h-full w-full mt-14">
          {isMobile ? (
            <Image
              loading="lazy"
              width={450}
              height={450}
              className=" w-[90%] mx-auto rounded-lg "
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/main%20imgmob.png"
              alt="Background"
            />
          ) : (
            <Image
              loading="lazy"
              width={450}
              height={450}
              className=" w-[90%] mx-auto rounded-lg "
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/main%20img.png"
              alt="Background"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section1;

//
