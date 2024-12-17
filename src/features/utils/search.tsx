type Props = {
  defaultValue: string;
  placeholder?: string;
  name: string;
};

const SearchBar: React.FC<Props> = ({ defaultValue, placeholder, name }) => {
  return (
    <form action="" className="mb-4">
      <input
        type="search"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full max-w-md px-4 py-2 border rounded"
      />
    </form>
  );
};

export default SearchBar;
