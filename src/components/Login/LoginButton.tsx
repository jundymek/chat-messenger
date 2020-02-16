import React, { useState } from "react";

export interface Props {
  label: String;
  setUsername: Function;
}

function LoginButton({ label, setUsername }: Props) {
  const [isHover, setisHover] = useState<boolean>(false);

  const handleMouseOver = () => {
    setisHover(prevState => !prevState);
  };

  const handleClick = () => {
    setisHover(prevState => !prevState);
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
          <svg
            className={isHover ? `login__user-icon login__user-icon--hovered` : `login__user-icon`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <circle cx="16.022" cy="15.977" r="14.499" />
            <path
              className={isHover ? `login__user-icon-patch login__user-icon-patch--hovered` : `login__user-icon-patch`}
              d="M16.022.159C7.286.159.204 7.241.204 15.977s7.082 15.819 15.818 15.819S31.84 24.713 31.84 15.977 24.759.159 16.022.159zm-.028 6.516c2.382 0 4.312 2.284 4.312 5.102 0 2.816-1.894 6.225-4.274 6.225-2.382 0-4.351-3.408-4.351-6.225 0-2.818 1.932-5.102 4.313-5.102zm8.65 17.627c0 .853-.674.977-1.466.977H8.875c-.791 0-1.463-.124-1.463-.977 0 0-.6-6.235 4.157-8.699.818 1.867 2.352 3.414 4.464 3.414 1.729 0 3.512-1.563 4.332-3.433 4.754 2.465 4.28 8.718 4.279 8.718z"
            />
          </svg>
        </div>
        <span className={isHover ? `login__user-text login__user-text--hovered` : `login__user-text`}>{label}</span>
      </div>
    </button>
  );
}

export default LoginButton;
