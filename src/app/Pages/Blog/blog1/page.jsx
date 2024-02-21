"use client";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import "../../../../styles/Font.css";
import {
  FaChevronRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaX,
  FaXRay,
  FaXTwitter,
} from "react-icons/fa6";
import "./page.css";

function page() {
  const navbarHeight = 70;
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - navbarHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto px-5 lg:px-0 bg-[url('/Images/Ellipse.svg')] bg-no-repeat bg-fixed bg-top">
      {/* intro section */}
      <section className="pt-28 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[80%] mx-auto gap-8 relative">
        {/* main section */}
        <section className="lg:w-[60%] flex flex-col gap-5">
          <div className=" hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
            <span>Blog</span>
            <span>
              <FaChevronRight />
            </span>
            <span>Top Game Development Companies - Choose the Best One</span>
          </div>
          <div className=" flex flex-col gap-14">
            {/* intro image */}
            <div className="rounded-xl relative overflow-hidden border-2 border-[#FF5C00] h-[60vh] xl:h-auto min-h-[60vh]">
              <div className="w-full h-full xl:h-auto">
                <img
                  src="/Images/Blog.png"
                  alt="Image"
                  className="h-full w-full"
                />
              </div>
              <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 backdrop-blur-lg flex flex-col gap-2 md:gap-[21px]">
                <div className="flex items-center py-[5px] px-4 gap-[6px] w-fit bg-[#ff5c001c] rounded-full">
                  <span className="h-4 w-4 rounded-full bg-[#FF5C00]"></span>
                  <span className="text-[#FF5C00] font-bold">Gaming</span>
                </div>
                <h1 className=" text-lg md:text-3xl font-semibold text-white">
                  Top Game Development Companies - Choose the Best One
                </h1>
                <h1 className="text-white text-sm md:text-base">
                  OCT 20 .2 weeks ago
                </h1>
              </div>
            </div>
            {/* verbose information */}
            <section className="flex flex-col gap-[30px] pb-[40px]">
              <div
                id="section1"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-lg font-bold">
                  Exploring Generative AI in Content Creation
                </h1>
                <p>
                  Hello there! As a marketing manager in the SaaS industry, you
                  might be looking for innovative ways to engage your audience.
                  I bet generative AI has crossed your mind as an option for
                  creating content. Well, let me share from my firsthand
                  experience.
                </p>
                <p>
                  Google encourages high-quality blogs regardless of whether
                  they're written by humans or created using artificial
                  intelligence like ChatGPT. Here's what matters: producing
                  original material with expertise and trustworthiness based on
                  Google E-E-A-T principles.
                </p>
                <p>
                  This means focusing more on people-first writing rather than
                  primarily employing AI tools to manipulate search rankings.
                  There comes a time when many experienced professionals want to
                  communicate their insights but get stuck due to limited
                  writing skills – that’s where Generative AI can step in.
                </p>
                <p>
                  So, together, we’re going explore how this technology could
                  help us deliver valuable content without sounding robotic or
                  defaulting into mere regurgitations of existing materials
                  (spoiler alert – common pitfalls!). Hang tight - it’ll be a
                  fun learning journey!
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-lg font-bold">
                  Steering Clear of Common AI Writing Pitfalls
                </h1>
                <p>
                  Jumping headfirst into using AI, like ChatGPT, without a
                  content strategy can lead to some unfortunate results. One
                  common pitfall I've seen is people opting for quantity over
                  quality - they churn out blogs, but each one feels robotic and
                  soulless, reading just like countless others on the internet.
                </p>
                <p>
                  Another fault line lies in creating reproductions rather than
                  delivering unique perspectives that offer value to readers; it
                  often happens if you let an AI tool write your full blog
                  unrestrained! Trust me on this – Ask any experienced marketer
                  or writer about their takeaways from using generative AI
                  tools. They'll all agree that adding a human touch and
                  following specific guidelines are key when implementing these
                  tech pieces.
                </p>
                <p>
                  Remember, our goal here isn’t merely satisfying search engines
                  but, more importantly, knowledge-hungry humans seeking
                  reliable information online. So keep your audience's needs at
                  heart while leveraging technology’s assistance!
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-lg font-bold">
                  Understanding ChatGPT Capabilities - Define Your Style
                </h1>
                <p>
                  Welcome to the intriguing world of ChatGPT! Its ability and
                  potential can truly be mind-boggling. I have learned from
                  experience how capable it is in dealing with diverse content
                  generation tasks, only that its text sounded slightly
                  "unnatural" in accordance with TechTarget. However, fear not –
                  there are ways around this!
                </p>
                <p>
                  One strategic move I've seen work wonders is defining your
                  unique writing style first before handing over the reins to
                  AI; you treat it like a canvas whereupon our vision opens up.
                  If we clearly instruct who we're targeting or what tone
                  resonates more effectively, generative AI tools such as
                  ChatGPT will comply remarkably well.
                </p>
                <p>
                  In framing guidelines, remember to keep audience interests at
                  heart while adopting technology’s benefits for efficient
                  output – trust me on this because neglecting these aspects
                  could backfire by generating unappealing robotic-like reads.
                </p>
                <p>
                  Ultimately, aiming towards reader-focused driven creativity
                  illuminated under authentically humanized narratives holds
                  priority above all else when crafting blogs using
                  auto-generation toolkits!
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-lg font-bold">Understand Your Readers</h1>
                <p>
                  Understanding your readers is vital when producing blog posts.
                  It's not about filling blanks with popular search terms, no
                  matter how much keyword research you do. Real readability goes
                  beyond that! Your content has to 'speak' directly to your
                  target audience.
                </p>
                <p>
                  Building an Ideal Customer Profile (ICP) can help immensely in
                  this respect (Dan Martell). This tool identifies specific
                  firmographics or psychographic drivers behind customer success
                  - a valuable guide for creating targeted outputs catering to
                  arrayed reader types.
                </p>
                <p>
                  Simultaneously, SEO aspects also need attention: identifying
                  suitable keywords & phrases people commonly use enhances reach
                  (SEO.COM reference). Yet remember – human appeal doesn’t mean
                  packing text up finely into presentable semblances bearing
                  little value substance and stuffing it full with only
                  ‘keywords.’
                </p>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-lg font-bold">
                  Understand Your ReaCreating Quality AI-powered Blogs that
                  Stand Outders
                </h1>
                <p>
                  Creating brilliant AI-powered blogs is a fun blending of logic
                  with just the right dose of creativity. From defining your
                  target audience to tuning in ChatGPT's language style, every
                  step counts towards creating content that’s not only
                  SEO-friendly but also enjoyable and valuable for readers.
                </p>
                <p>
                  One tactic I’ve found useful is maintaining originality in
                  message essence, with unique perspectives infusing life beyond
                  words onto pages!
                </p>
                <p>
                  Incorporating trusted references while optimizing blog posts
                  intelligently (rather than keyword stuffing) can significantly
                  aid quality enhancements. Remember, it isn't about writing for
                  Google here, so avoid tunnel vision focusing solely on
                  algorithm-driven success rate, aiming at heart-touching human
                  connections, building loyal reader bases, and sharing
                  knowledge benefiting others!
                </p>
              </div>
            </section>
          </div>
        </section>
        {/* sticky section */}
        <section className=" flex-1 flex flex-col gap-14 pt-12">
          <div className="flex flex-col gap-7">
            <div className="flex text-sm md:text-base lg:hidden gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
              <span>Blog</span>
              <span>
                <FaChevronRight />
              </span>
              <span>Top Game Development Companies - Choose the Best One</span>
            </div>
            {/* profile div */}
            <div className="flex flex-col gap-2 lg:gap-5 p-5 bg-[#ff5c0024] border-2 border-[#FF5C00] rounded-[30px]">
              <div className="flex items-end gap-3">
                <div className="rounded-[20px] overflow-hidden">
                  <img src="/Images/user.png" alt="profile" />
                </div>
                <FaLinkedin color="#FF5C00" className="w-[30px] h-[30px]" />
              </div>
              <h1 className=" md:text-4xl font-semibold text-white">
                John Doe
              </h1>
              <p className="text-sm text-white">
                Founder of SAAS First - the Best AI and Data-Driven Customer
                Engagement Tool
              </p>
            </div>
            {/* community */}
            <div className="bg-[#ff5c0024] border-2 border-[#FF5C00] rounded-[30px] p-5">
              <h1 className=" text-base md:text-xl font-normal text-white">
                Share with your community!
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <div>
                  <FaGithub className=" h-4 md:h-6 w-4 md:w-6 text-white" />
                </div>
                <div>
                  <FaXTwitter className=" h-4 md:h-6 w-4 md:w-6 text-white" />
                </div>
                <div>
                  <FaLinkedin className=" h-4 md:h-6 w-4 md:w-6 text-white" />
                </div>
                <div>
                  <FaInstagram className=" h-4 md:h-6 w-4 md:w-6 text-white" />
                </div>
                <div>
                  <FaFacebook className="h-4 md:h-6 w-4 md:w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex flex-col gap-5 sticky top-20">
            <h1 className="text-base text-white">In this article</h1>
            <div className=" text-white">
              <Scrollspy
                className="flex flex-col gap-[10px]"
                items={[
                  "section1",
                  "section2",
                  "section3",
                  "section4",
                  "section5",
                ]}
                currentClassName=" border-l-4 border-[#FF5C00] text-[#FF5C00]"
                offset={-window.innerHeight * 0.5}
              >
                <h1
                  className={`cursor-pointer pl-2`}
                  onClick={() => handleNavClick("section1")}
                >
                  <a>Exploring Generative AI in Content Creation</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a>Steering Clear of Common AI Writing Pitfalls</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a>Understanding ChatGPT Capabilities - Define Your Style</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a>Understand Your Readers</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a>
                    Understand Your ReaCreating Quality AI-powered Blogs that
                    Stand Outders
                  </a>
                </h1>
              </Scrollspy>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default page;
