import React, { useEffect, useState } from "react";

function TagsButton() {
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function getDataTag() {
      const res = await fetch("http://localhost:3000/tags");
      const data = await res.json();
      setTags(data);
    }
    getDataTag();
  }, []);

  return (
    <>
      <div>
        {/* {tags.map((tag, idx) => {
        <button key={idx} style={{ height: "25px", width: "120px" }}>
          {tag.name}
        </button>;
      })} */}
        <button
          onClick={() => setShow(!show)}
          style={{ height: "25px", width: "120px" }}
        >
          Clique ici
        </button>

        {/* {show && <div></div>} */}
      </div>
    </>
  );
}

export default TagsButton;
