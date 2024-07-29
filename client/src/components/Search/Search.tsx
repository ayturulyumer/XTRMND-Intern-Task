import searchIcon from "../../assets/search.svg";

interface searchProps {
  onSearch: (input: string) => void;
}

export default function Search({ onSearch }: searchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  };
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search by name"
        onChange={handleChange}
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <img src={searchIcon} alt="search" className="h-4 w-4" />
      </button>
    </div>
  );
}
