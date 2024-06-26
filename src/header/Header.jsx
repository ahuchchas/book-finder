/* eslint-disable react/prop-types */
import SearchBox from "./SearchBox";

export default function Header({ onSearch, onSort }) {
  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2024</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          <SearchBox onSearch={onSearch} />
        </div>

        <div className="flex items-stretch space-x-3">
          <select
            className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
            name="sortBy"
            id="sortBy"
            onChange={(e) => onSort(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="year_asc">Publication Year (Oldest)</option>
            <option value="year_desc">Publication Year (Newest)</option>
          </select>
        </div>
      </div>
    </header>
  );
}
