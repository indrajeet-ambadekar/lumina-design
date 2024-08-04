import React, { useEffect, useState } from "react";
import _styles from "../../styles/module.scss";
import { isType } from "../../utils";
export default ({ ...props }) => {
  const { className, id, style, value, label, dataSet, dataSetType } = props;
  const [inputValue, setInputValue] = useState(value);
  const [suggested, setSuggested] = useState([]);
  if (!isType("Array", dataSet)) {
    throw new Error("'dataSet' attribute must be an array");
  }
  if (!["flat", "nested"].includes(dataSetType)) {
    throw new Error("'dataSetType' attribute must either 'flat' or 'nested'");
  }
  if (dataSetType === "nested" && !props?.dataTargetKey) {
    throw new Error(
      "'dataTargetKey' attribute is mandatory for 'nested' dataSet type"
    );
  }
  const _watchInput = (event) => {
    setInputValue(event.target.value);
    if (dataSetType === "flat") {
      if (event.target.value.length > 0) {
        let _items = dataSet.filter((x) =>
          x.toLowerCase().includes(event.target.value)
        );
        setSuggested(_items);
      } else {
        setSuggested([]);
      }
    } else {
      if (event.target.value.length > 0) {
        let _items = dataSet.filter(
          (x) =>
            x[props?.dataTargetKey] &&
            x[props?.dataTargetKey].toLowerCase().includes(event.target.value)
        );
        console.log(_items, props?.dataTargetKey);
        setSuggested(_items);
      } else {
        setSuggested([]);
      }
    }
  };
  useEffect(() => {
    setInputValue(value);
    setSuggested([]);
  }, [value]);

  return (
    <div
      className={[
        _styles["lumina-auto-complete-wrapper"],
        "lumina-auto-complete-wrapper",
        className || ""
      ].join(" ")}
      id={id || null}
      style={{ ...style }}
    >
      <div
        className={[
          _styles["lumina-auto-complete-input-cntnr"],
          "lumina-auto-complete-input-cntnr"
        ].join(" ")}
      >
        <label>{label}</label>
        <input
          value={inputValue}
          onChange={_watchInput}
          placeholder={props?.placeholder || "Start typing..."}
          {...(props.tabIndex !== undefined && { tabIndex: props.tabIndex })}
        />
        {inputValue.length > 0 && (
          <button
            className={[
              _styles["lumina-autocomplete-clear-btn"],
              "lumina-autocomplete-clear-btn"
            ].join(" ")}
            onClick={() => {
              setInputValue("");
              setSuggested([]);
            }}
          >
            &times;
          </button>
        )}
      </div>
      {suggested.length > 0 && (
        <div
          className={[
            _styles["lumina-auto-complete-suggested-cntnr"],
            "lumina-auto-complete-suggested-cntnr"
          ].join(" ")}
        >
          {dataSetType === "flat" &&
            suggested.map((_item, i) => (
              <div
                key={i}
                className={[
                  _styles["lumina-auto-complete-suggested-row"],
                  "lumina-auto-complete-suggested-row"
                ].join(" ")}
                onClick={() => props?.onChange(_item)}
              >
                {_item}
              </div>
            ))}
          {dataSetType === "nested" &&
            suggested.map((_item, i) => (
              <div
                key={i}
                className={[
                  _styles["lumina-auto-complete-suggested-row"],
                  "lumina-auto-complete-suggested-row"
                ].join(" ")}
                onClick={() => props?.onChange(_item)}
              >
                {_item[props?.dataTargetKey]}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
