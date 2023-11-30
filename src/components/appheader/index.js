import React, { useState, useEffect } from "react";
import styles from "../../styles/module.scss";

export default ({ ...props }) => {
  const [menuOpen, toggleMenu] = useState(false);
  const _handleLogoClick = () => {
    if (typeof props.onIconClick === "function") {
      props.onIconClick();
    }
  };
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      //
      if (!e.target.closest(".lumina-header-hamburger-btn")) {
        toggleMenu(!menuOpen);
      }
    };
    if (menuOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [menuOpen]);
  return (
    <div
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
            onClick={() => {
              toggleMenu(!menuOpen);
            }}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        )}
        {props.logo && (
          // <img
          //   src={props.logo ? props.logo : LogoBase64} //'https://s3.amazonaws.com/static.elysium-cloud.com/images/logo.png'
          //   alt='Elysium Cloud'
          //   className={[
          //     styles["lumina-header-app-logo-img"],
          //     "lumina-header-app-logo-img"
          //   ].join(" ")}
          //   onClick={_handleLogoClick}
          // />
          <div
            className={[
              styles["lumina-header-app-logo-wrapper"],
              "lumina-header-logo-wrapper"
            ].join(" ")}
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
