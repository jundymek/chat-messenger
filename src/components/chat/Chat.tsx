import React from 'react';
import Header from '../Header/Header';

export interface Props {
    username?: string | null;
}

function Chat({username}: Props) {
    return (
        <section className="chat">
            <Header username={username}/>
            To jest chat {username}
        </section>
    )
}

export default Chat;
