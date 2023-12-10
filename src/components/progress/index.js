import React, { Fragment } from "react";
import styles from "../../styles/module.scss";
import { LuminaIcon } from "lumina-design-icons";
export default ({ ...props }) => {
  let {
    className,
    style,
    id,
    mode,
    type,
    size,
    value,
    label,
    total,
    strokeWidth,
    success,
    error
  } = props;

  if (mode === "radial") {
    if (Number(size) < 40) {
      throw new Error(`Radial Progress Indicator needs a minimum size of '40'`);
    }
    return (
      <div
        className={[
          styles["lumina-progress-radial"],
          "lumina-progress-radial",
          className || ""
        ].join(" ")}
        style={{
          ...style,
          width: Number(size) || 50,
          height: Number(size) || 50
        }}
        id={id || null}
      >
        <CircularProgressBar
          strokeWidth={Number(strokeWidth) || 3}
          sqSize={Number(size) || 50}
          value={value}
          type={type || "step"}
          total={total}
          success={success}
          error={error}
        />
        {success && (
          <div
            className={[
              styles["lumina-progress-status"],
              styles["lumina-progress-status-green"]
            ].join(" ")}
          >
            <LuminaIcon size={14} name='check' />
          </div>
        )}
        {error && (
          <div
            className={[
              styles["lumina-progress-status"],
              styles["lumina-progress-status-red"]
            ].join(" ")}
          >
            <LuminaIcon size={14} name='exclamation-triangle' />
          </div>
        )}
      </div>
    );
  } else if (mode === "linear") {
    if (Number(size) < 40) {
      throw new Error(`Linear Progress Indicator needs a minimum size of '5'`);
    }
    let _percentage = (Number(value) / Number(total)) * 100;
    return (
      <div
        className={[
          styles["lumina-progress-linear"],
          "lumina-progress-linear",
          className || ""
        ].join(" ")}
        style={{ ...style }}
        id={id || null}
      >
        <div
          className={[
            styles["lumina-prgs-lnr-fill"],
            _percentage === 100 ? styles["lumina-prgs-lnr-fill-complete"] : ""
          ].join(" ")}
          style={{
            height: Number(strokeWidth) || 5,
            width: `${_percentage}%`
          }}
        ></div>
        {label != null ? (
          <span className={[styles["lumina-prgs-lnr-label"]]}>{label}</span>
        ) : (
          ""
        )}
        {label != null ? (
          <span className={[styles["lumina-prgs-lnr-value"]]}>
            {_percentage}%
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
};

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _getLabel = (_percentage) => {
    if (!this.props.success && !this.props.error) {
      return this.props.type === "percentage"
        ? `${_percentage}%`
        : `${this.props.value}/${this.props.total}`;
    } else if (!this.props.success && this.props.error) {
      return "";
    } else if (this.props.success && !this.props.error) {
      return "";
    }
  };
  render() {
    let _percentage =
      (Number(this.props.value) / Number(this.props.total)) * 100;
    const sqSize = this.props.sqSize;
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * _percentage) / 100;
    return (
      <>
        <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}
        >
          <circle
            className={styles["circle-background"]}
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
          />
          <circle
            className={
              _percentage < 100
                ? styles["circle-progress"]
                : styles[
                    `circle-progress${this.props.success ? "-complete" : ""}`
                  ]
            }
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${
              this.props.sqSize / 2
            })`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }}
          />
          <text
            className={
              _percentage < 100
                ? styles["circle-text"]
                : styles[`circle-text${this.props.success ? "-complete" : ""}`]
            }
            x='50%'
            y='50%'
            dy='.3em'
            textAnchor='middle'
          >
            {this._getLabel(_percentage)}
          </text>
        </svg>
      </>
    );
  }
}
CircularProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5
};
