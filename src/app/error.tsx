"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h2 className="text-3xl my-4">Uppps...Something went wrong!</h2>
      <Button onClick={() => reset()}>Please try again</Button>
    </div>
  );
}
