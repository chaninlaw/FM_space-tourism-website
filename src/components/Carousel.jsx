const Carousel = ({ children, onDisplay, index }) => {
  return (
    <div className="relative my-8">
      {children}
      <button
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full w-1/2 cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
        onClick={() => onDisplay(index - 1)}
      >
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full w-1/2 cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
        onClick={() => onDisplay(index + 1)}
      >
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
