import ArticleIcon from "@mui/icons-material/Article";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import CodeIcon from "@mui/icons-material/Code";
import ModeIcon from "@mui/icons-material/Mode";

// export const data = {
//   topic: "Getting started",
//   Icon: ArticleIcon,
//   subTopics: [
//     { id: "1", text: "Overview", subHeading: true },
//     { id: "2", text: "Installation" },
//     { id: "3", text: "Learn" },
//     { id: "4", text: "FAQ's" },
//     { id: "5", text: "Templates" },
//     { id: "6", text: "support" },
//   ],
// };

export const data = [
  {
    id: "1",
    topic: "Getting started",
    Icon: ArticleIcon,
    subTopics: [
      { id: "1", text: "Overview", subHeading: true },
      { id: "2", text: "Installation", path: "/installation" },
      { id: "3", text: "Learn", path: "/learn" },
      { id: "4", text: "FAQ's", path: "/faq" },
      { id: "5", text: "Templates", path: "/templates" },
      { id: "6", text: "support", path: "/support" },
    ],
  },

  {
    id: "2",
    topic: "Components",
    Icon: ToggleOffIcon,
    subTopics: [
      { id: "7", text: "Inputs", subHeading: true },
      { id: "8", text: "AutoComplete", path: "/autoComplete" },
      { id: "9", text: "Button", path: "/button" },
      { id: "10", text: "Checkbox", path: "/checkbox" },
      { id: "11", text: "Rating", path: "/rating" },
      { id: "12", text: "Slider", path: "/slider" },
      { id: "13", text: "Data Display", subHeading: true },
      { id: "14", text: "Avatar", path: "/avata" },
      { id: "15", text: "Badge", path: "/badge" },
      { id: "16", text: "Divider", path: "/divider" },
      { id: "17", text: "FeedBack", subHeading: true },
      { id: "18", text: "Alert", path: "/alert" },
      { id: "19", text: "Backdrop", path: "/backdrop" },
      { id: "20", text: "Dialog", path: "/dialog" },
    ],
  },
  {
    id: "3",
    topic: "Component API",
    Icon: CodeIcon,
    subTopics: [
      { id: "21", text: "Accordian", path: "/accordian" },
      { id: "22", text: "Alert", path: "/alert" },
      { id: "23", text: "Button", path: "/button" },
      { id: "24", text: "Checkbox", path: "/checkbox" },
      { id: "25", text: "Rating", path: "/rating" },
      { id: "27", text: "Slider", path: "/slider" },
      { id: "28", text: "Data Display", path: "/datadisplay" },
      { id: "29", text: "Avatar", path: "/avatar" },
      { id: "30", text: "Badge", path: "/badge" },
      { id: "31", text: "Divider", path: "/divider" },
      { id: "32", text: "FeedBack", path: "/feedBack" },
      { id: "33", text: "Alert", path: "/alert" },
      { id: "34", text: "Backdrop", path: "/backdrop" },
      { id: "35", text: "Dialog", path: "/dialog" },
    ],
  },
  {
    id: "4",
    topic: "Customization",
    Icon: ModeIcon,
    subTopics: [
      { id: "36", text: "Theme", subHeading: true },
      { id: "37", text: "Theming", path: "/theming" },
      { id: "38", text: "Palette", path: "/palette" },
      { id: "39", text: "Dark mode", path: "/darkmode" },
      { id: "40", text: "Spacing", path: "/spacing" },
    ],
  },
];
