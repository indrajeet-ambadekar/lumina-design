import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let subProps = { ...props };
  delete subProps.children;
  let icon = props.icon;
  let iconLeft = props.iconLeft;
  let iconRight = props.iconRight;
  delete subProps.icon;
  delete subProps.iconLeft;
  delete subProps.iconRight;
  return (
    <button
      {...subProps}
      className={[
        `${styles["lumina-button"]}`,
        "lumina-button",
        `${props.className || ""}`
      ].join(" ")}
    >
      {iconLeft ? (
        <span className={`${styles["lumina-button-icon"]} lumina-button-icon`}>
          {iconLeft}
        </span>
      ) : (
        ""
      )}
      {props.children}
      {iconRight || icon ? (
        <span className={`${styles["lumina-button-icon"]} lumina-button-icon`}>
          {iconRight || icon}
        </span>
      ) : (
        ""
      )}
    </button>
  );
};
