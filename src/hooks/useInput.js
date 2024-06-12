import { useState } from "react";

export const useInput = (initialValue = "", manipulator) => {
  const [value, setValue] = useState(initialValue);

  const inputChangeHandler = (e) => {
    if (manipulator) {
      setValue(manipulator(e.target.value));
    } else {
      setValue(e.target.value);
    }
  };

  return [value, inputChangeHandler];
};
