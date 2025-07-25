type ButtonVariant = 'primary' | 'secondary' | 'outlined';

export interface ButtonProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'type'
  > {
  className?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  className = '',
  variant = 'primary',
  children,
  ...nativeButtonProps
}: ButtonProps) {
  function variantStyles(): string {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600';
      case 'outlined':
        return 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  }

  return (
    <button
      {...nativeButtonProps}
      className={`cursor-pointer font-bold py-2 px-4 rounded transition duration-100 ease-in-out ${variantStyles()} ${className}`}
    >
      {children}
    </button>
  );
}
