import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import styles from "../../styles/module.scss";
import CalendarAltIcon from "../../assets/icons/CalendarAlt.js";
export default ({ ...props }) => {
  var {
    onChange,
    value,
    placeholder,
    label,
    name,
    calendarIcon,
    iconRight,
    className,
    type,
    textStyle
  } = props;
  let testId = props["data-testid"] || null;
  const [inputLabel, setValue] = useState(value || "");
  const [isFocused, setFocused] = useState(false);
  if (onChange === null || onChange === undefined) {
    onChange = function () {};
  }
  useEffect(() => {
    if (inputLabel !== value) onChange(inputLabel || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLabel]);
  const _handleOnFocus = () => {
    setFocused(true);
    if (typeof props.onFocus === "function") {
      props.onFocus();
    }
  };
  const _handleOnBlur = () => {
    setFocused(false);
    if (typeof props.onBlur === "function") {
      props.onBlur();
    }
  };
  return (
    <div
      className={[
        styles["lumina-date-input-wrapper"],
        `${className || ""}`,
        `${props.disabled ? "disabled" : ""}`,
        isFocused ? styles["input-focused"] : ""
      ].join(" ")}
      onFocus={_handleOnFocus}
      onBlur={_handleOnBlur}
      tabIndex={0}
    >
      {label && <label>{label}</label>}
      <DatePicker
        onChange={(value) => setValue(value)}
        value={value || null}
        clearIcon={null}
        calendarIcon={
          calendarIcon || (
            <span
              className={[
                styles["lumina-date-input-calendar-icon"],
                `${props?.iconClassName || ""}`
              ].join(" ")}
            >
              <CalendarAltIcon />
            </span>
          )
        }
        className={[styles["lumina-date-field"], "lumina-date-field"].join(" ")}
        format='d/MM/yyyy'
        data-testid={testId}
        showLeadingZeros={false}
        maxDate={props.maxDate}
        minDate={props.minDate}
        name={name || null}
        calendarClassName={[
          styles["lumina-date-field-calendar"],
          "lumina-date-field-calendar"
        ].join(" ")}
      />
    </div>
  );
};
