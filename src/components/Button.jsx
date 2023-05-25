import { Link } from 'react-router-dom';

const Button = ({ children, to, ...rest }) => {
  return (
    <Link to={to}>
      <button
        {...rest}
        className={`${rest.className} relative grid aspect-square w-fit place-items-center rounded-full bg-white p-9 after:absolute after:-z-10 after:aspect-square after:h-full after:w-full after:cursor-none after:rounded-full after:bg-white after:opacity-0 after:transition-all after:duration-1000 after:ease-in-out hover:after:scale-150 hover:after:opacity-10 focus:after:scale-150 focus:after:opacity-10 active:after:opacity-100 motion-safe:after:animate-[ping_2s_ease-in-out_infinite] motion-safe:active:after:transition motion-safe:active:after:duration-1000 md:p-12`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
