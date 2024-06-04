import React from "react";
import { Link } from "react-router-dom";

export default function FriendsDisplayList(props) {
  // ***** variables ***** //
  const friend = props.friend;
  const profilePath = `/profile/${friend.fId}`;

  return (
    <div className="col-4">
      <section className="user-friend-section">
        <Link to={profilePath}>
          <section className="user-header">
            <img
              src={props.friend.fImg}
              className="friend-list-img"
              alt={props.friend.alt}
            />
          </section>
          <section className="user-header">
            <h5 className="friend-name-display">{props.friend.fName}</h5>
          </section>
        </Link>
      </section>
      <hr />
    </div>
  );
}
