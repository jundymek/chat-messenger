import React, { useState } from "react";
import "./App.scss";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

const App = () => {
  const [username, setUsername] = useState<string>("");
  
  return (
    <div className="App">
      {username.length ? (
        <Chat username={username} setUsername={setUsername} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
};

export default App;
