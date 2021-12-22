const { theme } = require("theme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: {
    enabled: true,
    content: ["**/*"],
    safelist: Object.keys(theme).map((v) => new RegExp(`${v}$`, "g"))
  },
  variants: {
    accessibility: ["responsive", "focus-within", "focus", "important"],
    alignContent: ["responsive", "important"],
    alignItems: ["responsive", "important"],
    alignSelf: ["responsive", "important"],
    animation: ["responsive", "important"],
    appearance: ["responsive", "important"],
    backgroundAttachment: ["responsive", "important"],
    backgroundClip: ["responsive", "important"],
    backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "important"],
    backgroundImage: ["responsive", "important"],
    backgroundOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    backgroundPosition: ["responsive", "important"],
    backgroundRepeat: ["responsive", "important"],
    backgroundSize: ["responsive", "important"],
    borderCollapse: ["responsive", "important"],
    borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "important"],
    borderOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    borderRadius: ["responsive", "important"],
    borderStyle: ["responsive", "important"],
    borderWidth: ["responsive", "important"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    boxSizing: ["responsive", "important"],
    clear: ["responsive", "important"],
    container: ["responsive", "important"],
    cursor: ["responsive", "important"],
    display: ["responsive", "important"],
    divideColor: ["responsive", "dark", "important"],
    divideOpacity: ["responsive", "important"],
    divideStyle: ["responsive", "important"],
    divideWidth: ["responsive", "important"],
    fill: ["responsive", "important"],
    flex: ["responsive", "important"],
    flexDirection: ["responsive", "important"],
    flexGrow: ["responsive", "important"],
    flexShrink: ["responsive", "important"],
    flexWrap: ["responsive", "important"],
    float: ["responsive", "important"],
    fontFamily: ["responsive", "important"],
    fontSize: ["responsive", "important"],
    fontSmoothing: ["responsive", "important"],
    fontStyle: ["responsive", "important"],
    fontVariantNumeric: ["responsive", "important"],
    fontWeight: ["responsive", "important"],
    gap: ["responsive", "important"],
    gradientColorStops: ["responsive", "dark", "hover", "focus", "important"],
    gridAutoColumns: ["responsive", "important"],
    gridAutoFlow: ["responsive", "important"],
    gridAutoRows: ["responsive", "important"],
    gridColumn: ["responsive", "important"],
    gridColumnEnd: ["responsive", "important"],
    gridColumnStart: ["responsive", "important"],
    gridRow: ["responsive", "important"],
    gridRowEnd: ["responsive", "important"],
    gridRowStart: ["responsive", "important"],
    gridTemplateColumns: ["responsive", "important"],
    gridTemplateRows: ["responsive", "important"],
    height: ["responsive", "important"],
    inset: ["responsive", "important"],
    justifyContent: ["responsive", "important"],
    justifyItems: ["responsive", "important"],
    justifySelf: ["responsive", "important"],
    letterSpacing: ["responsive", "important"],
    lineHeight: ["responsive", "important"],
    listStylePosition: ["responsive", "important"],
    listStyleType: ["responsive", "important"],
    margin: ["responsive", "important"],
    maxHeight: ["responsive", "important"],
    maxWidth: ["responsive", "important"],
    minHeight: ["responsive", "important"],
    minWidth: ["responsive", "important"],
    objectFit: ["responsive", "important"],
    objectPosition: ["responsive", "important"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    order: ["responsive", "important"],
    outline: ["responsive", "focus-within", "focus", "important"],
    overflow: ["responsive", "important"],
    overscrollBehavior: ["responsive", "important"],
    padding: ["responsive", "important"],
    placeContent: ["responsive", "important"],
    placeItems: ["responsive", "important"],
    placeSelf: ["responsive", "important"],
    placeholderColor: ["responsive", "dark", "focus", "important"],
    placeholderOpacity: ["responsive", "focus", "important"],
    pointerEvents: ["responsive", "important"],
    position: ["responsive", "important"],
    resize: ["responsive", "important"],
    ringColor: ["responsive", "dark", "focus-within", "focus", "important"],
    ringOffsetColor: ["responsive", "dark", "focus-within", "focus", "important"],
    ringOffsetWidth: ["responsive", "focus-within", "focus", "important"],
    ringOpacity: ["responsive", "focus-within", "focus", "important"],
    ringWidth: ["responsive", "focus-within", "focus", "important"],
    rotate: ["responsive", "hover", "focus", "important"],
    scale: ["responsive", "hover", "focus", "important"],
    skew: ["responsive", "hover", "focus", "important"],
    space: ["responsive", "important"],
    stroke: ["responsive", "important"],
    strokeWidth: ["responsive", "important"],
    tableLayout: ["responsive", "important"],
    textAlign: ["responsive", "important"],
    textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "important"],
    textDecoration: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    textOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus", "important"],
    textOverflow: ["responsive", "important"],
    textTransform: ["responsive", "important"],
    transform: ["responsive", "important"],
    transformOrigin: ["responsive", "important"],
    transitionDelay: ["responsive", "important"],
    transitionDuration: ["responsive", "important"],
    transitionProperty: ["responsive", "important"],
    transitionTimingFunction: ["responsive", "important"],
    translate: ["responsive", "hover", "focus", "important"],
    userSelect: ["responsive", "important"],
    verticalAlign: ["responsive", "important"],
    visibility: ["responsive", "important"],
    whitespace: ["responsive", "important"],
    width: ["responsive", "important"],
    wordBreak: ["responsive", "important"],
    zIndex: ["responsive", "focus-within", "focus", "important"],
    extend: {
      ringWidth: ["hover", "active", "important"],
      ringColor: ["hover", "active", "important"],
      ringOpacity: ["hover", "active", "important"],
      textDecoration: ["active"]
    }
  },
  theme: {
    extend: {
      colors: theme,
      gridTemplateRows: {
        layout: "75px auto"
      },
      gap: {
        layout: "5px"
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        // ! 给每一个类多加一个!important
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true;
          });
        });
      });
    })
  ]
};
