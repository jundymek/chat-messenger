import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import "../src/styles/main.scss";
import Login from "./components/Login/Login";

const App = () => {
  const [username, setUsername] = useState(null);
  return <div className="App">{username ? <Chat username={username} /> : <Login setUsername={setUsername} />}</div>;
};

export default App;
