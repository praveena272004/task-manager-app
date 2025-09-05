import React, { useState, useEffect } from "react";
import { Box, Container, Paper, Typography, IconButton } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrSaveTask = () => {
    if (!newTask.trim()) return;
    if (editId !== null) {
      setTasks(
        tasks.map((t) => (t.id === editId ? { ...t, text: newTask } : t))
      );
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    }
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const editTask = (task) => {
    setNewTask(task.text);
    setEditId(task.id);
  };

  const filtered = tasks.filter((t) =>
    filter === "completed"
      ? t.completed
      : filter === "pending"
      ? !t.completed
      : true
  );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 12,
                transform: "translateY(-4px)",
              },
            }}
          >
            {/* Title + Dark Mode Toggle  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                TASK MANAGER
              </Typography>
      
              <Tooltip
                title={
                  darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <IconButton
                  onClick={() => setDarkMode(!darkMode)}
                  color="inherit"
                  sx={{ mb: 2 }} 
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
            </Box>

            <TaskInput
              newTask={newTask}
              setNewTask={setNewTask}
              addOrSaveTask={addOrSaveTask}
              editId={editId}
            />

            <TaskFilter filter={filter} setFilter={setFilter} />

            <TaskList
              tasks={filtered}
              toggleTask={toggleTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
