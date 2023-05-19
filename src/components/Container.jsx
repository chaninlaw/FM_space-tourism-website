const Container = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${rest.className} container mx-auto w-11/12 pt-28 text-center text-white`}
    >
      {children}
    </div>
  );
};

export default Container;
