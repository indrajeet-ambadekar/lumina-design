import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let subProps = { ...props };
  delete subProps.children;
  let icon = props.icon;
  delete subProps.icon;
  return (
    <button
      {...subProps}
      className={[
        `${styles["lumina-button"]}`,
        "lumina-button",
        `${props.className || ""}`
      ].join(" ")}
    >
      {props.children}
      {icon ? (
        <span className={`${styles["lumina-button-icon"]} lumina-button-icon`}>
          {icon}
        </span>
      ) : (
        ""
      )}
    </button>
  );
};
