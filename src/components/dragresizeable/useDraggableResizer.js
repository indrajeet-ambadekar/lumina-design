import { useState, useRef, useEffect } from "react";

const useDraggableResizer = (initialWidth) => {
  const [columnWidth, setColumnWidth] = useState(initialWidth);
  const containerRef = useRef(null);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (resizing && containerRef.current) {
        // Calculate new width with constraints
        const newWidth = Math.max(
          Math.min(
            event.clientX - containerRef.current.getBoundingClientRect().left,
            window.innerWidth * 0.8 // Maximum width is 80% of window's inner width
          ),
          window.innerWidth * 0.2 // Minimum width is 20% of window's inner width
        );
        setColumnWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setResizing(false);
      document.body.classList.remove("resizing");
    };

    if (resizing) {
      document.body.classList.add("resizing");
    } else {
      document.body.classList.remove("resizing");
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizing]);

  return {
    containerRef,
    columnWidth,
    setResizing
  };
};

export default useDraggableResizer;
