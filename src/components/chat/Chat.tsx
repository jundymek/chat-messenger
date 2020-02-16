import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import { UserImage } from "../UserImage/UserImage";
import { Messages } from "./Messages";

interface Props {
  username: string;
  setUsername: Function;
  allMessages: string[][];
  setAllMessages: Function;
}

function Chat({ username, setUsername, allMessages, setAllMessages }: Props) {
  const messageInput = useRef(null);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any, username: string, message: string) => {
    e.preventDefault();
    setAllMessages((prevState: string[][]) => [...prevState, [username, message]]);
  };
  
  return (
    <>
      <Header username={username} setUsername={setUsername} />
      <section className="chat">
        <div className="chat__header">
          <div className="chat__header-img"><UserImage isBlue={false} /></div>
          <h5 className="chat__header-title">{username === "John Doe" ? "John Smitch" : "John Doe"}</h5>
        </div>
        <Messages allMessages={allMessages} />
        <form onSubmit={e => handleSubmit(e, username, message)}>
          <input type="text" ref={messageInput} onChange={(e: any) => setMessage(e.target.value)} />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Chat;



