import { Skeleton } from "@/components/ui/skeleton";

export function FilesListSkeleton() {
  return (
    <ul>
      <li className="my-2">
        <Skeleton className="h-4 w-[250px]" />
      </li>
      <li className="my-2">
        <Skeleton className="h-4 w-[250px]" />
      </li>
      <li className="my-2">
        <Skeleton className="h-4 w-[250px]" />
      </li>
      <li className="my-2">
        <Skeleton className="h-4 w-[250px]" />
      </li>
      <li className="my-2">
        <Skeleton className="h-4 w-[250px]" />
      </li>
    </ul>
  );
}
