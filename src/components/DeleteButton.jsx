import React from "react";

function ButtonDelete({ id, onDelete }) {
  return (
    <>
      <button onClick={() => onDelete(id)} style={{ margin: "10px" }}>
        x
      </button>
    </>
  );
}

export default ButtonDelete;
