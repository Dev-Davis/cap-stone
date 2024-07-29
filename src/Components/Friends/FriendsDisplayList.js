import React from "react";
import { Link } from "react-router-dom";

export default function FriendsDisplayList(props) {
  // ***** variables ***** //
  const friend = props.friend;

  console.log(friend)
  const profilePath = `/user/${friend.fId}`;

  return (
    <div className="col-4 text-center">
      {/* <hr /> */}
      <section className="user-friend-section">
        <section className="user-header">
          <h5 className="friend-name-display">{props.friend.fName}</h5>
        </section>
        <Link to={profilePath}>
          <img
            id={friend.fId}
            src={friend.fImg}
            className="friend-list-img"
            alt={friend.alt}
          />
        </Link>
      </section>
    </div>
  );
}
