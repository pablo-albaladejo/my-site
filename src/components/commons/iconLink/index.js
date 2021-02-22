import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const SocialLink = ({ icon, url }) => {
  return (
    <div>
      <a href={url} sx={{color: 'secondary', padding: '0 1em 0 0', fontSize: '1.5em' }}>{icon}</a>
    </div>
  )
}

export default SocialLink
