"use client";
import React from "react";
import Scrollspy from "react-scrollspy";
import "../../styles/Font.css";
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

function BlogContent({ SelectedBlog }) {
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

  // getting the attributes of the blog
  const {
    blogType,
    title,
    author,
    authorRole,
    authorImage,
    blogImage,
    pubDate,
  } = SelectedBlog;

  return (
    <div className={`mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top pt-28`}>
      <div className=" hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white ml-[4.1rem]">
        <span>Blog</span>
        <span>
          <FaChevronRight />
        </span>
        <span>{title}</span>
      </div>
      <div
        className={`rounded-xl relative overflow-hidden border-2 h-[72vh] w-[90%] mx-auto mt-4 ${
          blogType === "Games"
            ? "border-[#FF5C00]"
            : blogType === "Development"
            ? "border-[#26B403]"
            : blogType === "3D"
            ? "border-[#FF001F]"
            : "border-[#00FFE0]"
        }`}
      >
        <div className="w-full h-full ">
          <img src={blogImage} alt="Image" className="h-full w-full" />
        </div>
        <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 backdrop-blur-sm flex flex-col gap-2 md:gap-[21px]">
          <div
            className={`flex items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${
              blogType === "Games"
                ? "bg-[#ff5c0024]"
                : blogType === "Development"
                ? "bg-[#26b40324]"
                : blogType === "3D"
                ? "bg-[#ff001f24]"
                : "bg-[#00ffe024]"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full ${
                blogType === "Games"
                  ? "bg-[#FF5C00]"
                  : blogType === "Development"
                  ? "bg-[#26B403]"
                  : blogType === "3D"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <span
              className={`text-[#FF5C00] font-bold ${
                blogType === "Games"
                  ? "text-[#FF5C00]"
                  : blogType === "Development"
                  ? "text-[#26B403]"
                  : blogType === "3D"
                  ? "text-[#FF001F]"
                  : "text-[#00FFE0]"
              }`}
            >
              {blogType}
            </span>
          </div>
          <h1 className=" text-lg md:text-3xl font-semibold text-white">
            {title}
          </h1>
          <h1 className="text-white text-sm md:text-base">{pubDate}</h1>
        </div>
      </div>
      {/* intro section */}
      <section className="pt-10 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[90%] mx-auto gap-10 relative">
        {/* main section */}
        <section className="lg:w-[60%] flex flex-col gap-5">
        <div className=" flex flex-col gap-14">
            {/* intro image */}
            {/* verbose information */}
            <section className="flex flex-col gap-[30px] pb-[40px]">
              <div
                id="section1"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-2xl font-extrabold">
                  Why should I invest in game app development? Complete Guide
                </h1>
                <p className="text-sm font-thin">
                  The answer to the above question is pretty straightforward --
                  the Games market is booming and you should not miss this
                  opportunity.
                </p>
                <p className="text-sm font-thin">
                  It is growing in every dimension, geographically,
                  technologically, market size, and many more.
                </p>
                <p className="text-sm font-thin">
                  To state a fact, the global video game market is expected to
                  reach a staggering $682 billion by 2030, representing a CAGR
                  of 13.6% from 2023.
                </p>
                <p className="text-sm font-thin">The reasons are many such as:</p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">increased smartphone penetration,</li>
                  <li className="text-sm font-thin">availability of high-bandwidth networks,</li>
                  <li className="text-sm font-thin">
                    the advent of novel, intelligent, and immersive Games
                    experiences with AI, AR, and VR games
                  </li>
                  <li className="text-sm font-thin">
                    the emergence of new markets in reasons such as Southeast
                    Asia, and Latin America with explosive growth
                  </li>
                </ul>
                <p className="text-sm font-thin">
                  So, if you want to invest in Games, your time starts right
                  now with this blog. Read this complete guide.
                </p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-2xl font-extrabold">
                  What is Game development?
                </h1>

                <p className="text-sm font-thin">
                  Game development is the process of creating video games. It
                  includes every aspect from concept art and programming to
                  story writing and sound design.
                </p>
                <p className="text-sm font-thin">
                  Hence, you need to either have a team or reach out to a team
                  possessing multiple talents such as programmers, artists,
                  designers, writers, testers, project managers, marketing
                  specialists, etc.
                </p>
                <p className="text-sm font-thin">
                  The process of game development can be broken down into three
                  parts:
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">Pre-production</li>
                  <li className="text-sm font-thin">Production</li>
                  <li className="text-sm font-thin">Post-production</li>
                </ul>
                <p className="text-sm font-thin">Let’s go through them.</p>

                <p className="font-semibold">
                  Game Development Process: A Concise Overview
                </p>
                <p className="text-sm font-thin">
                  The three stages of game development can be further broken
                  down into multiple processes. Let’s dig deeper into them,
                  starting with pre-production
                </p>
                <p className="font-semibold">
                  Pre-Production: You need to answer a lot of questions
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">Ideation</li>
                  <li className="text-sm font-thin">Planning</li>
                  <li className="text-sm font-thin">Designing</li>
                </ul>
                <p className="text-sm font-thin">
                  Ideation is the brainstorming and conceptualizing of game
                  ideas. Here, you find the answer to the following question:
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">
                    What game concept are we exploring: First-Person Shooter
                    (FPS) or Role-Playing Game (RPG), simulation, or sports?
                  </li>
                  <li className="text-sm font-thin">What are the potential themes, genres, or narratives?</li>
                  <li className="text-sm font-thin">
                    How can we create a unique and engaging Games experience?
                  </li>
                  <li className="text-sm font-thin">What target audience are we aiming for?</li>
                  <li className="text-sm font-thin">
                    Are there any innovative features or mechanics we want to
                    incorporate?
                  </li>
                </ul>
                <p className="text-sm font-thin">
                  Planning is where we outline the project scope, define goals,
                  and set timelines. Here, we seek the answer to the following
                  question:
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">
                    What is the scope of the project i.e. the specific features,
                    functionalities, and deliverables in the development
                    process?
                  </li>
                  <li className="text-sm font-thin">
                    What are the specific goals and objectives of the game? Will
                    it be an immersive open-world experience, a multiplayer
                    dynamics, or will it achieve high player retention?
                  </li>
                  <li className="text-sm font-thin">
                    What resources (human, financial, technological) are
                    required?
                  </li>
                  <li className="text-sm font-thin">What is the estimated timeline for development?</li>
                  <li className="text-sm font-thin">How will the project be organized and managed?</li>
                </ul>
                <p className="text-sm font-thin">
                  Designing part of the process aims to create initial game
                  concepts, mechanics, and visual elements. It seeks answers to
                  the following
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">What are the core game mechanics and rules?</li>
                  <li className="text-sm font-thin">How will the game flow and progress?</li>
                  <li className="text-sm font-thin">What visual style and aesthetic are we aiming for?</li>
                  <li className="text-sm font-thin">
                    Are there specific technical requirements for development?
                  </li>
                  <li className="text-sm font-thin">
                    What will be the overall user experience and interface
                    design?
                  </li>
                </ul>

                <p className="font-semibold">
                  Production: This is where the real action takes place.
                </p>
                <p className="text-sm font-thin">The production phase consists of two steps</p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">Development</li>
                  <li className="text-sm font-thin">Implementation</li>
                </ul>
                <p className="font-semibold">
                  Development is where the active coding of the game takes
                  place, bringing it to life.
                </p>
                <p className="text-sm font-thin">
                  On the other hand, in the implementation phase assets,
                  features, and functionality are integrated into the game,
                  making it ready for the launch.
                </p>

                <p className="font-semibold">Post-Production:</p>
                <p className="text-sm font-thin">This again consists of three steps:</p>
                <ul className="list-disc ml-6">
                  <li className="text-sm font-thin">Testing</li>
                  <li className="text-sm font-thin">Polishing</li>
                  <li className="text-sm font-thin">Release</li>
                </ul>
                <p className="text-sm font-thin">
                  In the testing phase, the game is rigorously tested for
                  quality assurance and to identify and fix bugs.
                </p>
                <p className="text-sm font-thin">
                  In the polishing phase, game developers fine-tune the
                  gameplay, graphics, and overall user experience so that the
                  final product meets the highest quality standards as well as
                  the expectations of the Games audience, delivering an
                  exceptional player experience.
                </p>
                <p className="text-sm font-thin">
                  And finally, in the release phase, the game is launched on the
                  designated platform for the targetted audience.
                </p>
                <p className="text-sm font-thin">Now, why you should invest?</p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-2xl font-extrabold">
                  Why game development is the best investment?
                </h1>
                <p className="text-sm font-thin">
                  There is no shortage of reason as to why game development is
                  one of the best investment avenues. It has great growth
                  potential, multiple revenue options, and global reach.
                  However, the best return is not in terms of money but in the
                  form of humans.
                </p>
                <p className="text-sm font-thin">
                  Yes, the community of gamers you build, who will stay true to
                  you in the toughest of times. All you need to do is work
                  wholeheartedly to bring the best Games experience to them. In
                  this section, we will discuss the advantages of investing in
                  game development. Starting with, of course, community
                  building.
                </p>

                <p className="font-semibold">Community Building:</p>
                <p className="text-sm font-thin">
                  When you offer a game that takes the player into a new fantasy
                  world, you create a dedicated community of players. They just
                  can't get enough of it and want to be part of this amazing
                  world.
                </p>
                <p className="text-sm font-thin">
                  In this world, they actively engage with the game as well as
                  with each other. This generates a sense of belonging that
                  keeps players invested in the game and its associated
                  products.
                </p>
                <p className="text-sm font-thin">
                  The result is a strong and thriving community that rapidly
                  grows through word-of-mouth marketing and user-generated
                  content.
                </p>
                <p className="font-semibold">Lucrative Industry Growth:</p>
                <p className="text-sm font-thin">
                  We already shared a stat at the beginning of this blog on the
                  phenomenal growth that the Games industry will witness --
                  $583.69 billion by 2030.
                </p>
                <p className="text-sm font-thin">
                  In fact, the game development industry has been consistently
                  growing ever since its inception, thanks again to the loyal
                  community that sticks for a longer term.
                </p>
                <p className="text-sm font-thin">
                  The Games industry has witnessed a significant increase in
                  revenue year over year, driven by both community and the
                  increasing global market for video games across various
                  platforms.
                </p>
                <p className="text-sm font-thin">Diverse Monetization Models:</p>
                <p className="text-sm font-thin">
                  Another amazing reason to invest in the game development
                  endeavor is that it brings unlimited possibilities for revenue
                  generation.
                </p>
                <p className="text-sm font-thin">
                  Along with sales of game copies, there are in-app purchases,
                  certain microtransactions like virtual currency, character
                  skins, weapon upgrades
                </p>
                <p className="text-sm font-thin">And much more.</p>
                <p className="text-sm font-thin">
                  This diversity allows for a flexible as well as stable
                  monetization model tailored to the target audience as well as
                  your business. Thus, you not only get more avenues of
                  monetisation but also higher chances of conversion.
                </p>
                <p className="font-semibold">Global Market Reach</p>
                <p className="text-sm font-thin">
                  Games have a universal language anyone, anywhere can be part
                  of the Games community. This makes the industry more
                  accessible and more appealing to diverse audiences worldwide.
                </p>
                <p className="text-sm font-thin">
                  Games reach a global audience by transcending geographical
                  boundaries. This broad market reach provides businesses like
                  you with the opportunity to tap into a vast and diverse
                  consumer base.
                </p>
                <p className="font-semibold">Engagement and Retention</p>
                <p className="text-sm font-thin">
                  Games have this unique ability to captivate their users and
                  hold their attention for extended periods. This fosters brand
                  loyalty and user retention just as we discussed above.
                </p>
                <p className="text-sm font-thin">
                  A perfect blend of great story and amazing gameplay will pull
                  the players into its world. Here, everything is possible for
                  players and they can live their fantasies to the fullest.
                </p>
                <p className="text-sm font-thin">
                  This great relationship between gamers and the game can be
                  leveraged to offer more to their gamers. This will augment
                  their bond and open additional revenue streams through ongoing
                  updates, expansions, and downloadable content.
                </p>
                <p className="font-semibold">
                  Innovative Technological Advancements
                </p>
                <p className="text-sm font-thin">
                  We are in a time where multiple transformative technologies
                  like AI, AR, and VR have entered the human experiential
                  journey. These technologies have opened multiple possibilities
                  that otherwise could never have been imagined.
                </p>
                <p className="text-sm font-thin">
                  For example, on the one hand, AI has made Games more adapted
                  and personalized to individual gamer preferences, and VR and
                  AR have merged the realities of the digital and real world.
                </p>
                <p className="text-sm font-thin">
                  These constant advancements have brought improved graphics
                  capabilities and of course the enhanced Games experience.
                </p>
                <p className="text-sm font-thin">
                  So, while investing in the games is the right idea, investing
                  in them now is the best one. Companies investing in game
                  development today will stay at the forefront of technological
                  trends and reap the first-mover benefit.
                </p>
                <p className="font-semibold">Brand Exposure and Recognition</p>
                <p className="text-sm font-thin">
                  Last but surely not least, when you gift your audience with a
                  game that challenges them through innovation and captivates
                  them with dynamic and thrilling experiences, you create
                  cultural phenomena.
                </p>
                <p className="text-sm font-thin">
                  This bestows your company with extensive brand exposure and
                  recognition, enhancing its overall brand image and serving as
                  a powerful marketing tool.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold ">Conclusion</h1>
                <p className="text-sm font-thin">
                  Game development is all about passion, to reach the deepest
                  parts of your Games audience's brain, you should really think
                  like a gamer. This is something you either learn or higher
                  Games experts for the same.
                </p>
                <p className="text-sm font-thin">
                  Game development is a great investment avenue. It helps you
                  build community in a way that is hardly possible with any
                  other investment avenue. Further, it gives you opportunities
                  like global reach, novel monetization instances, the
                  capability to tap into the latest technological advancements
                  such as AI, AR, and VR, and lastly, it helps you build a
                  strong and flourishing brand.
                </p>
                <p className="text-sm font-thin">
                  Hence, to get you started we provided this detailed guide for
                  those who want to enter into the fantasyland.
                </p>
                <p className="text-sm font-thin">
                  This is a complete package of information. We started right
                  from scratch as to what is game development before hoping for
                  a detailed discussion on the game development process.
                </p>
                <p className="text-sm font-thin">
                  And lastly, we discussed why it is the right choice for
                  investment and why the best time is now.
                </p>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-2xl font-extrabold">FAQs</h1>
                <p className="font-semibold">
                  What are the stages of game development?
                </p>
                <p className="text-sm font-thin">
                  The stages of game development are planning, pre-production,
                  production, testing, post-production, launch, and post-launch
                  support and maintenance.
                </p>
                <p className="font-semibold">
                  "What is the best game-developing company?
                </p>
                <p className="text-sm font-thin">
                  Hey, Buddy is a trusted game development partner with a range
                  of Games titles in its portfolio.
                </p>
                <p className="font-semibold">
                  Which is the No 1 Games company in India?
                </p>
                <p className="text-sm font-thin">
                  Headquartered in Delhi NCR, Hey Buddy is one of the best game
                  development companies in India.
                </p>
                <p className="font-semibold">
                  What are game development services?
                </p>
                <p className="text-sm font-thin">
                  Games services range from full-cycle game development to
                  revamping existing Games projects for better results, as well
                  as game designing and development.
                </p>
              </div>
            </section>
          </div>

          {/* bottom community section */}
          <div>
            <div
              className={` border-2  rounded-[30px] flex items-center justify-between py-[40px] px-5 ${
                blogType === "Games"
                  ? "border-[#FF5C00] bg-[#ff5c0024]"
                  : blogType === "Development"
                  ? "border-[#26B403] bg-[#26b40324]"
                  : blogType === "3D"
                  ? "border-[#FF001F] bg-[#ff001f24]"
                  : "border-[#00FFE0] bg-[#00ffe024]"
              }`}
            >
              <h1 className=" text-base md:text-xl font-normal text-white">
                Share with your community!
              </h1>
              <div className="flex items-center gap-3">
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
            <div className="py-10">
              <div
                className={` ${
                  blogType === "Games"
                    ? "border-[#FF5C00] bg-[#ff5c0024]"
                    : blogType === "Development"
                    ? "border-[#26B403] bg-[#26b40324]"
                    : blogType === "3D"
                    ? "border-[#FF001F] bg-[#ff001f24]"
                    : "border-[#00FFE0] bg-[#00ffe024]"
                } h-[2px]`}
              ></div>
            </div>
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
              <span>{title}</span>
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
                currentClassName={`border-l-4 ${
                  blogType === "Games"
                    ? "border-[#FF5C00] text-[#FF5C00]"
                    : blogType === "Development"
                    ? "border-[#26B403] text-[#26B403]"
                    : blogType === "3D"
                    ? "border-[#FF001F] text-[#FF001F]"
                    : "border-[#00FFE0] text-[#00FFE0]"
                }`}
                offset={-window.innerHeight * 0.4}
              >
                <h1
                  className={`cursor-pointer pl-2`}
                  onClick={() => handleNavClick("section1")}
                >
                  <a className="text-sm font-thin">
                    Why should I invest in game app development? Complete Guide
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a className="text-sm font-thin">What is Game development?</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a className="text-sm font-thin">Why game development is the best investment?</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a className="text-sm font-thin">Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a className="text-sm font-thin">FAQs</a>
                </h1>
              </Scrollspy>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogContent;
