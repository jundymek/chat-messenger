import React, {useState} from 'react';
import './App.css';
import Chat from './components/chat/Chat';

const App = () => {

  const [username, setUsername] = useState(null)
  return (
    <div className="App">
      <Chat username="sss"/>
    </div>
  );
}

export default App;

