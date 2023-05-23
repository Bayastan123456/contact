import React, { useState } from "react";
import Adminka from "../Adiminka/Adminka";
import EditProduct from "../EditProduct/EditProduct";
import Favorites from "../Favorites/Favorites";

const CardList = () => {
  const [info, setInfo] = useState([]);

  const getInfo = (obj) => {
    let arr = [...info];
    arr.push(obj);
    setInfo(arr);
    console.log(info);
  };
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  function elementDelete(id) {
    let newInfo = [...info];
    newInfo = newInfo.filter((a) => a.id !== id);
    setInfo(newInfo);
  }
  const [editProduct, setEditProduct] = useState(null);

  function elementEdit(id) {
    let obj = info.filter((a) => a.id == id);
    setEditProduct(obj[0]);
  }
  console.log(editProduct);

  function saveChange(newObj) {
    let newInfo = [...info];
    newInfo = newInfo.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setInfo(newInfo);
    setEditProduct(null);
  }
  return (
    <>
      <Adminka getInfo={getInfo} />
      <div style={style}>
        {info.map((item) => (
          <div style={{ width: "100px" }}>
            <img src={item.img} alt={item.img} style={{ width: "100px" }} />
            <h2>Name:{item.name}</h2>
            <h4>email:{item.email}</h4>
            <h4>num:{item.number}</h4>
            <button onClick={() => elementDelete(item.id)}>Delete</button>
            <button onClick={() => elementEdit(item.id)}>Edit</button>
            <button>Favorites</button>
          </div>
        ))}
      </div>
      {editProduct ? (
        <EditProduct editProduct={editProduct} saveChange={saveChange} />
      ) : (
        <h2>Not editing todo now</h2>
      )}
      <Favorites />
    </>
  );
};

export default CardList;
