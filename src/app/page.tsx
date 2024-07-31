import { Suspense } from "react";
import { FilesList } from "@/components/files/FilesList";
import { FilesListSkeleton } from "@/components/files/FilesListSkeleton";
import { UploadFileForm } from "@/components/form/UploadFileForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <UploadFileForm />

      <Suspense fallback={<FilesListSkeleton />}>
        <FilesList />
      </Suspense>
    </main>
  );
}
