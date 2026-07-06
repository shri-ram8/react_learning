import { useState } from "react";

function App() {

  // Stores what the user is typing
  const [task, setTask] = useState("");

  // Stores all the todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  function addTodo() {

    // Prevent empty tasks
    if (task.trim() === "") {
      return;
    }

    // Add new task to the array
    setTodos([...todos, task]);

    // Clear the input box
    setTask("");
  }

  // Function to delete a todo
  function deleteTodo(index) {

    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <hr />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>

            {todo}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>

          </li>
        ))}
      </ul>

    </>
  );
}

export default App;