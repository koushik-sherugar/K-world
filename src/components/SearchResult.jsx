import React from "react";
import Search from "./Search";

const SearchResult = (props) => {
  const image = `https://source.unsplash.com/600x400/?${props.name}`;

  return (
    <>
      <img src={image} alt="result image" />
    </>
  );
};
export default SearchResult;
