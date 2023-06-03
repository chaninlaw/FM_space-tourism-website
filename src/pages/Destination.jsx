import { useState } from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";

import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

const picObj = {
  Moon,
  Mars,
  Europa,
  Titan,
};

const Destination = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDisplay = (index) => {
    setDisplay(data[index]);
    setActiveIndex(index);
  };

  return (
    <Background title="destination">
      <Container className="pt-28 md:pt-36 xl:mt-24 xl:w-[77%]">
        <Heading number="01">Pick your destination</Heading>
        <div className="xl:grid xl:grid-cols-11">
          <div className="xl:col-start-1 xl:col-end-8">
            <motion.img
              key={picObj[display.name]}
              className="mx-auto my-8 w-44 md:my-14 md:w-80 xl:w-[445px]"
              src={picObj[display.name]}
              alt={display.name}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            />
          </div>

          <div className="xl:col-start-8 xl:col-end-12 xl:space-y-10">
            <div className="mt-4 box-content flex items-center justify-center space-x-4 uppercase tracking-[2.7px] xl:justify-start">
              <Tabs
                page="destinations"
                data={picObj}
                activeIndex={activeIndex}
                handleDisplay={handleDisplay}
              />
            </div>

            <h3 className="my-4 text-[3.5rem] uppercase xl:text-start xl:text-8xl">
              {display.name}
            </h3>

            <div className="md:mx-auto md:max-w-xl">
              <p className="leading-7 tracking-[1px] text-accent xl:text-left">
                {display.description}
              </p>
              <hr className="my-8 w-full border border-[#383B4B] xl:mb-6 xl:mt-12" />

              <div className="md:flex md:justify-evenly xl:justify-start xl:gap-20 xl:text-left">
                <div className="mb-4 xl:space-y-1">
                  <p className="uppercase tracking-[2.35px] text-accent">
                    AVG. Distance
                  </p>
                  <p className="font-belle text-[28px] uppercase">
                    {display.distance}
                  </p>
                </div>
                <div className="mb-14 xl:space-y-1">
                  <p className="uppercase tracking-[2.35px] text-accent">
                    Est. Travel Time
                  </p>
                  <p className="font-belle text-[28px] uppercase">
                    {display.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Destination;
