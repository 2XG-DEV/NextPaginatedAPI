type Props = {
  defaultValue: string;
  placeholder?: string;
  name: string;
};

const SearchBar: React.FC<Props> = ({ defaultValue, placeholder, name }) => {
  return (
    <input
      type="search"
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
    />
  );
};

export default SearchBar;
