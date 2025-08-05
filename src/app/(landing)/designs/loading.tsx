"use client";
export default function DesignsLoader() {
  const LineSeparator = () => (
    <div className="my-6">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent opacity-50" />
    </div>
  );

  const LoaderItem = ({ index }: { index: number }) => (
    <div className="group relative">
      {/* Line box container */}
      <div className="relative border border-neutral-300 dark:border-neutral-700 p-4 bg-transparent">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-600 -translate-x-px -translate-y-px" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-600 translate-x-px -translate-y-px" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-600 -translate-x-px translate-y-px" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-600 translate-x-px translate-y-px" />
        
        <div className="relative overflow-hidden rounded-lg">
          {/* Main content skeleton */}
          <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse relative">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"></div>
            
            {/* Play icon for video items (alternating pattern) */}
            {index % 2 === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-neutral-300 dark:bg-neutral-700 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-0 h-0 border-l-[12px] border-l-neutral-400 dark:border-l-neutral-600 border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Badge skeleton */}
          <div className="absolute bottom-3 right-3">
            <div className="w-16 h-7 bg-neutral-300 dark:bg-neutral-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-10">
      <div className="pb-12">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="w-48 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse mb-2"></div>
          <div className="w-96 h-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Design Grid skeleton */}
        <div className="space-y-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <LoaderItem index={index} />
              
              {/* Line Separator - only between items, not after last */}
              {index < 3 && <LineSeparator />}
            </div>
          ))}
        </div>

        {/* Footer Stats skeleton */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mx-auto mb-2"></div>
                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}