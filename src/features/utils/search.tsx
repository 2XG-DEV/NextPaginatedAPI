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
      className="w-full max-w-md px-4 py-2 border rounded"
    />
  );
};

export default SearchBar;
