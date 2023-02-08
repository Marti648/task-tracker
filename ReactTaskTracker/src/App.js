import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import AddForm from "./components/AddForm";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ]);

  //Add Task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }

  //Delete Task
  function onDelete(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  //Toggle Reminder
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  }

  return (
    <div className="container">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddForm addTask={addTask} />}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No Tasks available"
      )}
    </div>
  );
}

export default App;
