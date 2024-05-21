import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/module.scss";
import CloseIcon from "../../assets/icons/Close.js";
import BarsIcon from "../../assets/icons/Bars.js";

export default ({ ...props }) => {
  const [menuOpen, toggleMenu] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const _handleLogoClick = () => {
    if (typeof props.onIconClick === "function") {
      props.onIconClick();
    }
  };

  const _handleClick = () => {
    toggleMenu(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      toggleMenu(false);
    }
  };

  const handleClickInsideMenu = (event) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousedown", handleClickInsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickInsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickInsideMenu);
    };
  }, [menuOpen]);

  return (
    <div
      ref={headerRef}
      className={[
        styles["lumina-header-wrapper"],
        "lumina-header-wrapper",
        props.className || ""
      ].join(" ")}
      id={props.id || null}
      style={props.style || {}}
    >
      <div
        className={[
          styles["lumina-header-app-logo"],
          "lumina-header-app-logo"
        ].join(" ")}
      >
        {props.children && (
          <button
            className={[
              styles["lumina-header-hamburger-btn"],
              "lumina-header-hamburger-btn"
            ].join(" ")}
            onClick={_handleClick}
          >
            {menuOpen ? <CloseIcon /> : <BarsIcon />}
          </button>
        )}
        {props.logo && (
          <div
            className={[
              styles["lumina-header-app-logo-wrapper"],
              "lumina-header-logo-wrapper"
            ].join(" ")}
            onClick={() => _handleLogoClick()}
          >
            {props.logo}
          </div>
        )}
        {props.secondaryIcon}
      </div>
      <div
        className={[
          styles["lumina-header-nav-cntnr"],
          "lumina-header-nav-cntnr"
        ].join(" ")}
      >
        {props.children}
      </div>
      <div
        className={[
          styles["lumina-header-profile-wrapper"],
          "lumina-header-profile-wrapper"
        ].join(" ")}
      >
        {props.profileIcon}
      </div>
      {menuOpen ? (
        <div
          ref={menuRef}
          className={[
            styles["lumina-header-hamburger-menu"],
            "lumina-header-hamburger-menu"
          ].join(" ")}
        >
          {props.children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
