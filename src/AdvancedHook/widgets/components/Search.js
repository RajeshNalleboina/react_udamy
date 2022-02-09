import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("programming");
  const [result, setResult] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(search);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(search);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    const searchArticle = async () => {
      // wikipedia API search
      // https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm, //state
        },
      });
      setResult(data?.query?.search);
    };

    searchArticle();
  }, [debouncedTerm]);

  const onSearchData = (e) => {
    setSearch(e.target.value);
  };
  // rendered list
  const renderedResult =
    result.length > 0 &&
    result.map((result) => {
      return (
        <div key={result.pageid} className="item">
          {/* <div className="right floated content"> */}
          {/* </div> */}
          <div className="content">
            <a
              className="ui"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              <div className="header">{result.title}</div>
            </a>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      );
    });

  return (
    <div>
      <div className="ui form">
        <div className="filed">
          <label>Search</label>
          <input type="text" value={search} onChange={onSearchData} />
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};

export default Search;
