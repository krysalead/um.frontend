import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import MainView from "./view/MainView";

function App() {
  return (
    <div className="App">
      <header className="App-header">User Management</header>
      <ErrorBoundary>
        <MainView />
      </ErrorBoundary>
    </div>
  );
}

export default App;
