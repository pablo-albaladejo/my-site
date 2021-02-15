import * as React from "react"
import avatar from '../../images/avatar.jpeg'

const sytle = {
  avatar: {
    borderRadius: "100%",
  }
}

const Profile = () => {
  return (
    <header>
      <div>
        <a href="#" >
          <img src={avatar} alt="" style={sytle?.avatar} />
        </a>
        <h1>
          <strong>I'm Pablo Albaladejo</strong>, a software engineer expert in challenges
      </h1>
      </div>
    </header>
  )
}

export default Profile
