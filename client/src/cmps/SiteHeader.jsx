import { Link } from "react-router-dom";
import styles from "./SiteHeader.css";
const headerImgLink =
  "https://img.freepik.com/free-vector/plane-flying-clouds-skyscraper-buildings_107791-13138.jpg?w=2000";
function SiteHeader({ links }) {
  return (
    <div>
      <div className="row zero-padding">
        <div className="container zero-padding">
          <div className="col-md-12">
            <img  className = "img" src={headerImgLink} alt="site logo" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row text-light bg-dark display-6 text-padding">
        <div className="col-3">
          <Link to={links.Home} className="nav-link active  ">
            <h4>Home</h4>
          </Link>
        </div>
        <div className="col-3">
          {" "}
          <h4>My Flights</h4>
        </div>
        <div className="col-3">
          <Link to={links.About} className="nav-link active  ">
            <h4>About</h4>
          </Link>
        </div>
        <div className="col-3">
          <h4>Login</h4>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;
