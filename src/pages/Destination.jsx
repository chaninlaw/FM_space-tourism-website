const Destination = ({ data }) => {
  const [moon, mars, europa, titan] = data;

  return (
    <section
      className={`absolute top-0 -z-10 h-full w-screen 
    bg-[url('/src/assets/destination/background-destination-mobile.jpg')] bg-cover bg-top 
    md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] 
    lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]`}
    >
      <div className="container mx-auto flex w-10/12 flex-col items-center justify-center pt-28 text-white">
        <h5 className="uppercase tracking-[0.2969rem]">
          01 Pick your destination
        </h5>
        <img src={moon.images.png} alt={moon.name} />

        <div>Moon Mars Europa Titan</div>

        <h3 className="text-[3.5rem] uppercase">{moon.name}</h3>
        <p>{moon.description}</p>
        <hr className="border-white" />
        <p>AVG. Distance</p>
        <p>{moon.distance}</p>
        <p>Est. Travel Time</p>
        <p>{moon.travel}</p>
      </div>
    </section>
  );
};

export default Destination;
