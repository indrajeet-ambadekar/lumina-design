import React from "react";
import { useEffect, useRef } from "react";
import styles from "../../styles/module.scss";
import { LuminaIcon } from "lumina-design-icons";

const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.=
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout
  useEffect(() => {
    // Don't schedule if no delay is specified
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
};

export const Toast = (props) => {
  useTimeout(props.close, props.timer || 5000);
  const toastTypeMap = {
    default: null,
    success: (
      <LuminaIcon
        size={18}
        name='thumbs-up'
        className={`${styles["lumina-toast-icon"]}`}
      />
    ),
    error: (
      <LuminaIcon
        size={18}
        name='exclamation-triangle'
        className={`${styles["lumina-toast-icon"]}`}
      />
    ),
    warn: (
      <LuminaIcon
        size={18}
        name='exclamation-triangle'
        className={`${styles["lumina-toast-icon"]}`}
      />
    ),
    info: (
      <LuminaIcon
        size={18}
        name='lightbulb-alt'
        className={`${styles["lumina-toast-icon"]}`}
      />
    )
  };
  return (
    <div
      className={[
        styles["lumina-toast"],
        styles[`lumina-toast-${props.type || "default"}`],
        "lumina-toast"
      ].join(" ")}
      title={props.children}
    >
      {toastTypeMap[props.type || "default"]}
      <div
        className={[styles["lumina-toast__text"], "lumina-toast__text"].join(
          " "
        )}
      >
        {props.children}
      </div>
      <div>
        <button
          onClick={props.close}
          className={[
            styles["lumina-toast__close-btn"],
            "lumina-toast__close-btn"
          ].join(" ")}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
