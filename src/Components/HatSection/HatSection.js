import React from "react";
import HatSectionCard from "./HatSectionCard";

function HatSection() {
  const hats = require("../../data/hats.json");

  return (
    <div className="container">
      <section className="hat-holder">
        <div className="row">
          {/* <div className="col"> */}
          {hats.map((hat) => (
            <HatSectionCard key={hat.hatId} hats={hat} />
          ))}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default HatSection;
