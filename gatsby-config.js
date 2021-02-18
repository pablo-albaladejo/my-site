require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro']
        }
      }
    }
  ],
}