import React from 'react'
import { useParams } from 'react-router-dom'

import UserSection from '../UserSection/UserSection'

const friends = require("../../data/friends.json");

export default function FriendProfile() {
  // ***** methods ***** //
  const id = useParams();

  // const friendId = friends.indexOf(id)

  // console.log(friendId)

  return (
    <div>
      <UserSection />
    </div>
  )
}
