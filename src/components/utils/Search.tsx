import React from "react";
import search from "../../assets/img/fi_search.png";
import "../../css/Search.css";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <label className="form-label fw-bolder">Từ khóa</label>
      <div className="search-box form-control rounded border border-secondary">
        <input
          type="text"
          id="exampleInputPassword1"
          placeholder="Nhập từ khóa"
        />
        <span className="d-flex align-items-center">
          <img alt="" src={search} />
        </span>
      </div>
    </div>
  );
};

export default Search;
