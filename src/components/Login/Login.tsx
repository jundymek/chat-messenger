import React from "react";
import LoginButton from "./LoginButton";

export interface Props {
  setUsername: Function;
}

function Login({ setUsername }: Props) {
  return (
    <section className="login">
      <div className="login__title-wrapper">
        <h2 className="login__title">Chat</h2>
        <p className="login__subtitle">to JS master</p>
      </div>
      <div className="login__button-wrapper">
        <LoginButton label="John Doe" setUsername={setUsername} />
        <LoginButton label="John Smitch" setUsername={setUsername} />
      </div>
      <div className="login__footer">Choice your account and start conversation</div>
    </section>
  );
}

export default Login;
