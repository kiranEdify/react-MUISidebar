import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

//icons
// import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

//sx
import {
  fontStyles,
  topicStyles,
  topicTextStyles,
  itemsStyles,
  subHeadingStyles,
  iconStyles,
} from "../styles/sx";

// context
import { ListContext } from "./contexts/ListContext";

const SideBarItem = ({ data: { id, topic, subTopics, Icon } }) => {
  // listContext
  const {
    selectedListItemId,
    setSelectedListItemId,
    selectedTopicId,
    setSelectedTopicId,
  } = useContext(ListContext);

  // routing using navigate hook
  const navigate = useNavigate();

  // setting context for currently selected Topic and expanding the collapse based on condition
  const expandClick = () => {
    setSelectedTopicId((prevId) => (prevId === id ? 0 : id)); //only one colapse is opened
  };

  // setting context for currently selected list item from side bar
  const navigateClick = (id, path) => {
    setSelectedListItemId(id);
    navigate(path);
  };

  return (
    <>
      {/* {console.log(selectedListItemId)} */}

      <ListItem disablePadding>
        <ListItemButton onClick={expandClick} sx={topicStyles}>
          <ListItemIcon sx={iconStyles}>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={topic} sx={topicTextStyles} />
          {selectedTopicId === id ? (
            <ExpandMore sx={iconStyles} />
          ) : (
            <KeyboardArrowRightIcon sx={iconStyles} />
          )}
        </ListItemButton>
      </ListItem>

      <Collapse in={selectedTopicId === id} timeout="auto" unmountOnExit>
        <List sx={{ pl: 2 }}>
          {subTopics.map((subTopic) => {
            if (subTopic.subHeading === true) {
              return (
                <ListItem key={subTopic.id}>
                  <ListItemText
                    sx={subHeadingStyles}
                    primary={subTopic.text.toUpperCase()}
                  />
                </ListItem>
              );
            } else {
              return (
                <ListItemButton
                  key={subTopic.id}
                  sx={itemsStyles}
                  selected={selectedListItemId === subTopic.id}
                  onClick={() => navigateClick(subTopic.id, subTopic.path)}
                >
                  <ListItemText primary={subTopic.text} />
                </ListItemButton>
              );
            }
          })}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarItem;
