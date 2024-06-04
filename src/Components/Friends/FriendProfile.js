import React from "react";
import { useParams } from "react-router-dom";

// const friends = require("../../data/friends.json");

export default function FriendProfile(props) {
  // ***** variables ***** //
  const friends = props.friends;
  const { id } = useParams();

  // ***** methods ***** //
  const userInfo = friends.find(friend => friend.fId === id)

  return (
    <div className="container text-center">
      <h1>{userInfo.fName}</h1>
      <img src={userInfo.fImg} alt={userInfo.alt} className="userInfo-profile-img" />
      <p>{userInfo.aboutMe}</p> 
    </div>
  );
}
