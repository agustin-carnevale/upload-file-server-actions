"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RenameFileForm } from "../form/RenameFileForm";

interface EditFileButtonProps {
  fileUrl: string;
  name: string;
}

export function EditFileButton({ fileUrl, name }: EditFileButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename File</DialogTitle>
        </DialogHeader>
        <RenameFileForm fileUrl={fileUrl} name={name} />
      </DialogContent>
    </Dialog>
  );
}
