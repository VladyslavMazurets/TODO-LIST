import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./Add todo";
import Context from "./Context";
import Selecter from "./Selecter";
import { Box, Typography } from "@mui/material";
import "./index.css";

function App() {

  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Buy Dogs" },
    { id: 2, completed: false, title: "Buy Pupys" },
    { id: 3, completed: false, title: "Buy Cats" }
  ]);

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  function filterHandler() {

    switch (status) {

      case "completed":
        setFilteredTodos(
          todos.filter(todo => todo.completed === true)
        )
        break;

      case "uncompleted":
        setFilteredTodos(
          todos.filter(todo => todo.completed === false)
        )
        break;

      default:
        setFilteredTodos(todos)
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  };

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function addTodo(title) {

    setTodos(
      todos.concat([

        {
          title,
          id: Date.now(),
          completed: false
        }

      ])

    )
  }

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Context.Provider value={{ removeTodo }}>
        <>
          <AddTodo onCreate={addTodo} />
          <Selecter setStatus={setStatus} />
          {todos.length ?
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              delTodo={removeTodo}
              setStatus={setStatus}
              filteredTodos={filteredTodos} /> :
            <Typography sx={{
              display: 'flex',
              justifyContent: 'center',
              textTransform: 'uppercase',
              fontFamily: 'Splash',
              color: '#3E46D1',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 10
            }}>
              No todos
            </Typography>}
        </>
      </Context.Provider>
    </Box>
  )

}

export default App;
