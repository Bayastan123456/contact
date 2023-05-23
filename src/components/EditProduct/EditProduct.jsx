import React, { useState } from "react";

const EditProduct = ({ editProduct, saveChange }) => {
  const [editInfo, setEditInfo] = useState(editProduct);

  const editName = (e) => {
    let newObj = {
      ...editInfo,
      name: e.target.value,
    };
    setEditInfo(newObj);
  };

  const editEmail = (e) => {
    let newObj = {
      ...editInfo,
      email: e.target.value,
    };
    setEditInfo(newObj);
  };

  const editNumber = (e) => {
    let newObj = {
      ...editInfo,
      number: e.target.value,
    };
    setEditInfo(newObj);
  };

  const editImg = (e) => {
    let newObj = {
      ...editInfo,
      img: e.target.value,
    };
    setEditInfo(newObj);
  };

  function handleSave() {
    saveChange(editInfo);
  }
  return (
    <div className="modal">
      <input type="text" onChange={editName} value={editInfo.name} />
      <input type="text" onChange={editEmail} value={editInfo.email} />
      <input type="text" onChange={editNumber} value={editInfo.number} />
      <input type="text" onChange={editImg} value={editInfo.img} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProduct;
