import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        {/* <nav class="navbar navbar-light bg-light"> */}

        <div class="container-fluid">
          <section className="nav-links">
            <Link to="/" class="navbar-brand">
              <h4>Cap-stone</h4>
            </Link>
            <Link to="/profile" class="navbar-brand">
              <p>Profile</p>
            </Link>
          </section>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Find a hat you like..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
