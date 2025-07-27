import { PropsWithChildren } from 'react';
import { Typography } from './typography';
import { Divider } from './divider';
import { XIcon } from 'lucide-react';
import { IconButton } from './icon-button';

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
      <div className='z-[10000] bg-floating rounded-lg fixed flex flex-col min-w-7/8 sm:min-w-1/2 md:min-w-1/3 w-fit max-h-3/4 h-fit inset-0 m-auto'>
        {children}
      </div>
    </>
  );
}

export function DialogHeader({
  title,
  onClose,
}: Pick<DialogProps, 'onClose'> & { title: string }) {
  return (
    <>
      <div className='min-h-12 flex w-full p-4'>
        <Typography variant='h4'>{title}</Typography>
        <div className='grow' />
        <IconButton
          onClick={onClose}
          aria-label='Close'
        >
          <XIcon />
        </IconButton>
      </div>
      <Divider />
    </>
  );
}

export function DialogContent({
  className,
  children,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className={`p-4 overflow-y-auto max-h-full grow ${className}`}>
      {children}
    </div>
  );
}

type DialogFooterProps = PropsWithChildren & {
  className?: string;
  withDivider?: boolean;
};

export function DialogFooter({
  className,
  children,
  withDivider = false,
}: DialogFooterProps) {
  return (
    <>
      {withDivider && <Divider />}
      <div className={`p-4 flex shrink grow-0 ${className}`}>{children}</div>
    </>
  );
}
