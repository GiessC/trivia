import { PropsWithChildren } from 'react';

export interface DialogProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export function Dialog({ children, isOpen, onClose }: DialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className='fixed inset-0 z-[9999] bg-black/50'
        onClick={onClose}
      />
      <div className='z-[10000] bg-floating border rounded-lg fixed flex max-w-3/4 max-h-3/4 justify-center items-center inset-0 m-auto'>
        {children}
      </div>
    </>
  );
}
