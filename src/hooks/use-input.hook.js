import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: event => setValue(event.target.value),
  };

  const setNew = newValue => setValue(newValue);

  return [value, bind, setNew];
}
