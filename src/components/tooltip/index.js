import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/module.scss";

const ReactToolTip = ({
  title,
  body,
  children,
  position,
  containerClass,
  theme
}) => {
  return (
    <div className={`${styles["tooltip"]} ${containerClass}`}>
      {children}
      <div
        className={`${styles["tooltiptext"]} ${styles["tooltiptext-light"]} ${
          styles[`tooltip-bottom`]
        }`}
      >
        <div className={styles["tooltip-title"]}>{title}</div>
        {body && <div className={styles["tooltip-body"]}>{body}</div>}
      </div>
    </div>
  );
};

export default ReactToolTip;

ReactToolTip.defaultProps = {
  title: "sample",
  children: React.createElement("div"),
  position: "bottom",
  containerClass: "",
  theme: "light"
};

ReactToolTip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  position: PropTypes.string,
  containerClass: PropTypes.string,
  theme: PropTypes.string
};
