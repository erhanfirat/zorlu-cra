// key, value

import { useEffect, useState } from "react";

export const useLocalStorage = (key, valueInitial) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);

    if (localValue) {
      return JSON.parse(localValue);
    }

    return valueInitial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
