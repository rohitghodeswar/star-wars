import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { searchPlanets } = this.props;
    return (
      <form>
        <div className="form-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search planets here..."
            ref="searchInput"
            onChange={() => {
              searchPlanets(this.refs.searchInput.value);
            }}
          />
        </div>
      </form>
    );
  }
}
