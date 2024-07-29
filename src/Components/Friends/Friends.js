import React from "react";

import { Link } from "react-router-dom";

import FriendsCard from "./FriendsCard";

const friends = require("../../data/friends.json");

function Friends(props) {
  const getFriends = friends.map((friend) =>
    friend.isFriends === true ? (
      <FriendsCard key={friend.fId} friends={friend} />
    ) : null
  );

  
  const count = getFriends.filter(Boolean).length;
  
  const user = props.user[0];
  
  const friendPath = `/user/${user.userId}/friends`;

  return (
    <div className="friends container text-center">
      <h5 className="text-center">Closest Freinds</h5>

      <div className="row">
        <p>
          You have
          <Link to="/user/friends" className="friend-link">
            <span className="friend-count"> {count} </span>
          </Link>
          friends
        </p>
      </div>
      <div className="row">
        {friends
          .slice(3)
          .map((friend) =>
            friend.isFriends === true ? (
              <FriendsCard key={friend.fId} friends={friend} user={user} />
            ) : null
          )}
      </div>
      <div className="row">
        <Link to={friendPath} className="friend-link">
          View all friends...
        </Link>
      </div>
    </div>
  );
}

export default Friends;
