import { useState, useEffect } from "react";

const getWindowWidth = () => {
  const width = window.innerWidth;
  return width;
};

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
