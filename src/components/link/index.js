import React from "react";
import styles from "../../styles/module.scss";
const SIZE_MAP = { S: "small", M: "medium", L: "large" };
export default ({ ...props }) => {
  const _handleClick = (e) => {
    if (props.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  let sizeClass = `lumina-link-${
    ["S", "M", "L"].includes(props.size) ? SIZE_MAP[props.size] : "small"
  }`;
  return (
    <a
      href={props.href || "/"}
      target={props.target || "_blank"}
      className={[
        styles["lumina-link"],
        "lumina-link",
        props.className || "",
        styles[sizeClass],
        props.disabled ? styles["lumina-link-disabled"] : ""
      ].join(" ")}
      id={props.id || null}
      onClick={_handleClick}
      style={props.style || null}
    >
      {props.children}
    </a>
  );
};
