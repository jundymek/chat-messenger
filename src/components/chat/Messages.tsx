import React, { useEffect, useRef } from "react";

export type Props = {
  allMessages: string[][];
  loggedUser: string;
};

export function Messages({ allMessages, loggedUser }: Props) {
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessages]);

  const getMessageClass = (username: string) => {
    if (username === loggedUser) {
      return "User2";
    } else {
      return "User1";
    }
  };

  return (
    <div className="chat__messages">
      <ul className="messages">
        {allMessages.map((message, index) => (
          <li key={index} className={`messages__item messages__item--${getMessageClass(message[0])}`}>
            {message[1]}
          </li>
        ))}
        <div ref={messagesEnd} />
      </ul>
    </div>
  );
}
