"use client";

import { useFormStatus, useFormState } from "react-dom";
import { Trash } from "lucide-react";
import { deleteFile } from "@/actions/file-actions";
import { Button } from "@/components/ui/button";
import type { FormState } from "./types";

const initialState: FormState = {
  status: "initial",
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="ghost" size="icon" type="submit" disabled={pending}>
      <Trash className="h-4 w-4" />
    </Button>
  );
}

export function DeleteForm({ fileUrl }: { fileUrl: string }) {
  const [state, formAction] = useFormState<FormState, FormData>(
    deleteFile,
    initialState
  );

  return (
    <form action={formAction} className="inline">
      <input type="hidden" name="fileUrl" value={fileUrl} />
      <DeleteButton />
    </form>
  );
}
