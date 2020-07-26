import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">User Management</header>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
