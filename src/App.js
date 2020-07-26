import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { AlertTitle, Alert } from "@material-ui/lab";
import { AppContext, config } from "./Context";

function App() {
  return (
    <div className="App">
      <header className="App-header">User Management</header>
      <Alert severity="error">
        <AlertTitle>Backend Error</AlertTitle>
        There is an error
      </Alert>
      <AppContext.Provider value={config}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
