import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Schedule from "./components/schedule";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(search) {
    this.setState({ search: search });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar search={this.state.search} updateSearch={this.updateSearch} />
          <div className="row">
            <div className="col s3">
              <Sidebar />
            </div>
            <div className="col s9">
              <Route
                exact
                path="/"
                component={() => (
                  <Home
                    search={this.state.search}
                    updateSearch={this.updateSearch}
                  />
                )}
              />
              <Route exact path="/schedule" component={Schedule} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
