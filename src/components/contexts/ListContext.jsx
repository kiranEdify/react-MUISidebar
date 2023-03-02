import { createContext, useState } from "react";

export const ListContext = createContext({
  selectedTopicId: 0,
  setSelectedTopicId: () => {},
  selectedListItemId: 0,
  setSelectedListItemId: () => {},
});

export const ListProvider = ({ children }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(0);
  const [selectedListItemId, setSelectedListItemId] = useState(0);

 const value = {selectedTopicId, setSelectedTopicId,selectedListItemId, setSelectedListItemId}

 return (
    <ListContext.Provider value={value}>
        {children}
    </ListContext.Provider>
 )

};
