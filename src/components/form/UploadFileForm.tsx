"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { uploadFile } from "@/actions/file-actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FormState } from "./types";

const initialState: FormState = {
  status: "initial",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="default" className="my-5" type="submit" disabled={pending}>
      Upload
    </Button>
  );
}

export function UploadFileForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState, FormData>(
    uploadFile,
    initialState
  );

  useEffect(() => {
    if (state.status === "error") {
      toast({
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="file">File to upload</label>
      <input type="file" id="file" name="file" required />
      <SubmitButton />
    </form>
  );
}
