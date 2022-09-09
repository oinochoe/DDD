import { useCallback, useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [position, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  const updatePosition = useCallback(() => {
    setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
  }, [setPosition]);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [updatePosition]);

  return position;
};
