import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import SocialLink from "../../commons/iconLink"

const Social = () => {
  return (
    <ul sx={{ display: 'flex', flex: 1, flexDirection: 'row', listStyle: 'none', justifyContent: 'center' }}>
      <li sx={{ padding: '0 1em 0 0' }}><SocialLink icon={<FontAwesomeIcon icon={faLinkedin} />} url={'https://www.linkedin.com/in/pabloalbaladejomestre'} /></li>
      <li sx={{ padding: '0 1em 0 0' }}><SocialLink icon={<FontAwesomeIcon icon={faGithub} />} url={'https://github.com/pablo-albaladejo'} /></li>
      <li sx={{ padding: '0 1em 0 0' }}><SocialLink icon={<FontAwesomeIcon icon={faStackOverflow} />} url={'https://stackoverflow.com/users/3395884/pablo-albaladejo'} /></li>
      <li sx={{ padding: '0 1em 0 0' }}><SocialLink icon={<FontAwesomeIcon icon={faTwitter} />} url={'https://twitter.com/palbaladejom'} /></li>
    </ul >
  )
}

export default Social
