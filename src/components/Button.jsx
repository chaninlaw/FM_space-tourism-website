const Button = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${rest.className} relative grid aspect-square cursor-pointer place-items-center rounded-full bg-white p-9 after:absolute after:-z-10 after:aspect-square after:h-full after:w-full after:rounded-full after:bg-[#979797] after:opacity-0 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-150 hover:after:opacity-10 focus:after:scale-150 focus:after:opacity-10`}
    >
      {children}
    </div>
  );
};

export default Button;
