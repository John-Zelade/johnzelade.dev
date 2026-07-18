import type { ReactNode } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

interface QueryStateProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
  children: ReactNode;
}

/** Centralizes the loading / error / empty branches so page components stay focused on layout. */
export function QueryState({
  isLoading,
  isError,
  isEmpty,
  emptyMessage = "Nothing here yet.",
  children,
}: QueryStateProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-muted-foreground">
        <Loader2 className="animate-spin" size={28} />
        <p className="text-sm">Loading…</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center text-muted-foreground">
        <AlertCircle size={28} className="text-destructive" />
        <p className="text-sm">Something went wrong while loading this content.</p>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center text-muted-foreground">
        <p className="text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return <>{children}</>;
}
