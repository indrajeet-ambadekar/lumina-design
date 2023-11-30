import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  const { className, id, onClose, icon, children, dismissable, color, style } =
    props;
  return (
    <div
      className={[
        "lumina-chip",
        styles["lumina-chip"],
        styles[`lumina-chip-${color}`],
        className || ""
      ].join(" ")}
      id={id || null}
      style={style || {}}
    >
      {icon ? (
        <span
          className={[styles["lumina-chip-icon"], "lumina-chip-icon"].join(" ")}
        >
          {icon}
        </span>
      ) : (
        ""
      )}
      <span
        className={[styles["lumina-chip-label"], "lumina-chip-label"].join(" ")}
      >
        {children}
      </span>
      {dismissable ? (
        <span
          className={[
            styles["lumina-chip-close-btn"],
            "lumina-chip-close-btn"
          ].join(" ")}
          onClick={onClose}
        >
          &times;
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
