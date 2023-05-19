import { useState } from 'react';
import Section from '../components/Background';
import Container from '../components/Container';
import Heading from '../components/Heading';

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
        <div className="flex items-center justify-center">
          <img className="mt-8 h-56" src={personImg[0]} alt="person image" />
        </div>
        <hr className="bordser w-full border-[#383B4B]" />

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
            <li>
              <button className="h-2.5 w-2.5 rounded-full bg-gray-600" />
            </li>
          </ul>
        </div>

        <h4 className="font-Belle mb-1 text-base uppercase brightness-[50%]">
          {display.role}
        </h4>

        <div className="space-y-4">
          <h3 className="font-Belle text-2xl uppercase">{display.name}</h3>
          <p className="text-base tracking-[1px] text-accent">{display.bio}</p>
        </div>
      </Container>
      <div id="mask"></div>
    </Section>
  );
};

export default Crew;
