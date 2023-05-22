const Background = ({ children, title }) => {
  if (title === 'destination') {
    return (
      <section
        className={`absolute inset-x-0 top-0 -z-10 min-h-screen w-screen bg-[url('/src/assets/destination/background-destination-mobile.jpg')] 
      bg-cover bg-fixed bg-top 
      md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] 
      lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]`}
      >
        {children}
      </section>
    );
  } else if (title === 'crew') {
    return (
      <section
        className={`absolute inset-x-0 top-0 -z-10 min-h-screen w-screen bg-[url('/src/assets/crew/background-crew-mobile.jpg')] 
    bg-cover bg-fixed bg-top 
    md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] 
    lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]`}
      >
        {children}
      </section>
    );
  } else if (title === 'technology') {
    return (
      <section
        className={`absolute inset-x-0 top-0 -z-10 min-h-screen w-screen bg-[url('/src/assets/technology/background-technology-mobile.jpg')] 
      bg-cover bg-fixed bg-top 
      md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] 
      lg:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]`}
      >
        {children}
      </section>
    );
  } else {
    return (
      <section
        className={`absolute inset-x-0 top-0 -z-10 min-h-screen w-screen bg-[url('/src/assets/home/background-home-mobile.jpg')] 
      bg-cover bg-fixed bg-top 
      md:bg-[url('/src/assets/home/background-home-tablet.jpg')] 
      lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]`}
      >
        {children}
      </section>
    );
  }
};

export default Background;
