import React from "react";
import UserHatsCard from "./UserHatsCard";
import HatSectionCard from "./HatSectionCard";

function UserHats(props) {
  const hats = props.hats;
  const user = props.user;

  return (
    <div className="container">
      <section className="hat-title-section">
        <h3 className="all-hats-title text-center">{user.userName}'s Hats</h3>
      </section>
      <section className="all-hats-section">
        <div className="row">
          {hats.map((hat) => (
            <HatSectionCard key={hat.hatId} hats={hat} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default UserHats;
