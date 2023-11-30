import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "../../styles/module.scss";
export default ({ open, hide, ...props }) => {
  let needHeader = props.header || false;
  const handleClick = (event) => {
    if (event.target.closest(".elc-ui-dialog") === null) {
      hide();
    }
  };
  return open
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={[
              "elc-ui-dialog-overlay",
              `${styles["dialog-overlay"]}`
            ].join(" ")}
            onClick={hide}
          />
          <div
            className={[
              `elc-ui-dialog-wrapper`,
              `${styles["dialog-wrapper"]}`
            ].join(" ")}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
            id={props.id || null}
            onClick={handleClick}
          >
            <div className={[`elc-ui-dialog`, `${styles["dialog"]}`].join(" ")}>
              {needHeader && (
                <div
                  className={[
                    `elc-ui-dialog-header`,
                    `${styles["dialog-header"]}`
                  ].join(" ")}
                >
                  <button
                    type='button'
                    className={[
                      `dialog-close-btn`,
                      `${styles["dialog-close-button"]}`
                    ].join(" ")}
                    data-dismiss='dialog'
                    aria-label='Close'
                    onClick={hide}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
              )}
              <div
                className={[
                  `dialog-content`,
                  `${styles["dialog-content-wrapper"]}`
                ].join(" ")}
              >
                {props.children}
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
