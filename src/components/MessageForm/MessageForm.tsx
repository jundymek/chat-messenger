import React, { useState, useRef, FormEvent } from "react";

export interface Props {
  username: string;
  setAllMessages: (cb: (prevState: string[][]) => string[][]) => void;
  allMessages: string[][];
}

export function MessageForm({ username, allMessages, setAllMessages }: Props) {
  const [message, setMessage] = useState<string>("");
  const inputValue = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, username: string, message: string) => {
    e.preventDefault();
    setAllMessages(prevState => [...prevState, [username, message]]);
    if (inputValue.current) {
      inputValue.current.value = "";
    }
  };

  function handleOnChange(): ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined {
    return (e: any) => setMessage(e.currentTarget.value);
  }

  return (
    <form className="message-form" onSubmit={e => handleSubmit(e, username, message)}>
      <textarea
        className="message-form__input"
        placeholder="write message..."
        ref={inputValue}
        onChange={handleOnChange()}
      />
      <div className="message-form__button-wrapper">
        <button type="submit" className="message-form__button">
          send
        </button>
      </div>
    </form>
  );
}
