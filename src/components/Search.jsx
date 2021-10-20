import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState("");
  const InputEvent = (Event) => {
    const data = Event.target.value;
    // console.log(data);
    setImg(data);
  };
  return (
    <div>
      <h1>Search for the image</h1>
      <form class="d-flex mx-auto mb-3 mt-5 w-25">
        <input
          class="form-control me-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={img}
          onChange={InputEvent}
        />
      </form>
      <div className="d-flex mx-auto mb-3 mt-5">
        <div className="mx-auto">
          {img === "" ? null : <SearchResult name={img} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
