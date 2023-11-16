"use client";
import React, { Component } from "react";
import "./Slider1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
// import Sl1 from "../../public/Images/sl1.png";
// import Sl2 from "../../public/Images/sl2.png";
// import Sl3 from "../../public/Images/sl3.png";

import Image from "next/image";

function Slider1() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [progressWidth, setProgressWidth] = useState(20);

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

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
  };

  return (
    <>
    <div className="lg:w-[80%]  lg:mt-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse0.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T084543Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=ccab1dfd5ada735aa85a35579495be72552dc74b03133d7374713d4c8b4e3d03')] bg-no-repeat bg-auto bg-[center_top_1rem]" id="projects">

    <div className="text-center mx-auto justify-center py-12 ">
            <h1 className="text-2xl lg:text-4xl font-bold text-white ">
              Need to enhance your business online?{" "}
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              We got you covered
            </h1>
          </div>


      {isSmallScreen ? (
        <div className="h-[80vh] px-4 carousel carousel-vertical rounded-box">

          <div className="carousel-item h-full">
           
            <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                // src={Sl1}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=7f78bd6d928f3546969512ffc509e28b406c5f5b98b54e20a416fad9179f9d25"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
           
            <div className="px-6 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Immersive Development
                </h3>
                <p className=" text-base  py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
          <div className="px-6 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Tryon Services
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl object-fill w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
          <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  3D Modelling
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh] object-cover"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
           
            <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          

        </div>
       ) : ( 
         <div className="">
       
          <Slider {...settings}>
            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Immersive Development
                </h3>
                <p className=" text-base  py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
               src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Tryon Services
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"

                alt="Sl1"
                className=" rounded-b-3xl object-fill w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  3D Modelling
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/sl1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093806Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fb0de6c9b57965077954c033a8f1dbcdf7e5e13cbed8403fad3f1d368001d220"
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh] object-cover"
              />
            </div>

          </Slider>
        </div>
       )}

       </div> 
    </>
  );
}

export default Slider1;
