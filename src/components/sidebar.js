import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div>
        <br></br>
        <Link
          to="/"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
          }}
          className="btn btn-large waves-effect waves-light hoverable green accent-3"
        >
          Home
        </Link>
      </div>
      <br></br>
      <div>
        <Link
          to="/addGame"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
          }}
          className="btn btn-large waves-effect waves-light hoverable green accent-3"
        >
          Schedule
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
