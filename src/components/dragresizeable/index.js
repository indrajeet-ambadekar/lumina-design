import React from "react";
import useDraggableResizer from "./useDraggableResizer";
import MoreVertical from "../../assets/icons/MoreVertical";
import styles from "../../styles/module.scss";

const ResizablePanel = ({
  leftContent,
  rightContent,
  initialWidth = window.innerWidth * 0.4
}) => {
  const { containerRef, columnWidth, setResizing } =
    useDraggableResizer(initialWidth);

  return (
    <div className={`${styles["resizable-panel"]} resizable-panel`}>
      <div
        className={`${styles["left-container"]} left-container`}
        style={{ width: columnWidth }}
        ref={containerRef}
      >
        {leftContent}
        <div
          className={`${styles["resize-handle"]} resize-handle`}
          onMouseDown={() => setResizing(true)}
        >
          <MoreVertical width={38} height={38} />
        </div>
      </div>
      <div
        className={`${styles["right-container"]} right-container`}
        style={{ width: `calc(100% - ${columnWidth}px)` }}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default ResizablePanel;
