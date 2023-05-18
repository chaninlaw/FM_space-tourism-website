import { useState } from 'react';
import Section from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Pagination from '../components/Pagination';
import DouglasHurley from '../assets/crew/image-douglas-hurley.png';
import MarkShuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import VictorGlover from '../assets/crew/image-victor-glover.png';
import AnoushehAnsari from '../assets/crew/image-anousheh-ansari.png';

const personImg = {
  0: DouglasHurley,
  1: MarkShuttleworth,
  2: VictorGlover,
  3: AnoushehAnsari,
};

const Crew = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);

  return (
    <Section title="crew">
      <Container>
        <Heading number="02">Meet the crew</Heading>
        <img className="mt-8 h-56" src={personImg[0]} alt="person image" />
        <hr className="bordser w-full border-[#383B4B]" />
        <div className="mt-8 text-center">
          <Pagination className="mb-8" count={4} />

          <h4 className="font-Belle mb-1 text-base uppercase brightness-[50%]">
            {display.role}
          </h4>

          <div className="space-y-4">
            <h3 className="font-Belle text-2xl uppercase">{display.name}</h3>
            <p className="text-base text-accent">{display.bio}</p>
          </div>
        </div>
      </Container>
      <div id="mask"></div>
    </Section>
  );
};

export default Crew;
