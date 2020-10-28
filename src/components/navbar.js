import React, { Component } from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.props.updateSearch(event.target.value);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="center ">
            <li>
              <form>
                <div class="input-field">
                  <input
                    id="search"
                    type="search"
                    required
                    onChange={this.updateSearch}
                  ></input>
                  <label class="label-icon" for="search">
                    <i class="material-icons">search</i>
                  </label>

                  <i class="material-icons">close</i>
                </div>
              </form>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Admin</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
