import React from "react";
import styles from "../../styles/module.scss";
import { isType } from "../../utils";
import ChevronRightIcon from "../../assets/icons/ChevronRight";
export default ({ ...props }) => {
  const { crumbs, className, crumbClassName, style, id } = props;
  if (!isType("Array", crumbs)) {
    throw new Error(
      `Crumbs to Breadcrumb are required in the form of an array`
    );
  }
  return (
    <div
      className={[
        styles["lumina-breadcrumb"],
        "lumina-breadcrumb",
        className || ""
      ].join(" ")}
      id={id || null}
      style={style || {}}
    >
      {crumbs.map((crumb, i) => (
        <div
          key={i}
          className={[
            styles["lumina-breadcrumb-crumb"],
            "lumina-breadcrumb-crumb",
            crumbClassName || ""
          ].join(" ")}
          onClick={crumb.onClick}
        >
          <span
            className={`${styles["lumina-breadcrumb-label"]} lumina-breadcrumb-label`}
          >
            <span>{crumb.label}</span>
          </span>
          <span
            className={`${styles["lumina-breadcrumb-chevron"]} lumina-breadcrumb-chevron`}
          >
            {i < crumbs.length - 1 ? <ChevronRightIcon /> : ""}
          </span>
        </div>
      ))}
    </div>
  );
};
