import * as React from "react"

import avatarImg from '../../../images/avatar.jpeg'
import Avatar from "../../commons/avatar"
import Social from "../social"

const Profile = () => {
  return (
    <div>
      <Avatar img={avatarImg} />
      <h1>
        <strong>I'm Pablo Albaladejo</strong>, a software engineer expert in challenges
      </h1>
      <Social />
    </div>
  )
}

export default Profile
