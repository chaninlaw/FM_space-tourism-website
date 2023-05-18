const lis = [];
const Pagination = ({ count = 0, ...rest }) => {
  if (lis.length < count) {
    for (let i = 0; i < count; i++) {
      lis.push(
        <li key={i}>
          <button
            {...rest}
            className={`${rest.className} h-2.5 w-2.5 rounded-full bg-gray-600`}
          />
        </li>
      );
    }
  }
  return <ul className="flex items-center justify-center space-x-4">{lis}</ul>;
};

export default Pagination;
