import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
      <Container className="pt-28 md:pt-36">
        <Heading number="01">Pick your destination</Heading>
        <LazyLoadImage
          className="mx-auto my-8 w-44 md:my-14 md:w-80"
          src={picObj[display.name]}
          alt={display.name}
          effect="blur"
        />
        <div className="mt-4 box-content flex items-center justify-center space-x-4 uppercase tracking-[2.7px]">
          <Tabs
            page="destinations"
            data={picObj}
            activeIndex={activeIndex}
            handleDisplay={handleDisplay}
          />
        </div>

        <h3 className="my-4 text-[3.5rem] uppercase">{display.name}</h3>
        <div className="md:mx-auto md:max-w-xl">
          <p className="leading-7 tracking-[1px] text-accent">
            {display.description}
          </p>
          <hr className="my-8 w-full border border-[#383B4B]" />
          <div className="md:flex md:justify-evenly">
            <div className="mb-4">
              <p className="uppercase tracking-[2.35px] text-accent">
                AVG. Distance
              </p>
              <p className="font-belle text-[28px] uppercase">
                {display.distance}
              </p>
            </div>
            <div className="mb-14">
              <p className="uppercase tracking-[2.35px] text-accent">
                Est. Travel Time
              </p>
              <p className="font-belle text-[28px] uppercase">
                {display.travel}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Destination;
