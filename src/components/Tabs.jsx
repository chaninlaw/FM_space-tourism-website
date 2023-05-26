const Tabs = ({ data, activeIndex, handleDisplay, page }) => {
  if (page === 'destinations') {
    const renderTabs = Object.keys(data).map((key, index) => {
      const isActive = index === activeIndex;
      return (
        <p
          key={key}
          onClick={() => handleDisplay(index)}
          className={`${
            isActive && 'border-b-[3px] border-b-white text-white'
          } cursor-pointer p-1 text-accent`}
        >
          {key.toUpperCase()}
        </p>
      );
    });
    return <>{renderTabs}</>;
  } else if (page === 'crew') {
    const renderTabs = data.map((_, index) => {
      const isActive = index === activeIndex;
      return (
        <li key={index}>
          <button
            className={`${
              isActive && '!bg-white '
            } h-2.5 w-2.5 rounded-full bg-gray-600`}
            onClick={() => handleDisplay(index)}
          ></button>
        </li>
      );
    });
    return <>{renderTabs}</>;
  } else if (page === 'technology') {
    const renderTabs = data.map((_, index) => {
      const isActive = index === activeIndex;
      return (
        <li key={index}>
          <button
            className={`${
              isActive && `!bg-white text-black`
            } h-10 w-10 rounded-full border border-gray-700 bg-transparent font-belle md:h-16 md:w-16 md:text-2xl`}
            onClick={() => handleDisplay(index)}
          >
            {index + 1}
          </button>
        </li>
      );
    });
    return <>{renderTabs}</>;
  }
};

export default Tabs;
