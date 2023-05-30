import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Background from "../components/Background";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";
import Carousel from "../components/Carousel";

import SpaceCraft from "../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceCapsule from "../assets/technology/image-space-capsule-landscape.jpg";
import SpacePort from "../assets/technology/image-spaceport-landscape.jpg";

const picObj = {
  "Launch vehicle": SpaceCraft,
  Spaceport: SpacePort,
  "Space capsule": SpaceCapsule,
};

const Technology = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActive] = useState(0);

  const handleDisplay = (index) => {
    if (index >= 0 && index < 3) {
      setDisplay(data[index]);
      setActive(index);
    }
  };

  return (
    <Background title="technology">
      <Container className="pt-28 md:mb-16 md:pt-36">
        <Heading number="03">Space Launch 101</Heading>
      </Container>
      <Carousel onDisplay={handleDisplay} index={activeIndex}>
        <LazyLoadImage
          className="relative inset-0 aspect-square h-44 w-screen md:h-80 lg:h-96"
          src={picObj[display.name]}
          alt="tech image"
          effect="blur"
        />
      </Carousel>
      <Container className="!pt-0">
        <ul className="flex items-center justify-center space-x-4">
          <Tabs
            page="technology"
            data={data}
            handleDisplay={handleDisplay}
            activeIndex={activeIndex}
          />
        </ul>
        <div className="mb-4 mt-8 md:mt-10">
          <h4 className="font-barlow text-base uppercase text-accent">
            The Terminology...
          </h4>
          <h3 className="font-Belle m-2 text-2xl uppercase md:my-6 md:text-[2.5rem]">
            {display.name}
          </h3>
        </div>
        <p className="mb-14 leading-7 tracking-[1px] text-accent md:mx-auto md:max-w-md">
          {display.description}
        </p>
      </Container>
    </Background>
  );
};

export default Technology;
