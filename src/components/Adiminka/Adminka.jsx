import React, { useState } from "react";

const Adminka = ({ getInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");

  function addProduct() {
    if (!name || !email || !number || !img) {
      alert("Заполните поле");
      return;
    }
    let newObj = {
      name,
      email,
      number,
      img,
      id: Date.now(),
    };
    getInfo(newObj);
    setName("");
    setEmail("");
    setNumber("");
    setImg("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <input
        type="text"
        placeholder="images"
        onChange={(e) => setImg(e.target.value)}
        value={img}
      />
      <button onClick={addProduct}>Add</button>
    </>
  );
};

export default Adminka;
