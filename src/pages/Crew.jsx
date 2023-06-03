import { useState } from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";

import DouglasHurley from "../assets/crew/image-douglas-hurley.png";
import MarkShuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import VictorGlover from "../assets/crew/image-victor-glover.png";
import AnoushehAnsari from "../assets/crew/image-anousheh-ansari.png";

const picObj = {
  "Douglas Hurley": DouglasHurley,
  "Mark Shuttleworth": MarkShuttleworth,
  "Victor Glover": VictorGlover,
  "Anousheh Ansari": AnoushehAnsari,
};

const Crew = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActive] = useState(0);

  const handleDisplay = (index) => {
    setDisplay(data[index]);
    setActive(index);
  };

  return (
    <Background title="crew">
      <Container className="pt-28 md:pt-36 xl:mt-24 xl:w-[77%]">
        <Heading number="02">Meet the crew</Heading>
        <div className="md:flex md:flex-col-reverse xl:grid xl:grid-cols-12 xl:grid-rows-1">
          <div className="flex items-center justify-center xl:col-start-7 xl:col-end-13 xl:row-start-1 xl:row-end-3 xl:justify-end">
            <motion.img
              className="mt-8 w-80 md:mt-0 md:w-[456px] xl:h-[629px] xl:w-auto"
              key={picObj[display.name]}
              src={picObj[display.name]}
              alt={display.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </div>
          <hr className="w-full border border-gray-600 md:hidden" />

          <div className="my-8 md:mb-20 md:mt-6 xl:col-start-1 xl:col-end-7 xl:row-start-2 xl:row-end-3 xl:self-end">
            <ul className="flex items-center justify-center space-x-4 xl:justify-start">
              <Tabs
                page="crew"
                data={data}
                handleDisplay={handleDisplay}
                activeIndex={activeIndex}
              />
            </ul>
          </div>
          <div className="md:mx-auto md:mt-16 md:max-w-xl xl:col-start-1 xl:col-end-7 xl:row-start-1 xl:row-end-2 xl:mx-0 xl:mt-32 xl:text-left">
            <h4 className="font-Belle mb-1 text-base uppercase brightness-[50%] md:text-2xl xl:text-4xl">
              {display.role}
            </h4>

            <div className="mb-20 space-y-4 md:my-4">
              <h3 className="nowrap font-belle text-2xl uppercase md:text-[2.5rem] xl:text-6xl">
                {display.name}
              </h3>
              <p className="text-base leading-7 tracking-[1px] text-accent xl:text-xl">
                {display.bio}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Crew;
