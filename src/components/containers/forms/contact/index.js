
import * as React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const ContactForm = () => {
  return (
    <div sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h1>Get In Touch</h1>
      <form method="post" action="https://getform.io/f/c38433cb-4604-4907-b95f-4f4081e46ca0" sx={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
        <label>Email<input type="email" name="email" /></label>
        <label>Name<input type="text" name="name" /></label>
        <label> Message<input type="text" name="message" /></label>
        <label><input type="submit" value="Send Message" /></label>
      </form>
    </div>
  )
}
export default ContactForm