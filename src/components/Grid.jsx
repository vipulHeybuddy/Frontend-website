"use client";
import React, { useEffect, useState } from "react";

const Grid = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="" id="whyus">
      {isSmallScreen ? (
        <div>
          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%] bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse6.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T084707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=1805d0ea6834e1048733d2405ea451aa95721b56c2e1638c0b0400754674f861')] bg-no-repeat bg-cover  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure class="lg:col-span-2 lg:row-span-2 flex flex-col p-2 lg:p-16 border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="lg:text-6xl lg:pt-32 font-semibold text-gray-900 dark:text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="   dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p className="text-left">
                  Hey Buddy excels in IT services, specializing in cutting-edge
                  technologies like AR, VR, Metaverse, Game Development, and App
                  Development.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Immersive
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Solutions
                </p>
                <p className="text-left">
                  Hey Buddy stands out by delivering seamless and immersive
                  experiences. They specialize in creating captivating VR games,
                  interactive.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Futuristic
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      ) : (
        <div>

          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%] bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse6.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T084707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=1805d0ea6834e1048733d2405ea451aa95721b56c2e1638c0b0400754674f861')] bg-no-repeat bg-cover  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="   dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p className="text-left">
                  Hey Buddy excels in IT services, specializing in cutting-edge
                  technologies like AR, VR, Metaverse, Game Development, and App
                  Development.
                </p>
              </blockquote>
            </figure>

            <figure class="lg:col-span-2 lg:row-span-2 flex flex-col p-2 lg:p-16 border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="lg:text-6xl lg:pt-32 font-semibold text-gray-900 dark:text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Solutions
                </p>
                <p className="text-left">
                  Hey Buddy stands out by delivering seamless and immersive
                  experiences. They specialize in creating captivating VR games,
                  interactive.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Immersive
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Futuristic
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;
