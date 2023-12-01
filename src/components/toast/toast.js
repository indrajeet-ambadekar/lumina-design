import React from "react";
import { useEffect, useRef } from "react";
import styles from "../../styles/module.scss";

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
      <i className={`far fa-thumbs-up ${styles["lumina-toast-icon"]}`} />
    ),
    error: (
      <i
        className={`fas fa-exclamation-triangle ${styles["lumina-toast-icon"]}`}
      />
    ),
    warn: (
      <i
        className={`fas fa-exclamation-triangle ${styles["lumina-toast-icon"]}`}
      />
    ),
    info: <i className={`fas fa-lightbulb ${styles["lumina-toast-icon"]}`} />
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
          <i className='fas fa-times-circle' />
        </button>
      </div>
    </div>
  );
};
