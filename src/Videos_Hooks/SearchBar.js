import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const onSubmitData = (e) => {
    e.preventDefault();
    onSubmit(searchText);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmitData}>
        <div className="filed">
          <label>Video Search</label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
