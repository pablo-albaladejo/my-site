import * as React from "react"

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
    <div>
        <SocialLink icon={<FontAwesomeIcon icon={faLinkedin}/>} caption={'pabloalbaladejomestre'} url={'https://www.linkedin.com/in/pabloalbaladejomestre'}/>
        <SocialLink icon={<FontAwesomeIcon icon={faGithub}/>} caption={'pablo-albaladejo'} url={'https://github.com/pablo-albaladejo'}/>
        <SocialLink icon={<FontAwesomeIcon icon={faStackOverflow}/>} caption={'pablo-albaladejo'} url={'https://stackoverflow.com/users/3395884/pablo-albaladejo'}/>
        <SocialLink icon={<FontAwesomeIcon icon={faTwitter}/>} caption={'palbaladejom'} url={'https://twitter.com/palbaladejom'}/>
    </div>
  )
}

export default Social
