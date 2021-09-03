import React, { useContext } from "react";

import axios from "axios";
import "./search.css";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Search() {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);

  let { q: text } = useParams();

  let history = useHistory();
  useEffect(() => {
    if (text === "") {
      return;
    }
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get(`/api/v1/search?q=${text}`);
      console.log(response.data, "search=results");
      setLoading(false);
      setData(response.data);
    };

    loadData();
  }, [text]);

  return (
    <div>
      {loading ? <h3 style={{ textAlign: "center" }}>Searching...</h3> : ""}
      {data &&
        data.map((result, index) => (
          <div
            key={index}
            className="search-list"
            style={{ display: "flex" }}
            onClick={() => {
              history.push(`/Preview/${result.id}`);
            }}
          >
            <div className="search-thumbnail">
              <img
                src={`/api/v1/file?name=${result.poster}`}
                className="search-image-dimensions"
                alt=""
              />
            </div>
            <h4>{result.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default Search;
