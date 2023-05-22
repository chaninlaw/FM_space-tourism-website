const Carousel = ({ lists }) => {
  const renderedLists = lists.map((list) => {
    return (
      <li key={list} className="text-white">
        {list}
      </li>
    );
  });

  return (
    <>
      <div className="container mx-auto w-10/12 py-6">
        <ul className="flex items-center justify-between gap-8">
          {renderedLists}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
