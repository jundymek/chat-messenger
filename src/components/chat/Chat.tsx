import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import user_icon from "../../images/user_icon.svg";

export interface Props {
  username: string;
  setUsername: Function;
  allMessages: string[][];
  setAllMessages: Function;
}

function Chat({ username, setUsername, allMessages, setAllMessages }: Props) {
  const messageInput = useRef(null);
  const [message, setMessage] = useState<string>("");

  const user: string = username === "User1" ? "User1" : "User2";
  console.log(user);

  const handleSubmit = (e: any, username: string, message: string) => {
    e.preventDefault();
    setAllMessages((prevState: string[][]) => [...prevState, [username, message]]);
  };
  return (
    <>
      <Header username={username} setUsername={setUsername} />
      <section className="chat">
        <div className="chat__header">
          <img className="chat__header-img" src={user_icon} alt="User icon" />
          <h5 className="chat__header-title">{username}</h5>
        </div>
        <hr />
        <div className="chat__messages">
          <ul className="messages">
            {allMessages.map((message, index) => (
              <li className={`messages__item messages__item--${message[0]}`}>{message[1]}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={e => handleSubmit(e, username, message)}>
          <input type="text" ref={messageInput} onChange={(e: any) => setMessage(e.target.value)} />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Chat;
