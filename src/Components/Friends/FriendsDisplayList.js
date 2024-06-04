import React from "react";
import { Link } from "react-router-dom";

export default function FriendsDisplayList(props) {
  // ***** variables ***** //
  const friend = props.friend;
  const profilePath = `/profile/${friend.fId}`;

  console.log(props)

  return (
    <div className="col">
      <hr />
      <section className="user-friend-section">
        <section className="user-header">
          <Link to={profilePath}>
            <img
              src={props.friend.fImg}
              className="friend-list-img"
              alt={props.friend.alt}
            />
          </Link>
        </section>
        <section className="user-header">
          <h5 className="friend-name-display">{props.friend.fName}</h5>
        </section>
      </section>
      <hr />
    </div>
  );
}
