const Container = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${rest.className} container mx-auto flex w-10/12 flex-col items-center justify-center pt-28 text-white`}
    >
      {children}
    </div>
  );
};

export default Container;
