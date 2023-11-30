import React, { Fragment, useState, useEffect } from "react";
import styles from "../../styles/module.scss";
export default function RangeSlider({ ...props }) {
  const { min, max, step, value, onChange, label, id, className } = props;
  const [sliderVal, setSliderVal] = useState(props.value || 1);
  const [barVal, setBarVal] = useState(0);
  if (isNaN(min) || isNaN(max) || isNaN(step) || isNaN(value)) {
    throw new Error(`'min','max','step','value' must be integers.`);
  }

  if (Number(min) >= Number(max)) {
    throw new Error(`'min' attribute should be less than 'max' attribute`);
  }
  if (Number(value) > Number(max)) {
    throw new Error(`'value' attribute should be less than 'max' attribute`);
  }
  useEffect(() => {
    let _temp = (Number(sliderVal) - Number(min)) / (Number(max) - Number(min));
    setBarVal(_temp);
  }, []);
  useEffect(() => {
    props.onChange(sliderVal);
  }, [sliderVal]);
  const _handleDrag = (val) => {
    setSliderVal(val);
    let _temp = (Number(val) - Number(min)) / (Number(max) - Number(min));
    setBarVal(_temp);
  };
  return (
    <div
      className={[
        styles["lumina-slider-wrapper"],
        "lumina-slider-wrapper",
        className
      ].join(" ")}
      style={props?.style || {}}
      id={id || null}
    >
      <div className={styles["lumina-slider-label-row"]}>
        <label
          className={[
            styles["lumina-slider-label"],
            "lumina-slider-label"
          ].join(" ")}
        >
          {label}
        </label>

        {props.showValue && (
          <label
            className={[
              styles["lumina-slider-label"],
              "lumina-slider-label"
            ].join(" ")}
          >
            <b>{value}</b>
          </label>
        )}
      </div>
      <input
        className={[styles["lumina-range-slider"], "lumina-range-slider"].join(
          " "
        )}
        type='range'
        min={min}
        max={max}
        value={value}
        step={step || 1}
        onChange={(e) => _handleDrag(e.target.value)}
        style={{
          backgroundImage:
            "-webkit-gradient(linear, left top, right top, " +
            "color-stop(" +
            barVal +
            ", #b11116), " +
            "color-stop(" +
            barVal +
            ", #d1d3d4)" +
            ")"
        }}
      />
      <div className={styles["lumina-slider-label-row"]}>
        <label
          className={[
            styles["lumina-slider-label"],
            "lumina-slider-label"
          ].join(" ")}
        >
          {min}
        </label>

        <label
          className={[
            styles["lumina-slider-label"],
            "lumina-slider-label"
          ].join(" ")}
        >
          {max}
        </label>
      </div>
    </div>
  );
}
