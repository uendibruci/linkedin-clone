import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )} */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
