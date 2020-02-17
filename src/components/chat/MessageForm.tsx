import React, { useState } from "react";

export interface Props {
  username: string;
  setAllMessages: Function;
  allMessages: string[][];
}

export function MessageForm({ username, allMessages, setAllMessages }: Props) {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any, username: string, message: string) => {
    e.preventDefault();
    setAllMessages((prevState: string[][]) => [...prevState, [username, message]]);
  };

  return (
    <form className="chat__message-form" onSubmit={e => handleSubmit(e, username, message)}>
      <input type="text" onChange={(e: any) => setMessage(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
