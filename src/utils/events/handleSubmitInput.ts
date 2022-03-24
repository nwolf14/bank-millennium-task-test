import { KeyboardEvent } from 'react';

// others
import { KeyboardKeys } from '../../enums';

export const handleSubmitInput =
  (
    key: KeyboardKeys,
    current: any
  ): ((event: KeyboardEvent<HTMLInputElement>) => void) =>
  (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === key) {
      current?.blur();
    }
  };
