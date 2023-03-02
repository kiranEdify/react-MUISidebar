import React from "react";
import { CircularProgress, Box, Stack } from "@mui/material";

const SuspenseFallback = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      height={"90%"}
    >
      <CircularProgress thickness={8} sx={{ color: "blue.light" }} />
    </Stack>
  );
};

export default SuspenseFallback;
