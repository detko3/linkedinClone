import React from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="appBody">
        <SideBar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
