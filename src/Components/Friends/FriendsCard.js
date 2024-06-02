import React from "react";

import { Link, useParams } from "react-router-dom";

export default function FriendsCard(props) {
  const friend = props.friends;
  
  return (
    <div className="friend-card-border col-3">
      <Link to="/profile/:id" className="f-image-display">
        <img src={friend.fImg} alt={friend.alt} className="friend-list-pics" />
      </Link>
      <Link to="/profile/:id" className="f-fname-display">
        <p className="friend-name-display">{friend.fName}</p>
      </Link>
    </div>
  );
}
