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

    blogImage,
    pubDate,
  } = SelectedBlog;

  return (
    <div className={`mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top`}>
      {/* intro section */}
      <section className="pt-28 flex flex-col-reverse lg:flex-row lg:w-[90%] xl:w-[80%] mx-auto gap-8 relative">
        {/* main section */}
        <section className="lg:w-[60%] flex flex-col gap-5">
          <div className=" hidden lg:flex gap-2 items-center py-1 px-5 bg-white/10 w-fit rounded-[10px] text-white">
            <span>Blog</span>
            <span>
              <FaChevronRight />
            </span>
            <span>{title}</span>
          </div>
          <div className=" flex flex-col gap-14">
            {/* intro image */}
            <div
              className={`rounded-xl relative overflow-hidden border-2 h-[60vh] xl:h-auto min-h-[60vh] ${
                blogType === "gaming"
                  ? "border-[#FF5C00]"
                  : blogType === "Development"
                  ? "border-[#26B403]"
                  : blogType === "3D"
                  ? "border-[#FF001F]"
                  : "border-[#00FFE0]"
              }`}
            >
              <div className="w-full h-full xl:h-auto">
                <img src={blogImage} alt="Image" className="h-full w-full" />
              </div>
              <div className="absolute bottom-0 w-full py-3 md:py-[25px] px-3 md:px-10 backdrop-blur-lg flex flex-col gap-2 md:gap-[21px]">
                <div
                  className={`flex items-center py-[5px] px-4 gap-[6px] w-fit rounded-full ${
                    blogType === "gaming"
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
                      blogType === "gaming"
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
                      blogType === "gaming"
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
            {/* verbose information */}
            <section className="flex flex-col gap-[30px] pb-[40px]">
              <div
                id="section1"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">
                  AI in Gaming: Refining the Way Games Developed & Play
                </h1>
                <p>
                  AI in gaming is no longer a new phenomenon. It's trending,
                  extensively adapted, and rapidly evolving. Just like
                  Artificial Intelligence (AI) has disrupted all major
                  industries like Healthcare, Hospitality, Banking,
                  Entertainment, and more. And, so, the gaming industry is not
                  left behind with the profitable and result-oriented virtues of
                  Artificial Intelligence.
                </p>
                <p>
                  {" "}
                  In a broad sense, AI in game development has revolutionized
                  the way animated characters are created, dynamic environment
                  is set, more detailing is added, and storytelling gets
                  improved. But that's not all about AI gaming solutions and the
                  industry is deeply disrupted well beyond the imagination.
                </p>
                <p>
                  So, here in this blog, we will look into the impressive role
                  of AI in the gaming industry and how this technology is
                  pushing the artistic insights of game developers to an optimum
                  extent. Of course, successful implementation of AI will help
                  companies offer better AI game development services to
                  numerous clients and let them stay ahead of the competition.
                </p>
                <p>Key Topics to Discuss</p>
                <ul className="list-disc ml-6">
                  <li>Understanding the role of AI in gaming.</li>
                  <li>
                    How Artificial Intelligence (AI) is helping the gaming
                    industry.
                  </li>
                  <li>
                    Must-see AI game features that have improved the playing
                    experience.
                  </li>
                  <li>Key benefits of implementing AI in gaming.</li>
                  <li>Have a look at some real-time examples of AI games.</li>
                </ul>
                <p>Let's get started on the same.</p>
              </div>
              <div
                id="section2"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">
                  What is AI in Gaming?
                </h1>
                <p>
                  AI in gaming revolves around the aspect of creating a dynamic
                  environment. The intelligent integration of algorithms allows
                  game developers to create a better ecosystem from basic to
                  real-looking with better authenticity. In a way, AI games
                  appear to have an immersive virtual environment that actually
                  mimics the real world."
                </p>
                <p>
                  Now, when it comes to understanding how AI works in game
                  development, then this is what you should read.
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    AI learns from players' actions, adapts their strategies,
                    and creates a dynamic environment.
                  </li>
                  <li>
                    With the help of AI, game developers can create more
                    challenging, real-looking, and realistic storylines for
                    gamers to experience a complete set of pleasures.
                  </li>
                  <li>
                    Another integral capacity of AI games is enriching the
                    player's experience and engaging the attention to an optimum
                    extent.
                  </li>
                </ul>
                <p>Additional game aspects enhanced by AI are as follows:</p>
                <ul className="list-disc ml-6">
                  <li>Creating an intelligent working game environment.</li>
                  <li>
                    Allow Non-playable characters (NPCs) to make intelligent
                    decisions.
                  </li>
                  <li>Bringing realism to the game.</li>
                  <li>Enriching games graphics and visual effects.</li>
                </ul>
                <p>
                  Certainly, industry experts have this opinion about the
                  growing adoption of AI in the gaming industry. This led to
                  extensive Canada AI game development services and extensive
                  adoption among clients.
                </p>
              </div>
              <div
                id="section3"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">
                  Role of AI in Game Development - AI Game Development
                  Techniques
                </h1>
                <p>
                  Till now, we've covered, what role AI has to play in the
                  gaming industry. Next to know is the actual role of AI in game
                  development. Undoubtedly, artificial intelligence technology
                  brings value and real factor to games. It happens with the
                  following set of tasks.
                </p>
                <p className="font-semibold">1. Intelligence NPCs</p>
                <p>
                  Imagine a game where your Non-playable Characters or NPCs
                  opposite to you are so smart that they can analyze your
                  fighting style and come up with tactics that force you to
                  think innovatively.
                </p>
                <p>
                  Wouldn't it make the game way more engaging? You can compare
                  it with instances of using a single cliched way of killing NPC
                  opponents that follow single software algorithms from start to
                  end of the game. AI brings realistic and dynamic behaviors for
                  NPCs. With this newfound intelligence, they meticulously adapt
                  to player actions and respond tactfully like a human would,
                  thereby, making the game world more immersive.
                </p>

                <p className="font-semibold">
                  2. Procedural Content Generation:
                </p>
                <p>
                  Now think of a game that gives you different levels,
                  environments, and challenges every time you play it. Will you
                  get bored of it? No way. Because every time you play it you
                  get a new and even better experience. AI will learn your likes
                  and dislikes over time and will implement it to bring a more
                  personalized experience just for you. This is called
                  Procedural Content Generation, wherein, AI algorithms are
                  employed to generate game content such as levels, landscapes,
                  and textures dynamically, enhancing replayability. You
                  purchase the game once and get hundreds of its variations that
                  give you more bang for your buck than any other game ever in
                  the past.
                </p>

                <p className="font-semibold">3. Adaptive Difficulty:</p>
                <p>
                  There are instances when in order to make it challenging and
                  engaging game developers end up overdoing themselves. AI will
                  make sure that this does not happen and that the game is able
                  to maintain the right balance between entertainment and
                  challenge. With AI capabilities, the game will adjust the
                  difficulty level of the game based on the individual player's
                  skills. It will analyze users' preferences and their abilities
                  to on different challenges and will come up with gameplay to
                  ensure a challenging yet enjoyable experience.
                </p>

                <p className="font-semibold">4. Programming the Games</p>
                <p>
                  One of the most integral aspects of Generative AI game
                  development is programming the games, based on the right
                  codes, and that too created in a short span of time. Unlike
                  the manual game coding work, which is time-consuming and
                  human-error-oriented, AI in gaming creates real-time code with
                  auto-correct suggestions. With that means, there are fewer
                  chances of finding issues and bugs in codes. Thus, programming
                  the complete game with the least dependency and redundancy.
                  This will save developers time and help create an engaging
                  game that is fast and effective.
                </p>

                <p className="font-semibold">5. Game Artwork</p>
                <p>
                  Games visuals have to be engaging, interactive, and crystal
                  clear to capture the attention of players and allow them to
                  play more. Different elements like background color, logo, and
                  structural details are important parts of AI game development
                  services. AI tools help developers create interactive
                  characters, intuitive UI/UX elements, diverse backgrounds, and
                  in-depth details to bring realistic factors. Not only this, AI
                  games are further superior in terms of auditory experience
                  with specialized sounds created for different levels and
                  scenarios.
                </p>
              </div>
              <div
                id="section4"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">
                  Unique AI Game Features
                </h1>

                <ul className="list-disc ml-6">
                  <li>
                    Showcasing clear and 3D-rendered graphics to capture
                    attention.
                  </li>
                  <li>
                    Creating different game levels to increase difficulty &
                    engagement.
                  </li>
                  <li>
                    Generating interactive stories & scenarios to retain players
                    for a long.
                  </li>
                  <li>Balancing the game's complexity to an optimum extent.</li>
                  <li>
                    Adding smart intelligence to performing and non-performing
                    game players.
                  </li>
                </ul>

                <p className="font-semibold">Advantages of AI Games</p>
                <ul className="list-disc ml-6">
                  <li>
                    Making games and players smarter to run effectively and
                    accordingly.
                  </li>
                  <li>
                    With the help of 3D visualization techniques, AI games
                    appear more real, attention-grabbing, and visually
                    interactive.
                  </li>
                  <li>
                    In-depth AI game detailing provides the benefit of
                    increasing player retention rate.
                  </li>
                  <li>
                    Game developers will learn a lot from AI integration into
                    the development process.
                  </li>
                  <li>
                    There will be an extensive rise of AI mobile gaming,
                    allowing players to run anywhere and at any point in time.
                  </li>
                  <li>
                    AI in gaming will certainly reduce development time, effort,
                    and cost.
                  </li>
                  <li>
                    AI assists the developers in facing fewer errors and reduces
                    overall delays in deploying games for the actual players.
                  </li>
                </ul>

                <p className="font-semibold">
                  Real-world Applications of AI in Gaming
                </p>
                <ul className="list-disc ml-6">
                  <li>StarCraft II</li>
                  <li>Alien: Isolation</li>
                  <li>PUBG</li>
                  <li>WAR Frame</li>
                  <li>Path of Exile</li>
                  <li>Paladins</li>
                  <li>Pokerth</li>
                  <li>HeartStone</li>
                  <li>Forza Horizon Series</li>
                  <li>F.E.A.R.</li>
                  <li>Freeciv</li>
                  <li>FIFA</li>
                  <li>Google Quick Draw</li>
                  <li>Stockfish</li>
                  <li>Minecraft</li>
                </ul>
              </div>
              <div
                id="section5"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">Conclusion</h1>

                <p>
                  Artificial Intelligence is positively impacting the gaming
                  industry while bringing new evolutions, better playing
                  experiences, & increased engagement levels. AI in gaming not
                  only helps create diverse scenarios, and interactive
                  storytelling, even brings advancement of games continuously
                  evolving as it is played.{" "}
                </p>
                <p>
                  With the help of AI tools, game developers can push their
                  boundaries to create virtually impressive games and shape the
                  future of new gaming companies. Therefore, it's time for you
                  to embrace the change and avail yourself of result-oriented AI
                  game development services from a reliable partner.
                </p>
              </div>

              <div
                id="section6"
                className="flex flex-col gap-5 text-white text-base font-light"
              >
                <h1 className="text-xl font-extrabold">FAQs</h1>
                <p className="font-semibold">What is the AI in gaming?</p>
                <p>
                  AI in gaming is the generation of responsive and adaptive
                  gaming experiences. AI makes gamers much more personalized to
                  the individual gamers, learning their style, likes/dislikes,
                  and capabilities to generate gameplay that is the most
                  enjoyable for them. AI makes non-player characters, or NPCs,
                  more adaptive, intelligent, and interactive as if a real human
                  is controlling and speaking from behind them.
                </p>

                <p className="font-semibold">
                  What do AI gaming solutions have differently?
                </p>
                <p>
                  AI gaming solutions bring a more personalized, interactive,
                  and dynamic gaming experience for an edge-of-the-seat gaming
                  experience each time and every time.
                </p>

                <p className="font-semibold">
                  What are the different types of tools used for AI game
                  development?
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Unity ML-Agents: It is developed by Unity Technologies. It
                    allows developers to train agents using machine learning
                    algorithms and incorporate AI into their games.
                  </li>
                  <li>
                    Unreal Engine AI: It provides built-in AI tools for behavior
                    trees, navigation meshes, and environmental queries.
                  </li>
                  <li>
                    TensorFlow and PyTorch: These are used for creating and
                    training neural networks to develop AI models for
                    game-related tasks such as image recognition, natural
                    language processing, and decision-making.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* bottom community section */}
          <div>
            <div
              className={` border-2  rounded-[30px] flex items-center justify-between py-[40px] px-5 ${
                blogType === "gaming"
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
                  blogType === "gaming"
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
                  blogType === "gaming"
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
                  <a>AI in Gaming: Refining the Way Games Developed & Play</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section2")}
                >
                  <a>What is AI in Gaming?</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section3")}
                >
                  <a>
                    Role of AI in Game Development - AI Game Development
                    Techniques
                  </a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section4")}
                >
                  <a>Unique AI Game Features</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section5")}
                >
                  <a>Conclusion</a>
                </h1>
                <h1
                  className="cursor-pointer pl-2"
                  onClick={() => handleNavClick("section6")}
                >
                  <a>FAQs</a>
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
