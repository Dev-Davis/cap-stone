import React, { useParams } from "react";

import { Link } from 'react-router-dom'

import FriendsCard from "./FriendsCard";

const friends = require("../../data/friends.json");

function Friends() {  

  console.log(friends)

  const friendCount = friends.length;

  // const displayFriends = () =>
  // const displayFriends = () => {
  //   const friendMap = friends.map((friend) => (
  //     <FriendsCard key={friend.fId} friends={friend} />
  //   ))
  // }
  return (
    <div className="friends container text-center">
      <div className="row">
        <p>You have {friendCount} friends</p>
      </div>
      <div className="row">
        {friends.slice(0,4).map((friend) => (
          <FriendsCard key={friend.fId} friends={friend} />
        ))}
        {/* {friends.length > 4 ? "Too many friends" : friendMap} */}
      </div>
      <div className="row">
        <Link to="/friends" className="friend-link">View all friends...</Link>
      </div>
    </div>
  );
}

export default Friends;
