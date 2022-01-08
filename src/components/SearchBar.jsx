import React, { Component } from "react"

import "./searchBar.css"
import SearchButton from "./SearchButton"
export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container container d-flex justify-content-between ">
        <SearchButton
          title="Location"
          label="Where are you going?"
        ></SearchButton>
        <div className="divider" />
        <SearchButton
          title="Check in"
          label="Add dates"
          className="align-self-stretch"
        ></SearchButton>

        <div className="divider"> </div>
        <SearchButton title="Check out" label="Add dates"></SearchButton>

        <div className="divider" />
        <SearchButton
          title="Guests"
          label="Add guests"
          showIcon="true"
        ></SearchButton>
      </div>
    )
  }
}
