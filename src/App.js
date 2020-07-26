import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { AppContext, config } from "./Context";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">User Management</header>
      <AppContext.Provider value={config}>
        <ErrorBoundary>
          <AddUser />
          <UserList />
        </ErrorBoundary>
      </AppContext.Provider>
    </div>
  );
}

export default App;
