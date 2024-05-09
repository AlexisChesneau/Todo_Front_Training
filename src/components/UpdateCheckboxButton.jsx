import React from "react";
import { useState } from "react";

function ButtonEdit({ id, checkbox }) {
  const checkboxEtat = checkbox === 0 ? false : true;
  const [etatCheckbox, setEtatCheckbox] = useState(checkboxEtat);

  // Syntaxe différente METHOD PUT

  // async function updateCheckbox() {
  //   const reqOptions = {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ checkbox: !etatCheckbox }),
  //   };
  //   const res = await fetch(
  //     `http://localhost:3000/items/checkbox/${id}`,
  //     reqOptions
  //   );
  //   if (res.ok) {
  //     setEtatCheckbox(!etatCheckbox);
  //   } else {
  //     console.error("Échec de la requête:", res.status);
  //   }
  // }

  async function updateCheckbox() {
    await fetch(`http://localhost:3000/items/checkbox/${id}`, {
      method: "PUT",
      body: JSON.stringify({ checkbox: !etatCheckbox }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json(setEtatCheckbox(!etatCheckbox)))
      .catch((error) => {
        console.error("erreur", error);
      });
  }

  return (
    <>
      <input type="checkbox" onChange={updateCheckbox} checked={etatCheckbox} />
    </>
  );
}

export default ButtonEdit;
