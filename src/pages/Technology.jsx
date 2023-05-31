import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Background from "../components/Background";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";
import Carousel from "../components/Carousel";
import useWindowWidth from "../utils/useWindowWidth";

import LandscapeSpaceCraft from "../assets/technology/image-launch-vehicle-landscape.jpg";
import LandscapeSpaceCapsule from "../assets/technology/image-space-capsule-landscape.jpg";
import LandscapeSpacePort from "../assets/technology/image-spaceport-landscape.jpg";

import PortraitSpaceCraft from "../assets/technology/image-launch-vehicle-portrait.jpg";
import PortraitSpaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import PortraitSpacePort from "../assets/technology/image-spaceport-portrait.jpg";

const picObj = {
  "Launch vehicle": {
    landscape: LandscapeSpaceCraft,
    portrait: PortraitSpaceCraft,
  },
  Spaceport: { landscape: LandscapeSpacePort, portrait: PortraitSpacePort },
  "Space capsule": {
    landscape: LandscapeSpaceCapsule,
    portrait: PortraitSpaceCapsule,
  },
};

const Technology = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActive] = useState(0);
  const width = useWindowWidth();

  const handleDisplay = (index) => {
    if (index >= 0 && index < 3) {
      setDisplay(data[index]);
      setActive(index);
    }
  };

  return (
    <Background title="technology">
      <Container className="pt-28 md:mb-16 md:pt-36 xl:mb-0 xl:mt-24 xl:w-[77%]">
        <Heading number="03">Space Launch 101</Heading>
      </Container>
      <div className="xl:grid xl:grid-cols-12">
        <Carousel
          className="xl:col-start-9 xl:col-end-13 xl:my-0"
          onDisplay={handleDisplay}
          index={activeIndex}
        >
          <LazyLoadImage
            className="relative inset-0 aspect-square h-44 w-screen md:h-80 lg:h-96 xl:h-full xl:w-full"
            src={
              width >= 1280
                ? picObj[display.name].portrait
                : picObj[display.name].landscape
            }
            alt={display.name}
            effect="blur"
          />
        </Carousel>
        <Container className="xl:col-start-2 xl:col-end-9 xl:row-start-1 xl:grid xl:grid-cols-4 xl:place-content-center xl:gap-5">
          <ul className="flex items-center justify-center space-x-4 xl:mt-10 xl:flex-1 xl:flex-col xl:items-start xl:justify-start xl:gap-6 xl:space-x-0">
            <Tabs
              page="technology"
              data={data}
              handleDisplay={handleDisplay}
              activeIndex={activeIndex}
            />
          </ul>
          <div className="xl:col-span-3 xl:text-left">
            <div className="mb-4 mt-8 md:mt-10">
              <h4 className="font-barlow text-base uppercase text-accent">
                The Terminology...
              </h4>
              <h3 className="font-Belle m-2 text-2xl uppercase md:my-6 md:text-[2.5rem] xl:mx-0 xl:text-6xl">
                {display.name}
              </h3>
            </div>
            <p className="mb-14 leading-7 tracking-[1px] text-accent md:mx-auto md:max-w-md xl:ml-0 xl:text-lg">
              {display.description}
            </p>
          </div>
        </Container>
      </div>
    </Background>
  );
};

export default Technology;
