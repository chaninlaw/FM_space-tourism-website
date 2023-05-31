const Heading = ({ children, number, ...rest }) => {
  return (
    <h5
      className={`${rest.className} uppercase tracking-[0.2969rem] md:text-left md:text-xl xl:text-2xl`}
    >
      <span className="font-bold brightness-[25%]">{number}</span> {children}
    </h5>
  );
};

export default Heading;
