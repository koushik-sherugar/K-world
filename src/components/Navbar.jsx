import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          k-World
        </NavLink>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/search">
                search image
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="container-fluid nav_bg">
    //   <div className="row">
    //     <div className="col-10 mx-auto">
    //       <nav className="navbar navbar-expand-lg navbar-light">
    //         <div className="container-fluid">
    //           <NavLink className="navbar-brand" to="/">
    //             k- world
    //           </NavLink>
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarSupportedContent"
    //             aria-controls="navbarSupportedContent"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div
    //             className="collapse navbar-collapse"
    //             id="navbarSupportedContent"
    //           >
    //             <ul
    //               className="navbar navbar-nav ml-auto mb-1 mb-lg-0"
    //               id="nav_links"
    //             >
    //               <li className="nav-item">
    //                 <NavLink
    //                   activeClassName="menu_active"
    //                   exact
    //                   className="nav-link active"
    //                   aria-current="page"
    //                   to="/"
    //                 >
    //                   Home
    //                 </NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink
    //                   activeClassName="menu_active"
    //                   exact
    //                   className="nav-link"
    //                   to="/services"
    //                 >
    //                   Services
    //                 </NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink
    //                   activeClassName="menu_active"
    //                   exact
    //                   className="nav-link"
    //                   to="/about"
    //                 >
    //                   About
    //                 </NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink
    //                   activeClassName="menu_active"
    //                   exact
    //                   className="nav-link"
    //                   to="/contact"
    //                 >
    //                   contact
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Navbar;
