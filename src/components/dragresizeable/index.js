import React from "react";
import useDraggableResizer from "./useDraggableResizer";
import MoreVertical from "../../assets/icons/MoreVertical";
import styles from "../../styles/module.scss";

const ResizablePanel = ({
  leftContent,
  rightContent,
  initialWidth = window.innerWidth * 0.4,
  className,
  id
}) => {
  const { containerRef, columnWidth, setResizing } =
    useDraggableResizer(initialWidth);

  return (
    <div
      className={`${styles["lumina-resizable-panel"]} lumina-resizable-panel ${
        className || ""
      }`}
      id={id || null}
    >
      <div
        className={`${styles["lumina-left-container"]} lumina-left-container`}
        style={{ width: columnWidth }}
        ref={containerRef}
      >
        {leftContent}
        <div
          className={`${styles["lumina-resize-handle"]} lumina-resize-handle`}
          onMouseDown={() => setResizing(true)}
        >
          <MoreVertical width={38} height={38} />
        </div>
      </div>
      <div
        className={`${styles["lumina-right-container"]} lumina-right-container`}
        style={{ width: `calc(100% - ${columnWidth}px)` }}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default ResizablePanel;
