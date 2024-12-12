// Highlight.tsx
import { cn } from "@/utils/cn"; // Adjust the path as needed

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-purple-100 text-purple-700 dark:bg-purple-700/[0.2] dark:text-purple-500 px-1.5 py-0.5 rounded-md transition-colors duration-200",
        className
      )}
    >
      {children}
    </span>
  );
};
