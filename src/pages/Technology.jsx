import Background from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Tabs from '../components/Tabs';

import SpaceCraft from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import SpacePort from '../assets/technology/image-spaceport-landscape.jpg';
import { useState } from 'react';

const picObj = {
  'Launch vehicle': SpaceCraft,
  Spaceport: SpacePort,
  'Space capsule': SpaceCapsule,
};

const Technology = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActive] = useState(0);

  const handleDisplay = (index) => {
    setDisplay(data[index]);
    setActive(index);
  };

  return (
    <Background title="technology">
      <Container>
        <Heading number="03">Space Launch 101</Heading>
      </Container>
      <div className="mt-8">
        <img
          className="h-44 w-screen"
          src={picObj[display.name]}
          alt="tech image"
        />
      </div>
      <Container className="!pt-0">
        <div className="my-8">
          <ul className="flex items-center justify-center space-x-4">
            <Tabs
              page="technology"
              data={data}
              handleDisplay={handleDisplay}
              activeIndex={activeIndex}
            />
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-barlow text-base uppercase text-accent">
            The Terminology...
          </h4>
          <h3 className="font-Belle m-2 text-2xl uppercase">{display.name}</h3>
        </div>
        <p className="mb-14 tracking-[1px] text-accent">
          {display.description}
        </p>
      </Container>
    </Background>
  );
};

export default Technology;
