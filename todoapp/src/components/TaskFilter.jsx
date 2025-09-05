import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function FilterButtons({ filter, setFilter }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const buttonStyle = {
    color: isDark ? "black" : "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: isDark ? "#3d3737ff" : "white", 
    },
    mx: 0.5,
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Button sx={buttonStyle} onClick={() => setFilter("all")}>
        All
      </Button>
      <Button sx={buttonStyle} onClick={() => setFilter("pending")}>
        Pending
      </Button>
      <Button sx={buttonStyle} onClick={() => setFilter("completed")}>
        Completed
      </Button>
    </Box>
  );
}
