import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
const SearchSidebar = ({ className = "" }) => {
  const [search, setSearch] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <form
      className={`searchSidebarWrapper ${className}`}
      onSubmit={submitHandler}
    >
      <input
        placeholder="search here"
        value={search}
        // className={}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button>
        <SearchIcon />
      </Button>
    </form>
  );
};
export default SearchSidebar;
