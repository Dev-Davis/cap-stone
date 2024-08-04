import React from "react";

import { Link } from "react-router-dom";

export default function FriendsCard(props) {
  const friend = props.friends;
  const profilePath = `/user/friend/${friend.fId}`;

  console.log(props)

  return (
    <div className="friend-card-border col-3">
      <Link to={profilePath} className="f-image-display">
        <img src={friend.fImg} alt={friend.alt} className="friend-list-pics" />
      </Link>
      <Link to={profilePath} className="f-fname-display">
        <p className="friend-name-display">{friend.fName}</p>
      </Link>
    </div>
  );
}
