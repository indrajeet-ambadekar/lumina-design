import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let { className, style, id, color, size, icon, children, onClick } = props;
  return (
    <div
      className={[
        styles["lumina-flbtn"],
        styles[`lumina-flbtn-${color || "orange"}`],
        styles[`lumina-flbtn-${size || "S"}`],
        "lumina-flbtn",
        className || ""
      ].join(" ")}
      id={id || null}
      style={{ ...style }}
      onClick={onClick}
      {...(props.tabIndex !== undefined && { tabIndex: props.tabIndex })}
    >
      {icon ? (
        <span className={`${styles["lumina-flbtn-icon"]} lumina-flbtn-icon`}>
          {icon}
        </span>
      ) : (
        ""
      )}
      {children ? (
        <div className={`${styles["lumina-flbtn-label"]} lumina-flbtn-label`}>
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
