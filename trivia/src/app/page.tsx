'use client';

import { Button } from './components/button';
import { Dialog } from './components/dialog';
import { useOpenable } from './hooks/use-openable';

export default function Home() {
  const { isOpen, handleOpen, handleClose } = useOpenable();

  return (
    <>
      <Button
        variant='primary'
        onClick={handleOpen}
      >
        Add Quiz
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
      >
        Test
      </Dialog>
    </>
  );
}
