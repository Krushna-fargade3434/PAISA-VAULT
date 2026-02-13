import { Skeleton } from '@/components/ui/skeleton';

export const PageLoadingSkeleton = () => {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-[400px] w-full" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="space-y-3 p-4 border rounded-lg">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  );
};

export const TableSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" />
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
};
