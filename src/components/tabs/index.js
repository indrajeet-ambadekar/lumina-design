import React, { Fragment, useState, useEffect } from "react";
import styles from "../../styles/module.scss";
export const Tabs = ({ ...props }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  useEffect(() => {
    let _child = props.children.map((_child, i) => {
      return {
        _index: i,
        title: _child?.props?.title,
        _subTree: _child?.props?.children,
        isActive: _child?.props?.active || false,
        _id: _child?.props?.id || null
      };
    });
    setTabs(_child);
  }, []);
  const _handleTabChipClick = (index) => {
    setActiveTabIndex(index);
    let _tabs = tabs.map((_tab) => {
      return { ..._tab, isActive: _tab._index === index };
    });
    setTabs(_tabs);
  };
  return (
    <div
      className={[
        styles["lumina-tab-wrapper"],
        props.className || "",
        "lumina-tab-wrapper"
      ].join(" ")}
      id={props.id || null}
    >
      <div
        className={[
          styles["lumina-tab-header"],
          "lumina-tab-header",
          props.mode === "contained"
            ? styles["lumina-tab-header-contained"]
            : ""
        ].join(" ")}
      >
        {tabs.map((_tab, i) => (
          <div
            key={i}
            className={[
              props.mode === "contained"
                ? styles["lumina-tab-chip-contained"]
                : styles["lumina-tab-chip"],
              _tab.isActive
                ? props.mode === "contained"
                  ? `${styles["lumina-active-contained-tab-chip"]} active-tab-chip`
                  : `${styles["lumina-active-tab-chip"]} active-tab-chip`
                : "",
              "lumina-tab-chip"
            ].join(" ")}
            onClick={() => {
              _handleTabChipClick(i);
            }}
          >
            {_tab.title}
          </div>
        ))}
      </div>
      <div
        className={[styles["lumina-tab-cntnr"], "lumina-tab-cntnr"].join(" ")}
      >
        <div
          className={`${styles["lumina-tab"]} lumina-tab`}
          id={tabs[activeTabIndex]?._id || null}
        >
          {tabs[activeTabIndex]?._subTree || ""}
        </div>
      </div>
    </div>
  );
};
export const TabCard = ({ ...props }) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
