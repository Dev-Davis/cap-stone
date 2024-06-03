import React from 'react'

const friends = require("../../data/friends.json");

export default function FriendProfile() {
  // ***** methods ***** //
  const singleUser = friends.filter((x) => x.fId === '06')

  // ***** variables ***** //
  const solo = singleUser[0];

  return (
    <div className="container text-center">
      <h1>{solo.fName}</h1>
      <img src={solo.fImg} alt={solo.alt} className="solo-profile-img" />
    </div>
  )
}
