import Section from '../components/Background';
import Container from '../components/Container';
import Button from '../components/Button';

const Home = () => {
  return (
    <Section title="home">
      <Container className="space-y-[7.5rem] text-center uppercase">
        <div>
          <p className="text-base tracking-[0.18rem] text-accent">
            So, you want to travel to
          </p>
          <h1 className="text-[5rem] text-white sm:text-[9.375rem]">Space</h1>
          <p className="text-base normal-case tracking-wider text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button className="font-belle text-xl uppercase tracking-[0.0781rem] text-black">
          Explore
        </Button>
      </Container>
    </Section>
  );
};
export default Home;
