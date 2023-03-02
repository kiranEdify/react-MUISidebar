import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "./styles/themes";

import { BrowserRouter } from "react-router-dom";
import { ListProvider } from "./components/contexts/ListContext";

// context

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <ListProvider>
          <App />
        </ListProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
