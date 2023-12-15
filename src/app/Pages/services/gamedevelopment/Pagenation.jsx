import React from "react";
// import { TabView, TabPanel } from "primereact/tabview";
// import { Tabs } from "flowbite-react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";

const Pagenation = () => {
  const Pagecontent = [
    {
      id: "1",
      heading: "Platforms",
      content:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "2",
      heading: "AR/VR Platforms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "3",
      heading: "Metaveerse Platforms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "4",
      heading: "Game Engines",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "5",
      heading: "Languages",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "6",
      heading: "Artifical Intelligence(AI)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboresint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const [selectedTab, setSelectedTab] = useTabs([
    "Platforms",
    "ARVRPlatforms",
    "MetaveersePlatforms",
    "GameEngines",
    "Languages",
    "ArtificalIntelligence(AI)",
  ]);

  return (
    <div className="lg:py-8 text-white">
      <div className="py-6">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Hey Buddy Tech Arsenal for best Game Solutions: <br /> Expertise on
          all fronts
        </h1>
        <p className="text-xl lg:text-2xl">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best gaming solution for you.
        </p>
      </div>

      <nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === "Platforms"}
          onClick={() => setSelectedTab("Platforms")}
        >
          Platforms
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "ARVRPlatforms"}
          onClick={() => setSelectedTab("ARVRPlatforms")}
        >
         AR/VR Platforms
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "MetaveersePlatforms"}
          onClick={() => setSelectedTab("MetaveersePlatforms")}
        >
         Metaveerse Platformss
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "GameEngines"}
          onClick={() => setSelectedTab("GameEngines")}
        >
          Game Engines
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Languages"}
          onClick={() => setSelectedTab("Languages")}
        >
          Languages
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "ArtificalIntelligence(AI)"}
          onClick={() => setSelectedTab("ArtificalIntelligence(AI)")}
        >
          Artifical Intelligence(AI)
        </TabSelector>

      </nav>

      <div className="py-6 px-2">
        <TabPanel hidden={selectedTab !== "Platforms"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        >
          Platforms
          </TabPanel>

        <TabPanel hidden={selectedTab !== "ARVRPlatforms"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        >
          AR/VR Platforms
          </TabPanel>

        <TabPanel hidden={selectedTab !== "MetaveersePlatforms"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        
        >
          Metaveerse Platforms
          </TabPanel>

        <TabPanel hidden={selectedTab !== "GameEngines"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        
        >
          Game Engines
          </TabPanel>

        <TabPanel hidden={selectedTab !== "Languages"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        
        >
          Languages
          </TabPanel>

        <TabPanel hidden={selectedTab !== "ArtificalIntelligence(AI)"}
        className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[30vh] w-full"
        
        >
          Artifical Intelligence(AI)
          </TabPanel>

      </div>
    </div>
  );
};

export default Pagenation;
