const Section = ({ children, title }) => {
  return (
    <section
      className={`absolute top-0 -z-10 h-full w-screen 
      bg-[url('/src/assets/${title}/background-${title}-mobile.jpg')] bg-cover bg-top 
      md:bg-[url('/src/assets/${title}/background-${title}-tablet.jpg')] 
      lg:bg-[url('/src/assets/${title}/background-${title}-desktop.jpg')]`}
    >
      {children}
    </section>
  );
};

export default Section;
