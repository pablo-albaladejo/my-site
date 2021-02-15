import * as React from "react"
import Profile from '../profile'
const MainLayout = ({ children }) => {
  return (
    <main>
      <Profile />
      {children}
    </main>
  )
}

export default MainLayout
