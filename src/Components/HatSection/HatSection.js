import React from "react";
import HatSectionCard from "./HatSectionCard";

function HatSection() {
  const hats = require("../../data/hats.json");

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col"> */}
          {hats.map((hat) => (
            <HatSectionCard key={hat.userId} hats={hat} />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default HatSection;
