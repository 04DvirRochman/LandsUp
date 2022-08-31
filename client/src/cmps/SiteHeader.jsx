import { Link } from "react-router-dom";

function SiteHeader({ links }) {
  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="col-md-12">
            <img
              height="250"
              width="100%"
              src="https://www.ch-aviation.com/images/stockPhotos/5792/7faf329cd7728ade1b67c3f8cd7ba9c5a22227c4.jpg"
              alt="site logo"
            />
          </div>
        </div>
      </div>
      <div class="d-flex flex-row text-light bg-dark display-6">
        <div class="col-3">
          <Link to={links.Home} className="nav-link active  ">
            Home
          </Link>
        </div>
        <div class="col-3">My Flights</div>
        <div class="col-3">
          <Link to={links.About} className="nav-link active  ">
            About
          </Link>
        </div>
        <div class="col-3">Login</div>
      </div>
    </div>
  );
}


export default SiteHeader;
