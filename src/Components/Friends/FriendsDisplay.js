import React from "react";
import FriendsDisplayList from "./FriendsDisplayList";

// const friends = require("../../data/friends.json");

export default function FriendsDisplay(props) {
  // ***** variables ***** //
  const friends = props.friends;

  return (
    <div className="friends-display-section container text-center">
      <div className="row">
        <h1>Friends Display</h1>
        {friends.map((friend) => friend.isFriends === true ? (
          <FriendsDisplayList key={friend.fId} friend={friend} /> 
        ) : null)}
      </div>
    </div>
  );
}
