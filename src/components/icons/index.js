import React from "react";
import styles from "../../styles/module.scss";
import * as _Icons from "./icon-lib";
export default ({ ...props }) => {
  let _props = { ...props };
  const { name, size, style, className, id } = _props;
  delete _props.name;
  delete _props.size;
  delete _props.style;
  delete _props.className;
  delete _props.id;
  let _iconList = Object.keys(_Icons);
  let _name = _prepareIconName(name);
  if (_iconList.includes(_name)) {
    return (
      <span
        className={[
          styles["lumina-icon-wrapper"],
          "lumina-icon-wrapper",
          className || ""
        ].join(" ")}
        id={id || null}
        {...props}
        style={{ width: `${size}px` || `1rem`, height: `${size}px` || `1rem` }}
      >
        {React.createElement(_Icons[_name], {
          style: { ...style, width: size || `1rem`, height: size || `1rem` }
        })}
      </span>
    );
  } else {
    return "";
  }
};

const _prepareIconName = (str) => {
  return str
    .split("-")
    .map((a) => a.charAt(0).toUpperCase() + a.substr(1))
    .join("");
};
