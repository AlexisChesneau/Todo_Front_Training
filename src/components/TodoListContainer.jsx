import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateCheckboxButton from "./UpdateCheckboxButton";
import TagsButton from "./TagsButton";

function TodoListContainer({ id, name, description, checkbox, onDelete }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <li style={{ textDecoration: "bold" }}>{name}</li>
      <p style={{ margin: "10px" }}>{description}</p>
      <UpdateCheckboxButton id={id} checkbox={checkbox} />
      <DeleteButton id={id} onDelete={onDelete} />
      <TagsButton />
    </div>
  );
}

export default TodoListContainer;
