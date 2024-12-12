// components/Skeleton.tsx
export default function InternSkeleton() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
