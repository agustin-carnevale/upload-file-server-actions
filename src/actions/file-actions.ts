"use server";

import { revalidatePath } from "next/cache";
import { put, del } from "@vercel/blob";
import { isFileBiggerThan5MB } from "@/lib/utils";
import type { FormState } from "@/components/form/types";

export async function uploadFile(prevState: FormState, formData: FormData) {
  const file = formData.get("file") as File;
  if (isFileBiggerThan5MB(file)) {
    return {
      status: "error",
      message: "Sorry file is too big. Should be 5MB or less.",
    } as FormState;
  }

  try {
    // HERE would be the place for 1-a call a third party API (example.com) when the upload begins
    const blob = await put(file.name, file, {
      access: "public",
    });
    // HERE would be the place for 1-b call a third party API (example.com) when the upload succeeds
    revalidatePath("/");
    return {
      status: "success",
      message: `File ${blob.pathname} uploaded successfully.`,
    } as FormState;
  } catch (e) {
    // HERE would be the place for 1-c call a third party API (example.com) when the upload fails
    return { status: "error", message: "Failed to upload file" } as FormState;
  }
}

export async function deleteFile(prevState: FormState, formData: FormData) {
  const fileUrl = formData.get("fileUrl") as string;

  try {
    await del(fileUrl);
    revalidatePath("/");
    return {
      status: "success",
      message: "",
    } as FormState;
  } catch (e) {
    return { status: "error", message: "" } as FormState;
  }
}

export async function renameFile(prevState: FormState, formData: FormData) {
  const fileUrl = formData.get("fileUrl") as string;
  const newName = formData.get("newName") as string;

  try {
    // Get original file from url
    const fileResponse = await fetch(fileUrl);
    const fileBuffer = await fileResponse.arrayBuffer();

    // Create a new copy with new name
    await put(newName, fileBuffer, {
      access: "public",
    });

    // Delete original file from storage
    await del(fileUrl);

    revalidatePath("/");
    return {
      status: "success",
      message: "",
    } as FormState;
  } catch (e) {
    return { status: "error", message: "" } as FormState;
  }
}
