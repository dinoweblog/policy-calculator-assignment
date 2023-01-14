import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link to="/policy-calculator">Policy Calculator</Link>
        </li>
        <li>
          <Link to="/illustration">Illustration</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
