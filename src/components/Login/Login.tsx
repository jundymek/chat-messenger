import React from 'react';

export interface Props {
    setUsername: Function;
}

function Login({setUsername}: Props) {
    return (
        <>
            <button onClick={() => setUsername("User 1")}>User 1</button>
            <button onClick={() => setUsername("User 2")}>User 2</button>
        </>
    )
}

export default Login;
