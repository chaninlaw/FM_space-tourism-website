import Background from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';

import SpaceCraft from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import SpacePort from '../assets/technology/image-spaceport-landscape.jpg';
import { useState } from 'react';

const techImg = {
  0: SpaceCraft,
  1: SpacePort,
  2: SpaceCapsule,
};

const Technology = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);

  return (
    <Background title="technology">
      <Container>
        <Heading number="03">Space Launch 101</Heading>
      </Container>
      <div className="mt-8">
        <img className="w-screen" src={techImg[0]} alt="tech image" />
      </div>
      <Container className="pt-0">
        <div className="my-8">
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <button className="h-2.5 w-2.5 rounded-full bg-gray-600" />
            </li>
            <li>
              <button className="h-2.5 w-2.5 rounded-full bg-gray-600" />
            </li>
            <li>
              <button className="h-2.5 w-2.5 rounded-full bg-gray-600" />
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-barlow text-base uppercase text-accent">
            The Terminology...
          </h4>
          <h3 className="font-Belle m-2 text-2xl uppercase">{display.name}</h3>
        </div>
        <p className="tracking-[1px] text-accent">{display.description}</p>
      </Container>
    </Background>
  );
};

export default Technology;
