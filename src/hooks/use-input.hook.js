import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: event => setValue(event.target.value),
  };

  return [value, bind];
}
