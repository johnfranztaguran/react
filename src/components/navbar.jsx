import React, { Component } from "react";

//////////////      Stateless Functional Component ////////////////////
const NavBar = ({ totalCounters }) => {
  // Destructuring so that we dont need to props it all

  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
