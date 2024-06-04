import React from "react";
import FriendsDisplayList from "./FriendsDisplayList";

// const friends = require("../../data/friends.json");

export default function FriendsDisplay(props) {
  // ***** variables ***** //
  const friends = props.friends;
  const user = props.user;

  console.log(props);

  return (
    <div className="container text-center">
      <h1>{user.userName}'s Display</h1>
      <div className="row all-friends">
        {friends.map((friend) =>
          friend.isFriends === true ? (
            <FriendsDisplayList key={friend.fId} friend={friend} />
          ) : null
        )}
      </div>
    </div>
  );
}
