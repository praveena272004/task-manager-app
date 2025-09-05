import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const iconStyle = {
  color: isDark ? "#90caf9" : "#1976d2",
  "&:hover": {
    color: isDark ? "#86b9e2ff" : "#438dd8ff",
  },
};
export default function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
   
  return (
    <List sx={{ mt: 2 }}>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <>
              <IconButton edge="end" onClick={() => editTask(task)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <ListItemText
            primary={task.text}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "inherit",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
