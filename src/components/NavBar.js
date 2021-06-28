import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="MenuBar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/Contacts">Contacts</Link>
    </div>
  );
};

export default NavBar;