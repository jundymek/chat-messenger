import React from "react";
import LoginButton from "./LoginButton";
import { Logo } from "../Logo/Logo";

export interface Props {
  setUsername: (username: string) => void;
}

function Login({ setUsername }: Props) {
  return (
    <section className="login">
      <div className="login__title-wrapper">
        <Logo />
      </div>
      <div className="login__button-wrapper">
        <LoginButton label="John Doe" setUsername={setUsername} />
        <LoginButton label="John Smith" setUsername={setUsername} />
      </div>
      <div className="login__footer">Choice your account and start conversation</div>
    </section>
  );
}

export default Login;


