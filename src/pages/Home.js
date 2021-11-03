import { Link } from "react-router-dom";
import ContactBar from "../components/ContactBar";

const Home = () => {
  return (
    <div>
      <div>
        <p>{"<p>If you want to know me</p>"}</p>
        <Link to="/about">{"<button>Click me!</button>"}</Link>
      </div>
      <ContactBar />
    </div>
  );
}

export default Home;