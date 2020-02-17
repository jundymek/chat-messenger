import React, { useRef } from "react";
import Header from "../Header/Header";
import { UserImage } from "../UserImage/UserImage";
import { Messages } from "./Messages";
import { MessageForm } from "./MessageForm";

interface Props {
  username: string;
  setUsername: Function;
  allMessages: string[][];
  setAllMessages: Function;
}

function Chat({ username, setUsername, allMessages, setAllMessages }: Props) {

  return (
    <div className="chat-window">
      <Header username={username} setUsername={setUsername} />
      <section className="chat">
        <div className="chat__header">
          <div className="chat__header-img">
            <UserImage isBlue={false} />
          </div>
          <h5 className="chat__header-title">{username === "John Doe" ? "John Smith" : "John Doe"}</h5>
        </div>
        <Messages allMessages={allMessages} />
      </section>
      <MessageForm username={username} allMessages={allMessages} setAllMessages={setAllMessages} />
    </div>
  );
}

export default Chat;




