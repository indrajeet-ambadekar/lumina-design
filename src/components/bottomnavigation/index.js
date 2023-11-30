import React from "react";
import styles from "../../styles/module.scss";
export const BottomNavigation = ({ ...props }) => {
  return (
    <div
      className={[
        styles["lumina-bottom-navigation"],
        "lumina-bottom-navigation",
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
    >
      {props.children}
    </div>
  );
};

export const BottomNavItem = ({ ...props }) => {
  return (
    <div
      className={[
        props.type === "center"
          ? styles["lumina-nav-center-item"]
          : styles["lumina-nav-item"],
        props.active ? styles["lumina-nav-item-active"] : "",
        "lumina-nav-item",
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
      onClick={props.onClick}
    >
      {props.icon && (
        <div
          className={`${styles["lumina-nav-item-icon"]} lumina-nav-item-icon`}
        >
          {props.icon}
        </div>
      )}
      {props.type !== "center" && <span>{props.children}</span>}
    </div>
  );
};
