import React from "react";
import FriendsDisplayList from "./FriendsDisplayList";

const friends = require("../../data/friends.json");

export default function FriendsDisplay() {

  return (
    <div className="friends-display-section container text-center">
      <div className="row">
        <h1>Friends Display</h1>
        {friends.map((friend) => (
          <FriendsDisplayList key={friend.fId} friend={friend} />
        ))}
      </div>
    </div>
  );
}
