const colors = require("tailwindcss/colors");

const theme = {
  primary: colors.emerald[500], //* 主要 colors.amber.500
  warning: colors.yellow[500], // * 警告 colors.amber.500
  secondary: colors.coolGray[400], // * 次要colors.coolGray.500
  success: {
    hover: colors.green[400],
    DEFAULT: colors.green[500]
  },
  link: colors.blue[300],
  "link-hover": colors.blue[500],
  info: colors.teal[500],
  danger: colors.red[800],
  light: colors.blueGray[50],
  dark: colors.blueGray[800],
  border: colors.trueGray[300]
};

module.exports = { colors, theme };
