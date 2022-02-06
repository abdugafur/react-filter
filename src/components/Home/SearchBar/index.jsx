import React from "react";
import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ value, changeInput }) => (
  <div className="search-bar-wrap">
    <SearchIcon className="search-bar-icon" />
    <input
      type="text"
      placeholder="GGWP"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
