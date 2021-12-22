module.exports = {
  plugins: {
    stylelint: {
      fix: true
    },
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: "default" // 压缩
    }
  }
};
