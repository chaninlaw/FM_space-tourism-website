import { useState } from 'react';
import Section from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';

const listObj = {
  moon: 0,
  mars: 1,
  europa: 2,
  titan: 3,
};

const picObj = {
  Moon,
  Mars,
  Europa,
  Titan,
};

const Destination = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDisplay = (e, i) => {
    e.preventDefault();
    const target = e.target.innerText.toLowerCase();
    const index = listObj[target];
    setDisplay(data[index]);
    setActiveIndex(i);
  };

  const renderedCarouselActiveTabs = Object.keys(picObj).map((key, index) => {
    const isActive = index === activeIndex;
    return (
      <p
        key={key}
        onClick={(e) => handleDisplay(e, index)}
        className={`${
          isActive && 'border-b-[3px] border-b-white'
        } cursor-pointer p-1`}
      >
        {key.toUpperCase()}
      </p>
    );
  });

  return (
    <Section title="destination">
      <Container>
        <Heading number="01">Pick your destination</Heading>
        <img
          className="mx-auto my-8"
          src={picObj[display.name]}
          alt={display.name}
        />

        <div className="mt-4 box-content flex items-center justify-center space-x-4 uppercase tracking-[2.7px]">
          {renderedCarouselActiveTabs}
        </div>
        <h3 className="my-4 text-[3.5rem] uppercase">{display.name}</h3>
        <p className="tracking-[1px] text-accent">{display.description}</p>
        <hr className="my-8 w-full border border-[#383B4B]" />
        <div className="mb-4 space-y-4 uppercase">
          <div>
            <p className="">AVG. Distance</p>
            <p className="font-belle text-[28px] uppercase">
              {display.distance}
            </p>
          </div>
          <div>
            <p className="">Est. Travel Time</p>
            <p className="upercase font-belle text-[28px]">{display.travel}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Destination;
