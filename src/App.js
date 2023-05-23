import React from "react";
import CardList from "./components/CardList/CardList";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="header">Contact</h1>
      <div className="card-list">
        <CardList />
      </div>
    </>
  );
};

export default App;
