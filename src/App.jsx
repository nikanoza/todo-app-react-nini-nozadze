import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [todos, setTodos] = useState([
    { text: "Complete online JavaScript course", completed: false },
    { text: "Jog around the park 3x", completed: false },
    { text: "10 minutes meditation", completed: false },
    { text: "Read for 1 hour", completed: false },
    { text: "Pick up groceries", completed: false },
    { text: "Complete ToDo App on Frontend Mentor", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  const addTodo = (newTask, isCompleted) => {
    if (newTask.trim() !== "") {
      setTodos([...todos, { text: newTask, completed: isCompleted }]);
    }
  };

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        addTodo={addTodo}
      />
      <Main
        isDarkMode={isDarkMode}
        todos={filteredTodos()}
        setTodos={setTodos}
      />
      <Footer
        isDarkMode={isDarkMode}
        setFilter={setFilter}
        currentFilter={filter} 
      />
    </>
  );
}

export default App;
