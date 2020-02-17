import React, { useEffect, useRef } from "react";

export type Props = {
  allMessages: string[][];
};

export function Messages({ allMessages }: Props) {
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessages]);

  const getMessageClass = (username: string) => {
    if (username === "John Doe") {
      return "User1";
    } else {
      return "User2";
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
