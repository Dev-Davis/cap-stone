import React from "react";

export default function Home() {
  return (
    <div>
      <section className="home-header text-center">
        <h1 className="home-title">Cap-Stone</h1>
        <p className="home-subtitle">
          The perfect home for hat collectors
        </p>
      </section>
      <hr />
      <section className="container">
        <section className="search-tite  text-center">
        <p className="search-text">Find your favorite hat:</p>
        </section>
        <section className="home-search ">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search....."
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </section>
      </section>
      {/* <hr /> */}
      <section>
        
      </section>
    </div>
  );
}
