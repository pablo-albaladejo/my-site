import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const sytle = {
  avatar: {
    borderRadius: "100%",
    width: '6.25em'
  }
}

const Avatar = ({ img }) => {
  return (
    <a href="#">
      <img src={img} alt="" sx={sytle?.avatar} />
    </a>
  )
}

export default Avatar
