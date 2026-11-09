import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { DashboardWrapper } from "../pagesComponents/Dashboard";

const SearchInput = () => {
  const { filters, setFilters } = useContext(DashboardWrapper);

  const onSearchEvent = (e) => {
    setFilters({
      ...filters,
      title: e.target.value.toLowerCase(),
      isFree: false,
      category: "",
      dateType: null,
      price: 0,
    });
  };
  
  return (
    <div className="search-input">
      <IoSearch size={18} />
      <input
        type="text"
        value={filters.title}
        placeholder="Search events... (e.g. concerts, tech, workshops)"
        onChange={onSearchEvent}
      />
    </div>
  );
};

export default SearchInput;
