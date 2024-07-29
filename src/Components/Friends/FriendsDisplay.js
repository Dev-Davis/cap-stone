import React from "react";
import FriendsDisplayList from "./FriendsDisplayList";

// const friends = require("../../data/friends.json");

export default function FriendsDisplay(props) {
  // ***** variables ***** //
  const friends = props.friends;
  const user = props.user;

  return (
    <div className="container text-center">
      <h1>{user.userName}'s Display</h1>
      <div className="row all-friends">
        {/* The full friend list */}
        {friends.map((friend) =>
          friend.isFriends === true ? (
            <FriendsDisplayList key={friend.fId} friend={friend} props={props} />
          ) : null
        )}
      </div>
    </div>
  );
}
