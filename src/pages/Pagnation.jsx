const Pagnation = ({ time, ...rest }) => {
  return (
    <ul className="flex items-center justify-center space-x-4">
      {Array(time)
        .fill('')
        .map((_, i) => (
          <li key={i}>
            <button
              {...rest}
              className="h-2.5 w-2.5 rounded-full bg-gray-600"
            />
          </li>
        ))}
    </ul>
  );
};

export default Pagnation;
