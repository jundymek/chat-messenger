import React from "react";
import { Logo } from "../Logo/Logo";
import { UserImage } from "../UserImage/UserImage";

export interface Props {
  username: string;
  setUsername: Function;
}

function Header({ username, setUsername }: Props) {
  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <Logo />
      </div>
      <div className="header__login-wrapper">
        <span className="header__login-username">{username}</span> 
        <button className="header__logout-button" onClick={() => setUsername("")}>Logout</button>
        <UserImage isBlue />
      </div>
    </section>
  );
}

export default Header;
