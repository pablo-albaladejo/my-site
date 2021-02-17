import * as React from "react"
import Profile from '../containers/profile'
const MainLayout = ({ children }) => {
  return (
    <main>
      <Profile />
      {children}
    </main>
  )
}

export default MainLayout
