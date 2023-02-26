import { useLayoutEffect, useState } from "react";

function useResize() {
  const [size, setsize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setsize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useResize;
