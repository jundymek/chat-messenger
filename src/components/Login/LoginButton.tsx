import React, { useState } from "react";
import { UserImage } from "../UserImage/UserImage";

export interface Props {
  label: string;
  setUsername: (username: string) => void;
}

function LoginButton({ label, setUsername }: Props) {
  const [isBlue, setisBlue] = useState<boolean>(false);

  const handleMouseOver = () => {
    setisBlue(prevState => !prevState);
  };

  const handleClick = () => {
    setisBlue(prevState => !prevState);
    setUsername(label);
  };

  return (
    <button
      onPointerLeave={handleMouseOver}
      onPointerEnter={handleMouseOver}
      className="login__button"
      onClick={handleClick}
    >
      <div className="login__user-wrapper">
        <div className="login__user-icon-wrapper">
          <UserImage isBlue={isBlue}/>
        </div>
        <span className={isBlue ? `login__user-text login__user-text--hovered` : `login__user-text`}>{label}</span>
      </div>
    </button>
  );
}

export default LoginButton;


