import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button variant="outline">Upload file</Button>
    </main>
  );
}
