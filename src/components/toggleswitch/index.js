import React from "react";
import styles from "../../styles/module.scss";
const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
  className
}) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div
      className={[
        `${styles["toggle-switch"]}`,
        `toggle-switch`,
        `${className}`
      ].join(" ")}
    >
      <input
        type='checkbox'
        name={name}
        className={[
          `${styles["toggle-switch-checkbox"]}`,
          `toggle-switch-checkbox`
        ].join(" ")}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className={[
            `${styles["toggle-switch-label"]}`,
            `toggle-switch-label`
          ].join(" ")}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? [
                    `${styles["toggle-switch-inner"]}`,
                    `toggle-switch-inner`,
                    `${styles["toggle-switch-disabled"]}`,
                    `toggle-switch-disabled`
                  ].join(" ")
                : [
                    `${styles["toggle-switch-inner"]}`,
                    `toggle-switch-inner`
                  ].join(" ")
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? [
                    `${styles["toggle-switch-switch"]}`,
                    `toggle-switch-switch`,
                    `${styles["toggle-switch-disabled"]}`,
                    `toggle-switch-disabled`
                  ].join(" ")
                : [
                    `${styles["toggle-switch-switch"]}`,
                    `toggle-switch-switch`
                  ].join(" ")
            }
            tabIndex={-1}
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
          />
        </label>
      ) : null}
    </div>
  );
};

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"]
};

// ToggleSwitch.propTypes = {
//   id: PropTypes.string.isRequired,
//   checked: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   optionLabels: PropTypes.array,
//   small: PropTypes.bool,
//   disabled: PropTypes.bool
// };

export default ToggleSwitch;
