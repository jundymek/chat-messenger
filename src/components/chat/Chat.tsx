import React from 'react';

export interface Props {
    username?: string;
}

function Chat({username}: Props) {
    return (
        <section className="chat">
            To jest chat {username}
        </section>
    )
}

export default Chat;
