import * as React from "react"

const SocialLink = ({icon, caption, url}) => {
  return (
    <div>
      {icon}
      <a href={url}>{caption}</a>
    </div>
  )
}

export default SocialLink
