export default {
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: 'hsla(0,0%,100%,.4)'
  },
  fonts: {
    body: "Source Sans Pro, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, '1.5em', 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '16px',
      h1: {
        fontSize: 5,
        color: 'secondary'
      },
      strong: {
        color: '#fff',
        fontWeight: 'blod'
      } 
    },
  },
}