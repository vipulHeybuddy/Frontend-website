import React from "react";
// import { TabView, TabPanel } from "primereact/tabview";
import { Tabs } from 'flowbite-react';

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


  return (
    <div className="lg:py-24">
      {/* <TabView>
        {Pagecontent.map((section, index) => (
          <TabPanel header={section.heading}  className="p-8 ">

            <p className="p-16 bg-[#979797] bg-clip-padding rounded-xl backdrop-filter backdrop-blur-md bg-opacity-40 text-white">
             {section.content}
            </p>
          </TabPanel>
        ))}
      </TabView> */}
      <Tabs aria-label="Tabs with underline" style="underline">

      {Pagecontent.map((section, index) => (
        <Tabs.Item active title={section.heading} >
            <div className="p-6">

        {section.content}
            </div>
      </Tabs.Item>

))}
      

      
      
    </Tabs>


    </div>
  );
};

export default Pagenation;
