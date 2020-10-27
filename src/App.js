import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Schedule from "./components/schedule";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col s3">
            <Sidebar />
          </div>
          <div className="col s9">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Schedule} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
