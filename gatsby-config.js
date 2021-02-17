require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
  ],
}