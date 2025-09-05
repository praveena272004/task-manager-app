import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function TaskInput({ newTask, setNewTask, addOrSaveTask, editId }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <TextField
        fullWidth
        label="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addOrSaveTask}
      >
        {editId ? "Save" : "Add"}
      </Button>
    </Box>
  );
}
