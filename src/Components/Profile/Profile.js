import React from 'react'
import HatSection from '../HatSection/HatSection'
import Friends from '../../Friends/Friends'
import UserSection from '../UserSection/UserSection'

function Profile() {
  return (
    <div>
      <UserSection />
      <Friends />
      <HatSection />
    </div>
  )
}

export default Profile