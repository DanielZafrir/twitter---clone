import React from "react";

import Widgets from "./components/Widgets/Widgets";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
