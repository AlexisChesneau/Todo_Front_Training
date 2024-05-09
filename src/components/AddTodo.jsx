import React from "react";
import { useState } from "react";

function AddTodo({ setTodosData }) {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  async function addItem(event) {
    event.preventDefault();
    await fetch("http://localhost:3000/items", {
      method: "POST",
      body: JSON.stringify({ name: newName, description: newDescription }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json()).then;
    setTodosData((old) => [
      ...old,
      { name: newName, description: newDescription, checkbox: 0 },
    ]);
    resetChamp();
  }

  function resetChamp() {
    setNewName("");
    setNewDescription("");
  }

  return (
    <form onSubmit={addItem}>
      <label htmlFor="">
        Name :
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Description :
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </label>
      <input type="submit" hidden />
    </form>
  );
}

export default AddTodo;
