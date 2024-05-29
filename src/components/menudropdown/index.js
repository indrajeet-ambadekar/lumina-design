import React, { useEffect, useState } from "react";
import styles from "../../styles/module.scss";
const MenuDropdown = ({ ...props }) => {
  const [menuItems, setMenuItems] = useState(props.children);
  const [isMenuVisible, setMenuVisible] = useState(false);
  if (!props.label) {
    throw new Error(`Label attribute is required for MenuDropdown`);
  }

  const listenToClick = (el) => {
    if (
      (el.target &&
        el.target.closest(".lumina-menu-dropdown-wrapper") === null) ||
      (el.target && el.target.closest(".lumina-menu-item") !== null)
    ) {
      setMenuVisible(false);
    }
  };
  useEffect(() => {
    let _child = props.children.filter((x) => typeof x?.type === "function");
    setMenuItems(_child);
    window.addEventListener("click", listenToClick);
    return () => {
      window.removeEventListener("click", listenToClick);
    };
  }, []);
  return (
    <div
      className={[
        styles["lumina-menu-dropdown-wrapper"],
        "lumina-menu-dropdown-wrapper",
        props?.className || ""
      ].join(" ")}
    >
      <div
        className={[
          styles["lumina-menu-container"],
          "lumina-menu-container"
        ].join(" ")}
      >
        <button
          className={[
            styles["lumina-menu-dropdown-button"],
            "lumina-menu-dropdown-button",
            props?.buttonClassName || ""
          ].join(" ")}
          onClick={() => setMenuVisible(!isMenuVisible)}
          {...(props.tabIndex !== undefined && { tabIndex: props.tabIndex })}
        >
          {props.label}
        </button>
        {isMenuVisible && (
          <div
            className={[
              styles["lumina-menu-dropdown"],
              props?.alignMenu === "right"
                ? styles["lumina-menu-dropdown-right"]
                : "",
              props?.menuClassName || ""
            ].join(" ")}
          >
            {menuItems}
          </div>
        )}
      </div>
    </div>
  );
};

const MenuItem = ({ ...props }) => {
  return (
    <div
      className={[
        styles["lumina-menu-item"],
        "lumina-menu-item",
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export { MenuDropdown, MenuItem };
