"use client";

import { useFormStatus, useFormState } from "react-dom";
import { renameFile } from "@/actions/file-actions";
import { Button } from "@/components/ui/button";
import type { FormState } from "./types";
import { DialogFooter } from "../ui/dialog";
import { useState } from "react";

const initialState: FormState = {
  status: "initial",
  message: "",
};

function RenameButton() {
  const { pending } = useFormStatus();

  return (
    <DialogFooter>
      <Button type="submit" disabled={pending}>
        Save changes
      </Button>
    </DialogFooter>
  );
}

export function RenameFileForm({
  fileUrl,
  name,
}: {
  fileUrl: string;
  name: string;
}) {
  const [newName, setNewName] = useState(name);
  const [state, formAction] = useFormState<FormState, FormData>(
    renameFile,
    initialState
  );

  return (
    <form action={formAction} className="inline">
      <input type="hidden" name="fileUrl" value={fileUrl} />
      <input
        name="newName"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <RenameButton />
    </form>
  );
}
