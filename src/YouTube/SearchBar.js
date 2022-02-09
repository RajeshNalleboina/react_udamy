import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
    this.props.onSubmit({ searchText: e.target.value });
  };

  onSubmitData = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitData}>
          <div className="filed">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
