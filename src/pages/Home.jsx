import Background from "../components/Background";
import Container from "../components/Container";
import Button from "../components/Button";

const Home = () => {
  return (
    <Background title="home">
      <Container className="pt-28 md:pt-48 xl:mx-auto xl:mt-48 xl:grid xl:w-[92.5%] xl:grid-cols-2">
        <div className="md:mx-auto md:max-w-md xl:text-left">
          <p className="text-base uppercase tracking-[0.18rem] text-accent xl:text-3xl">
            So, you want to travel to
          </p>
          <h1 className="text-[5rem] uppercase text-white sm:text-[9.375rem]">
            Space
          </h1>
          <p className="text-base normal-case leading-7 tracking-wider text-accent xl:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="mb-32 flex items-center justify-center">
          <Button
            to="/destination"
            className="mt-[7.5rem] font-belle text-xl uppercase tracking-[0.0781rem] text-black md:text-[2em]"
          >
            Explore
          </Button>
        </div>
      </Container>
    </Background>
  );
};
export default Home;
