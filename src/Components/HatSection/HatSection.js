import React from "react";
import HatSectionCard from "./HatSectionCard";
import { Link } from "react-router-dom";

function HatSection() {
  const hats = require("../../data/hats.json");

  return (
    <div className="container hat-section">
      <h3 className="text-center">Top 3 Hats</h3>
      <section className="hat-holder">
        <div className="row">
          {hats
            .slice(0, 3)
            .map((hat) =>
              hats.length > 3 ? (
                <HatSectionCard key={hat.hatId} hats={hat} />
              ) : null
            )}
        </div>
      </section>
      <section className="view-all-hats text-center">
        <Link to="/all-hats/user">
          <p className="all-hats-text">View all hats...</p>
        </Link>
      </section>
    </div>
  );
}

export default HatSection;
