import React from 'react'
import HatSection from '../HatSection/HatSection'
import Friends from '../Friends/Friends'
import UserSection from '../UserSection/UserSection'
import HatSubmitForm from '../HatSubmitForm/HatSubmitForm'

function Profile() {
  return (
    <div>
      <UserSection />
      <HatSubmitForm />
      <Friends />
      <HatSection />
    </div>
  )
}

export default Profile