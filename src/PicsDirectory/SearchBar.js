import React, { useState } from "react";

// const SearchBar = ({ onSubmit }) => {
//   const [value, setValue] = useState("");
//   const searchValue = (e) => {
//     setValue(e.target.value);
//     onSubmit();
//   };

//   return (
//     <div className="ui segment">
//       <form className="ui form" onSubmit={onSubmit}>
//         <div className="filed">
//           <label>Image Search</label>
//           <input type="text" onChange={searchValue} value={value} />
//         </div>
//       </form>
//     </div>
//   );
// };

class SearchBar extends React.Component {
  state = { term: "" };
  onSubmitForm = (e) => {
    e.preventDefault();
    this?.props?.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="filed">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
