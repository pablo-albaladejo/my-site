import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import avatarImg from '../../../images/avatar.jpeg'
import backgroundImg from '../../../images/background.jpg'
import overlayImg from '../../../images/overlay.png'
import Avatar from "../../commons/avatar"
import Social from "../social"

const Profile = () => {
  return (
    <div sx={{
      backgroundAttachment: 'scroll',
      backgroundPosition: '0 0, 50%',
      backgroundSize: 'auto, cover',
      backgroundColor: "primary",
      backgroundImage: `url(${overlayImg}), url(${backgroundImg})`,
      left: 'auto',
      padding: ' 6em 4em',
      position: 'relative',
      textAlign: ['center', 'center', 'right'],
      top: 'auto',
      display: 'block',
      width: ['100%', '100%', '35%']
    }}>
      <Avatar img={avatarImg} />
      <h1 sx={{variant: 'text.heading'}} >
        <strong>I'm Pablo Albaladejo</strong>, a software engineer expert in challenges
      </h1>
      <Social />
    </div>
  )
}

export default Profile
