const Container = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${rest.className} mx-auto w-[87.5%] max-w-full text-center text-white`}
    >
      {children}
    </div>
  );
};

export default Container;
