import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Helmet from 'react-helmet'
import Profile from '../containers/profile'

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>{'Pablo Albaladejo'}</title>
        <meta property="og:url" content="https://pabloalbaladejo.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pablo Albaladejo" />
        <meta property="og:description" content="Software engineer expert in challenges" />
        <meta property="og:image" content="https://i0.wp.com/www.ccrayz.com/wp-content/uploads/2017/01/dfgdgfdgfdgfdgfdg.jpg?resize=820%2C312&ssl=1" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        height: '100vh',
      }}>
        <Profile />
        {children}
      </main>
    </>
  )
}

export default MainLayout
