import React from "react";
import Header from "../Header/Header";
import { UserImage } from "../UserImage/UserImage";
import { Messages } from "./Messages";
import { MessageForm } from "../MessageForm/MessageForm";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
  username: string;
  setUsername: (username: string) => void;
}

function Chat({ username, setUsername }: Props) {
  const [allMessages, setAllMessages] = useLocalStorage("chatMessages", []);

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
        <Messages allMessages={allMessages} loggedUser={username} />
      </section>
      <MessageForm username={username} allMessages={allMessages} setAllMessages={setAllMessages} />
    </div>
  );
}

export default Chat;
