import React, { Component } from "react";
import HeaderText from "./../common/HeaderText";
import Search from "./../search-form/Search";
import SearchResults from "./../search-results/SearchResults";

export default class PlanetSearchForm extends Component {
  componentDidMount() {
    this.props.searchPlanets("");
  }

  onSearchPlanets(text) {
    this.props.searchPlanets(text);
  }

  onLogout() {
    this.props.history.push("/");
  }

  render() {
    const { searchInfo, error, loginInfo } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <span className="navbar-brand">
            <HeaderText text="STAR WARS" />
          </span>

          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            onClick={() => this.onLogout()}
          >
            Logout
          </button>
        </nav>
        <div className="container">
          <h2 className="mt-4">
            Welcome <span className="text-warning">{loginInfo.login.name}</span>{" "}
            to Star Wars Planet Collection
          </h2>
          <Search
            searchPlanets={searchText => this.onSearchPlanets(searchText)}
          />
          {searchInfo &&
            searchInfo.results &&
            searchInfo.results.length && (
              <SearchResults results={searchInfo.results} />
            )}
          {error && !error.success && <p>{error.message}</p>}
        </div>
      </React.Fragment>
    );
  }
}
