import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
  return (
    <div>
      <Profile name={props.users[0].name} login={props.users[0].login}/>
      <Profile name={props.users[1].name} login={props.users[1].login}/>
    </div>
  )
}

