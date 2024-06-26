import React, { Fragment, useState, useEffect, useRef } from "react";
import styles from "../../styles/module.scss";
import { isType } from "../../utils";
const availablePositions = {
  topLeft: "top-left",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right"
};

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const useTouchScreenDetect = () => {
  const isSSR = typeof window === "undefined",
    [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    if (!isSSR) {
      setIsTouchScreen(
        "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    }
  }, [isTouchScreen, isSSR]);

  return isTouchScreen;
};

export default ({ ...props }) => {
  const { location, buttons, mainButtonIcon, menuIdentifier, className } =
    props;
  const { enable = false, icon, label = "Menu" } = menuIdentifier ?? {},
    [isHover, setIsHover] = useState(false),
    [isMenuIdentifier, setIsMenuIdentifier] = useState(true),
    isHasTouch = useTouchScreenDetect(),
    ref = useRef(null),
    radius = 25,
    buttonsLength = buttons.length,
    navigatorDimensions = radius * buttonsLength * 1.6,
    circleRadius = radius * buttonsLength,
    isOnLeft =
      location === availablePositions.topLeft ||
      location === availablePositions.bottomLeft;

  useEffect(() => {
    let timer;
    if (enable) {
      if (isHover) {
        setIsMenuIdentifier(false);
      } else {
        timer = setTimeout(() => {
          setIsMenuIdentifier(!isHover);
        }, (buttons.length * 200) / 2);
      }
    }
    return () => {
      if (enable) {
        clearTimeout(timer);
      }
    };
  }, [enable, isHover, buttons.length]);

  const showFloatingBtnMenu = () => {
    setIsHover(true);
  };
  const hideFloatingBtnMenu = () => {
    setIsHover(false);
  };

  const toggleFloatingBtnMenu = () => {
    setIsHover((prev) => !prev);
  };

  useOutsideClick(ref, () => {
    if (isHasTouch) {
      hideFloatingBtnMenu();
    }
  });

  const setNavigatorLocation = () => {
    switch (location) {
      case availablePositions.topLeft:
        return {
          container: {
            top: 10,
            right: "auto",
            bottom: "auto",
            left: 10
          },
          mainButton: {
            top: 0,
            right: "auto",
            bottom: "auto",
            left: 0
          },
          identifier: {
            top: 20,
            right: "auto",
            bottom: "auto",
            left: 55
          }
        };
      case availablePositions.topRight:
        return {
          container: {
            top: 10,
            right: 10,
            bottom: "auto",
            left: "auto"
          },
          mainButton: {
            top: 0,
            right: 0,
            bottom: "auto",
            left: "auto"
          },
          identifier: {
            top: 20,
            right: 55,
            bottom: "auto",
            left: "auto"
          }
        };
      case availablePositions.bottomLeft:
        return {
          container: {
            top: "auto",
            right: "auto",
            bottom: 10,
            left: 10
          },
          mainButton: {
            top: "auto",
            right: "auto",
            bottom: 0,
            left: 0
          },
          identifier: {
            top: "auto",
            right: "auto",
            bottom: 20,
            left: 55
          }
        };
      default:
        return {
          container: {
            top: "auto",
            right: 10,
            bottom: 10,
            left: "auto"
          },
          mainButton: {
            top: "auto",
            right: 0,
            bottom: 0,
            left: "auto"
          },
          identifier: {
            top: "auto",
            right: 55,
            bottom: 20,
            left: "auto"
          }
        };
    }
  };

  // (x, y) = (r * cos(θ), r * sin(θ))
  const setButtonPosition = (index) => {
    switch (location) {
      case availablePositions.topLeft:
        return {
          top: Math.round(
            circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          right: "auto",
          bottom: "auto",
          left: Math.round(
            circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)
          )
        };
      case availablePositions.topRight:
        return {
          top: Math.round(
            circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          right: Math.round(
            circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          bottom: "auto",
          left: "auto"
        };
      case availablePositions.bottomLeft:
        return {
          top: "auto",
          right: "auto",
          bottom: Math.round(
            circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          left: Math.round(
            circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)
          )
        };
      default:
        return {
          top: "auto",
          right: Math.round(
            circleRadius * Math.cos((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          bottom: Math.round(
            circleRadius * Math.sin((Math.PI / 2 / (buttonsLength - 1)) * index)
          ),
          left: "auto"
        };
    }
  };

  const mouseEnterHandler = () => {
    showFloatingBtnMenu();
  };

  const mouseLeaveHandler = () => {
    hideFloatingBtnMenu();
  };

  const clickHandler = (handler) => {
    hideFloatingBtnMenu();
    handler();
  };

  const { container, mainButton, identifier } = setNavigatorLocation();
  return (
    <>
      {buttonsLength > 1 ? (
        <>
          <div
            ref={ref}
            onMouseEnter={!isHasTouch ? mouseEnterHandler : () => {}}
            onMouseLeave={!isHasTouch ? mouseLeaveHandler : () => {}}
            className={[
              styles["lumina-toggle-nav"],
              "lumina-toggle-nav",
              className || ""
            ].join(" ")}
            style={{
              ...container,
              width: isHover ? navigatorDimensions : 40,
              height: isHover ? navigatorDimensions : 40
            }}
          >
            <button
              className={[
                styles["main-button"],
                "lumina-floating-menu-main-btn"
              ].join(" ")}
              style={{ ...mainButton }}
              onClick={isHasTouch ? toggleFloatingBtnMenu : () => {}}
              aria-label={`Main menu button ${location}`}
            >
              {mainButtonIcon}
            </button>
            {buttons.map((el, i) => (
              <Fragment key={i}>
                <button
                  className={[
                    styles["sub-button"],
                    "lumina-floating-menu-sub-btn"
                  ].join(" ")}
                  style={{
                    opacity: isHover ? 0.9 : 0,
                    top: isHover
                      ? setButtonPosition(i).top
                      : setButtonPosition(i).top === "auto"
                      ? "auto"
                      : 0,
                    right: isHover
                      ? setButtonPosition(i).right
                      : setButtonPosition(i).right === "auto"
                      ? "auto"
                      : 0,
                    bottom: isHover
                      ? setButtonPosition(i).bottom
                      : setButtonPosition(i).bottom === "auto"
                      ? "auto"
                      : 0,
                    left: isHover
                      ? setButtonPosition(i).left
                      : setButtonPosition(i).left === "auto"
                      ? "auto"
                      : 0,
                    transition: `all 0.2s 0.${i + 1}s ease`
                  }}
                  onClick={() => clickHandler(el.click)}
                >
                  {el.icon}
                </button>
              </Fragment>
            ))}
          </div>
          {/* {enable && isMenuIdentifier && (
            <div
              className={`${styles["lumina-menu-identifier"]} ${className}`}
              style={{
                ...identifier,
                flexDirection: isOnLeft ? "row" : "row-reverse"
              }}
            >
              {icon ? (
                icon
              ) : (
                <i
                  className={`far fa-hand-point-${isOnLeft ? "left" : "right"}`}
                />
              )}{" "}
              <span
                style={{
                  paddingLeft: isOnLeft ? 5 : 0,
                  paddingRight: !isOnLeft ? 5 : 0
                }}
              >
                {label}
              </span>
            </div>
          )} */}
        </>
      ) : (
        <div
          className={[styles["lumina-toggle-nav"], "lumina-toggle-nav"].join(
            " "
          )}
          style={{
            ...container,
            width: 150
          }}
        >
          Must be more than one button
        </div>
      )}
    </>
  );
};
