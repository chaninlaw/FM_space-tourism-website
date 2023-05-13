const Background = ({ children, title }) => {
  return (
    <section
      className={`absolute top-0 -z-10 h-screen w-screen overflow-hidden bg-[url('./assets/${title}/background-${title}-mobile.jpg')] bg-cover bg-top md:bg-[url('./assets/${title}/background-${title}-tablet.jpg')] lg:bg-[url('./assets/${title}/background-${title}-desktop.jpg')]`}
    >
      {children}
    </section>
  );
};

export default Background;
