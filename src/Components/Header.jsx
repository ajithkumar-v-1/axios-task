
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div>
      <center>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">


        <NavLink className="navbar-brand" to="/">
          <h2>DASHBOARD FOR CRUD</h2>
          
        </NavLink>
        
        {/* Nav bar  */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">

          {/* link for Home */}
          <h5><li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            </h5>


            {/* Link for Users Data */}
            <h5><li className="nav-item">
                
                <NavLink
                            
                to="/ListPages"
                className="nav-link"
                activeClassName="active"
              >
                 Users Data
              </NavLink>
            </li></h5>

          </ul>
        </div>
      </div>
    </nav>
    
    </center>
    </div>
  );
}

export default Header;