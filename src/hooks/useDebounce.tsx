import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const debounces = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => {
      clearTimeout(debounces);
    };
  }, [value, delay]);
  return debounce;
};
