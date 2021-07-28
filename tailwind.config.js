const colors = require("tailwindcss/colors");
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.emerald[500], //* 主要 colors.amber.500
        wraning: colors.yellow[500], // * 警告 colors.amber.500
        secondary: colors.coolGray[500], // * 次要colors.coolGray.500
        success: {
          hover: colors.green[400],
          DEFAULT: colors.green[500]
        }, //* colors.amber.600
        link: colors.blue[300],
        "link-hover": colors.blue[500],
        info: colors.teal[500],
        danger: colors.red[800],
        light: colors.blueGray[50],
        dark: colors.blueGray[800],
        border: colors.trueGray[300]
      },
      gridTemplateRows: {
        layout: "75px auto"
      },
      gap: {
        layout: "5px"
      }
    }
  }
};
