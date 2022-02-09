import React, { useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import unspalash from "./api/unspalash";
// const PicsDirectory = () => {
//   const [value, setValue] = useState("");
//   const searchValue = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar searchValue={searchValue} value={value} />
//       <ImageList />
//     </div>
//   );
// };

class PicsDirectory extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unspalash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default PicsDirectory;
