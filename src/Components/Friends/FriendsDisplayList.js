import React from "react";

const friends = require("../../data/friends.json");

export default function FriendsDisplayList(props) {

  return (
    <div className="col-4">
      <section className="user-friend-section">
        <section className="user-header">
          <img src={props.friend.fImg} className="friend-list-img" alt={props.friend.alt} />
        </section>
        <section className="user-header">
          <h5 className="friend-name-display">{props.friend.fName}</h5>
        </section>
      </section>
      <hr />
    </div>
  );
}
