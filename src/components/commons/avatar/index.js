import * as React from "react"

const sytle = {
  avatar: {
    borderRadius: "100%",
  }
}

const Avatar = ({ img }) => {
  return (
    <a href="#" >
      <img src={img} alt="" style={sytle?.avatar} />
    </a>
  )
}

export default Avatar
