import React, { useEffect } from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  var {
    title,
    children,
    openIcon,
    collapseIcon,
    className,
    defaultOpen,
    disabled,
    onOpen
  } = props;
  const [isOpen, setOpen] = React.useState(defaultOpen || false);
  const [actionDisabled, setDisabled] = React.useState(disabled || false);
  React.useEffect(() => {
    if (isOpen) {
      if (onOpen) {
        onOpen();
      }
    } else {
    }
  }, [isOpen]);

  return (
    <div
      className={[
        `1ui-accordion`,
        `${styles["_acrdn-wrapper"]}`,
        `${className || ""}`,
        `${actionDisabled ? `${styles["_acrdn-disabled"]}` : ""}`
      ].join(" ")}
      id={props.id || null}
    >
      <div
        className={
          openIcon && collapseIcon
            ? `${styles["_acrdn-title-custom"]} _acrdn-title-custom ${
                isOpen ? styles["_acrdn-open"] : styles["_acrdn-closed"]
              }`
            : `${styles["_acrdn-title"]} _acrdn-title ${
                isOpen ? styles["_acrdn-open"] : styles["_acrdn-closed"]
              }`
        }
        onClick={() => {
          if (!actionDisabled) setOpen(!isOpen);
        }}
      >
        {title}
        {openIcon && collapseIcon && (
          <div
            className={`${styles["accordion_collapse-controls"]} accordion_collapse-controls`}
          >
            {isOpen ? collapseIcon : openIcon}
          </div>
        )}
      </div>
      <div
        className={`${styles["_acrdn-item"]} _acrdn-item ${
          !isOpen ? styles["_acrdn-collapsed"] : styles["_acrdn-expanded"]
        }`}
      >
        <div
          className={[styles["_acrdn-content"], "lumina-acrdn-content"].join(
            " "
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
