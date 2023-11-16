"use client";
import React from "react";
import { motion } from "framer-motion";

const Grid2 = () => {

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };


  return (
    <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse5.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T084910Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=e5880737a0cf853ac7272f1284aac4963d549b4102553515cb13bb3fe96c088a')] bg-no-repeat bg-auto bg-[center_top_1rem]">
      {/* <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      >
        
      </div> */}

      <div className="pt-[44px] lg:pt-[44px] "  id = "aboutus">
        <div className="mx-auto text-center justify-center ">
          <div className="p-4 lg:p-4  h-full ">
            <div className="lg:px-8 lg:pt-16">
              <motion.h1 className="px-4 text-2xl lg:text-4xl font-bold text-white mb-6" {...textAnimation1}>
                About Us
              </motion.h1>
              <motion.p className="text-white text-sm lg:w-[60%]  mx-auto text-center justify-center" {...textAnimation1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus non provident mollitia doloribus, rerum minima.
                Dignissimos nobis nam ea quod facere vel officia veritatis iusto
                delectus maxime. Amet, praesentium nostrum.
              </motion.p>
            </div>
          </div>
        </div>
        <div>
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-0rem)]"
            aria-hidden="true"
          >
           
          </div> */}

          <motion.div class="p-4 lg:p-2 lg:w-[60%]  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-12 grid-cols-2 md:grid-cols-2" {...textAnimation1}>
            
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
