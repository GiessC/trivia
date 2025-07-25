export function Divider({ className }: { className?: string }) {
  return (
    <hr className={`border-t border-divider brightness-150 ${className}`} />
  );
}
