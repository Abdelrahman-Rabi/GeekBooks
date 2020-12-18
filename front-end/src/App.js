import React, { useState } from "react";
import "./App.css";
import Library from "./components/library/Library";
import Login from "./components/Login";
import Register from "./components/Register";
import GroupPage from "./components/group/GroupPage";

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <Library />
      <GroupPage />
    </div>
  );
};

export default App;
