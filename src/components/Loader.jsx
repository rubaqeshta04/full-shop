import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100%",
      }}
    >
      <CircularProgress sx={{ color: "var(--main_color)" }} />
    </Box>
  );
};

export default Loader;
