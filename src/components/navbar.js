function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Search
        </a>
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
export default Navbar;
