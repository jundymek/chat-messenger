import React from "react";

export interface Props {
  username?: string | null;
}

function Header({ username }: Props) {
  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <h1 className="header__logo">Chat</h1>
        <span className="header__subtitle">to JS master</span>
      </div>
      <div className="header__login-wrapper">
        {username ? <>{username} logout</>
        : "login"}
      </div>
    </section>
  );
}

export default Header;
