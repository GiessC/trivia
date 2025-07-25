import { Button, ButtonProps } from './button';

export function IconButton({
  children,
  ...buttonProps
}: Omit<ButtonProps, 'variant'>) {
  return (
    <Button
      {...buttonProps}
      className='!bg-inherit !p-1 filter hover:backdrop-brightness-150 focus:backdrop-brightness-150 focus:ring-2 ring-focus-ring aspect-square inline-flex rounded-full items-center justify-center'
    >
      {children}
    </Button>
  );
}
