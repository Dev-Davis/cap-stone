import React from "react";
import { Link } from "react-router-dom";

export default function FriendsDisplayList(props) {
  // ***** variables ***** //
  const friend = props.friend;

  console.log(friend);
  const profilePath = `/user/friend/${friend.fId}`;

  return (
    <div className="col-lg-4 text-center">
      {/* <hr /> */}
      <section className="col-lg-1 user-friend-section">
        <section className="user-header">
          <h5 className="friend-name-display">{props.friend.fName}</h5>
        <br />
          <Link to={profilePath}>
            <img
              id={friend.fId}
              src={friend.fImg}
              className="friend-list-img"
              alt={friend.alt}
            />
          </Link>
        </section>
      </section>
    </div>
  );
}
