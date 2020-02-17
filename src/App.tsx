import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [allMessages, setAllMessages] = useState<string[][]>([]);
  return (
    <div className="App">
      {username.length ? (
        <Chat username={username} setUsername={setUsername} allMessages={allMessages} setAllMessages={setAllMessages} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
};

export default App;
