import { useState, useEffect } from "react";
import TodoListContainer from "./components/TodoListContainer";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    async function getDataItems() {
      const res = await fetch("http://localhost:3000/items");
      const data = await res.json();
      setTodosData(data);
    }
    getDataItems();
  }, []);

  async function deleteId(id) {
    await fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setTodosData((old) => [...old].filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("erreur", error);
      });
  }

  return (
    <>
      <AddTodo setTodosData={setTodosData} />
      {todosData.map((todo, idx) => (
        <TodoListContainer
          key={idx}
          id={todo.id}
          name={todo.name}
          description={todo.description}
          checkbox={todo.checkbox}
          onDelete={deleteId}
        />
      ))}
    </>
  );
}

export default App;
