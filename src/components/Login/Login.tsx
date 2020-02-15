import React from 'react';

export interface Props {
    setUsername: Function;
}

function Login({setUsername}: Props) {
    return (
        <>
            <button onClick={() => setUsername("User1")}>User 1</button>
            <button onClick={() => setUsername("User2")}>User 2</button>
        </>
    )
}

export default Login;
