const typography = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "1.0625rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  homeTitlesLeft: {
    fontSize: "3.3rem",
    fontWeight: 600,
    lineHeight: 1.25,
    float: 'right',
    fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;',
    transform: 'translateY(350%)',
  },
  homeTitlesRight: {
    fontSize: "3.3rem",
    fontWeight: 600,
    lineHeight: 1.25,
    display: 'flex',
    fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;',
    transform: 'translateY(350%)',
    paddingLeft: 20
  },
  homeSubTitlesLeft: {
    fontSize: "1.3rem",
    color: '#757575',
    lineHeight: 1.4,
    float: 'right',
    fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;',
    transform: 'translateY(330%)',
    marginRight: -380
  },
  homeSubTitlesRight: {
    color: '#757575',
    fontSize: "1.3rem",
    lineHeight: 1.25,
    display: 'flex',
    fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;',
    transform: 'translateY(300%)',
    textAlign: 'end',
    marginLeft: 89
  },
  body1: {
    fontSize: 13,
  },
  button: {
    textTransform: "none",
  },
};

export default typography;
