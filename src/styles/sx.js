export const fontStyles = {
  fontWeight: "500",
  fontSize: 15,
};

export const topicStyles = {
  p: "5px 0 5px 2px",
  "&:hover": {
    bgcolor: "blue.hoverBlue",
  },
};

export const itemsStyles = {
  p: "3px 0 3px 15px",
  color: "blue.mediumDark",
  borderRadius:1,
  "&.Mui-selected": {
    bgcolor: "blue.selectedBg",
    color: "blue.selectedText",
    "&:hover": {
      bgcolor: "blue.selectedHover",
    },
  },

  "&:hover": {
    bgcolor: "blue.hoverBlue",
    color: "white.contrast",
  },

  mr: 2,
};

// export const itemTextStyles = {
//   color: "blue.mediumDark",
//   "&:hover": {
//     color: "white.contrast",
//   },
// };

export const topicTextStyles = {
  color: "white.main",
  mr: 5,
  ...fontStyles,
};

export const subHeadingStyles = {
  color: "blue.darkGrey",
  letterSpacing: 3,
  ...fontStyles,
};

export const iconStyles = { color: "blue.light", minWidth: 30 };
