import React, { useState, useRef } from "react";

export interface Props {
  username: string;
  setAllMessages: (cb: (prevState: string[][]) => string[][]) => void;
  allMessages: string[][];
}

export function MessageForm({ username, allMessages, setAllMessages }: Props) {
  const [message, setMessage] = useState<string>("");
  const inputValue = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any, username: string, message: string) => {
    e.preventDefault();
    setAllMessages(prevState => [...prevState, [username, message]]);
    if (inputValue.current) {
      inputValue.current.value = "";
    }
  };

  return (
    <form className="message-form" onSubmit={e => handleSubmit(e, username, message)}>
      <textarea
        className="message-form__input"
        placeholder="write message..."
        ref={inputValue}
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <button className="message-form__button">send</button>
    </form>
  );
}
