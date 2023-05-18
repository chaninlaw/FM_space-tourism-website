const Heading = ({ children, number }) => {
  return (
    <h5 className="uppercase tracking-[0.2969rem]">
      <span className="font-bold brightness-[25%]">{number}</span> {children}
    </h5>
  );
};

export default Heading;
