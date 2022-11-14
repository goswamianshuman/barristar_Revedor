import React from "react";
import { tags } from "../../data/data";

const Tags = () => {
  return (
    <div className="tagsWrap">
      <h3>Tags</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tags;
