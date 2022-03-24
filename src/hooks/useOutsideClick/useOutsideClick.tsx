import { RefObject, useEffect, useState } from 'react';

type THookType = {
  selected: boolean;
  setSelected: (flag: boolean) => void;
};

export const useOutsideClick = (
  ref: RefObject<any>,
  callback?: () => void
): THookType => {
  const [selected, setSelected] = useState(false);

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      event.button === 0 &&
      ref.current &&
      !ref.current.contains(event.target) &&
      selected
    ) {
      if (callback) {
        callback();
      }

      setSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selected, ref]);

  return { selected, setSelected };
};
