import React from "react";

import { Link, useParams } from "react-router-dom";
import FriendProfile from "./FriendProfile";

export default function FriendsCard(props) {
  const friend = props.friends;
  const profilePath = `/profile/${friend.fId}`;

  return (
    <div className="friend-card-border col-3">
      {/* <Link to={profilePath} className="f-image-display"> */}
      <img src={friend.fImg} alt={friend.alt} className="friend-list-pics" />
      {/* </Link> */}
      {/* <Link to={profilePath} className="f-fname-display"> */}
      <p className="friend-name-display">{friend.fName}</p>
      {/* </Link> */}
    </div>
  );
}
