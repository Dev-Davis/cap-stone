import React from 'react'
import UserHatsCard from './UserHatsCard';

function UserHats(props) {
  const hats = props.hats;
  const user = props.user;

  return (
    <div>
      <h1 className="user-hats text-center">{user.userName}'s Hats</h1>
      {hats.map((hat) => (
        <UserHatsCard key={hat.hatId} hats={hats} />
      ))}
    </div>
  )
}

export default UserHats

