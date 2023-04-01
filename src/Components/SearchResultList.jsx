import React from "react";
import "./SearchResultList.css";

function SearchResultList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, index) => {
        return <div className="list-item" key={index}> {result.name} </div>;
      })}
    </div>
  );
}

export default SearchResultList;
