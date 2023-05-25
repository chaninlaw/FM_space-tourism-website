import { useState } from 'react';
import Section from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Tabs from '../components/Tabs';

import DouglasHurley from '../assets/crew/image-douglas-hurley.png';
import MarkShuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import VictorGlover from '../assets/crew/image-victor-glover.png';
import AnoushehAnsari from '../assets/crew/image-anousheh-ansari.png';

const picObj = {
  'Douglas Hurley': DouglasHurley,
  'Mark Shuttleworth': MarkShuttleworth,
  'Victor Glover': VictorGlover,
  'Anousheh Ansari': AnoushehAnsari,
};

const Crew = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);
  const [activeIndex, setActive] = useState(0);

  const handleDisplay = (index) => {
    setDisplay(data[index]);
    setActive(index);
  };

  return (
    <Section title="crew">
      <Container className="pt-28 md:pt-52">
        <Heading number="02">Meet the crew</Heading>
        <div className="flex items-center justify-center">
          <img
            className="mt-8 w-80 md:w-[456px]"
            src={picObj[display.name]}
            alt="person image"
          />
        </div>
        <hr className="bordser w-full border-[#383B4B]" />

        <div className="my-8">
          <ul className="flex items-center justify-center space-x-4">
            <Tabs
              page="crew"
              data={data}
              handleDisplay={handleDisplay}
              activeIndex={activeIndex}
            />
          </ul>
        </div>

        <h4 className="font-Belle mb-1 text-base uppercase brightness-[50%]">
          {display.role}
        </h4>

        <div className="mb-20 space-y-4">
          <h3 className="font-Belle text-2xl uppercase">{display.name}</h3>
          <p className="text-base tracking-[1px] text-accent">{display.bio}</p>
        </div>
      </Container>
    </Section>
  );
};

export default Crew;
