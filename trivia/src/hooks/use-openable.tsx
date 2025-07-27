import { useState } from 'react';

export function useOpenable() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function toggleOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    toggleOpen,
  };
}
