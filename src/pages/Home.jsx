const Home = () => {
  return (
    <section
      className={`absolute top-0 -z-10 h-full w-screen 
    bg-[url('/src/assets/home/background-home-mobile.jpg')] bg-cover bg-top 
    md:bg-[url('/src/assets/home/background-home-tablet.jpg')] 
    lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]`}
    >
      <div className="container mx-auto flex w-10/12 flex-col items-center justify-center space-y-28 pt-28 text-center uppercase">
        <div>
          <p className="text-base text-accent">So, you want to travel to</p>
          <h1 className="text-[5rem] text-white sm:text-xxl">Space</h1>
          <p className="normal-case text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="relative">
          <button className="cta-btn font-belle uppercase">Explore</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
