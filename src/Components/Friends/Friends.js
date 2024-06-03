import React, { useParams } from "react";

import { Link } from "react-router-dom";

import FriendsCard from "./FriendsCard";

const friends = require("../../data/friends.json");

function Friends() {

  const getFriends = friends
    // .slice(0, 4)
    .map((friend) =>
      friend.isFriends === true ? (
        <FriendsCard key={friend.fId} friends={friend} />
      ) : null
    );

  return (
    <div className="friends container text-center">
      <div className="row">
        <p>
          You have
          <Link to="/friends" className="friend-link">
            <span className="friend-count"> {getFriends.length} </span>
          </Link>
          friends
        </p>
      </div>
      <div className="row">
        {friends
          // .slice(0, 4)
          .map((friend) =>
            friend.isFriends === true ? (
              <FriendsCard key={friend.fId} friends={friend} />
            ) : null
          )}
      </div>
      <div className="row">
        <Link to="/friends" className="friend-link">
          View all friends...
        </Link>
      </div>
    </div>
  );
}

export default Friends;
