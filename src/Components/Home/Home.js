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
      <section>
        <section className="search-title text-center">
        <p className="search-text">Find your favorite hat:</p>
        </section>
        <section className="home-search">
          <form class="d-flex">
            <input
              class="form-control me-2 search-border"
              type="search"
              placeholder="Search....."
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </section>
      </section>
      <hr />
      <section>
        
      </section>
    </div>
  );
}
