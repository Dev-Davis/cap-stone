import React from "react";
import { useParams } from "react-router-dom";

// const friends = require("../../data/friends.json");

export default function FriendProfile(props) {
  // ***** variables ***** //
  const friends = props.friends;
  const { id } = useParams();

  // ***** functions ***** //

  // ***** methods ***** //
  const userInfo = friends.find((friend) => friend.fId === id);

  return (
    <div className="container text-center">
      <section className="friend-name-section">
        <h3>{userInfo.fName}</h3>
      </section>
      <section className="friend-img-section">
        <img
          src={userInfo.fImg}
          alt={userInfo.alt}
          className="userInfo-profile-img"
        />
      </section>
      <hr />
      <section className="friend-about-section">
        <p className="friend-about-me">{userInfo.aboutMe}</p>
      </section>
    </div>
  );
}
