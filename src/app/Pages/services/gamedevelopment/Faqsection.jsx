import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 

{/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
function Icon({ id, open }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  );
}
 
const Faqsection = () => {

  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>

    <div>
      <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">FAQs</h1>
    </div>

    <div className="grid text-white sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4">

      <div>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}
      className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
      >
        <AccordionHeader style={{ border:'0' }} onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}
            className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"

      >
        <AccordionHeader style={{ border:'0' }} onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}
            className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"

      >
        <AccordionHeader style={{ border:'0' }} onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      </div>

      <div>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}
           className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"

      >
        <AccordionHeader  style={{ border:'0' }} onClick={() => handleOpen(4)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion  open={open === 5} icon={<Icon id={5} open={open} />}
            className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"

      >
        <AccordionHeader style={{ border:'0' }} onClick={() => handleOpen(5)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion  open={open === 6} icon={<Icon id={6} open={open} />}
           className="py-2 lg:px-8 my-4 border-2  border-gray-500 rounded-lg bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"

      >
        <AccordionHeader style={{ border:'0' }} onClick={() => handleOpen(6)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      </div>

      


    </div>

    
   
    </>
  );
}

export default Faqsection;