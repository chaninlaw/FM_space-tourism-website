import { useState } from 'react';

const Destination = ({ data }) => {
  const [display, setDisplay] = useState(data[0]);

  const handleDisplay = (e) => {
    e.preventDefault();
    let target = e.target.innerText.toLowerCase();
    const dataObj = {
      moon: 0,
      mars: 1,
      europa: 2,
      titan: 3,
    };
    let index = dataObj[target];
    setDisplay(data[index]);
  };

  return (
    <section
      className={`absolute top-0 -z-10 w-screen 
    bg-[url('/src/assets/destination/background-destination-mobile.jpg')] bg-cover bg-top 
    md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] 
    lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]`}
    >
      <div className="container mx-auto flex w-10/12 flex-col items-center justify-center pt-28 text-white">
        <h5 className="uppercase tracking-[0.2969rem]">
          <span className="font-bold brightness-[25%]">01</span> Pick your
          destination
        </h5>
        <img
          className="my-4"
          src={
            import.meta.env.DEV
              ? display.images.png
              : require(display.images.png).default
          }
          alt={display.name}
        />

        <div className="mt-4 box-content flex items-center justify-center gap-2 uppercase tracking-[2.7px]">
          <p
            onClick={(e) => handleDisplay(e)}
            className="cursor-pointer border-b-[3px] border-b-white p-1"
          >
            Moon
          </p>
          <p onClick={(e) => handleDisplay(e)} className="cursor-pointer p-1">
            Mars
          </p>
          <p onClick={(e) => handleDisplay(e)} className="cursor-pointer p-1">
            Europa
          </p>
          <p onClick={(e) => handleDisplay(e)} className="cursor-pointer p-1">
            Titan
          </p>
        </div>
        <h3 className="my-4 text-[3.5rem] uppercase">{display.name}</h3>
        <p className="text-center">{display.description}</p>
        <hr className="my-8 w-full border border-[#383B4B]" />
        <div className="mb-4 space-y-4 text-center uppercase">
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
      </div>
    </section>
  );
};

export default Destination;
