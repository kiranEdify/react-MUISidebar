import { Drawer, List, Box, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import { data } from "../../data";
import SideBarItem from "../SideBarItem";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              backgroundColor: "primary.main",
              width: "250px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {data.map((item) => (
              <SideBarItem key={item.id} data={item} />
            ))}
          </List>
        </Drawer>

        <Box sx={{ p: 3 }}>
          <Typography variant="h4">Contents......!</Typography>
          
          <Outlet />
        </Box>
      </Box>

      
    </>
  );
};

export default Home;
