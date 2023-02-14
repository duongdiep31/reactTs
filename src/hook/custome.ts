import { useEffect, useState } from "react";

export const useScreen = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const onResize = () => {
    setHeight(innerHeight);
    setWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize();

    return () => window.removeEventListener("resize", onResize)
  }, []);

  return [width, height];
};
