import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <form class="d-flex input-group w-auto">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <Link to={`/search?q=${value}`}>
            <i class="fas fa-search"></i>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SearchBox;
