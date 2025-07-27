import { PropsWithChildren } from 'react';

interface TypographyProps extends PropsWithChildren {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'caption';
}

export function Typography({ variant = 'body1', children }: TypographyProps) {
  const classNames = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-normal',
    h5: 'text-lg font-light',
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs text-gray-500',
  };

  return <div className={classNames[variant]}>{children}</div>;
}
