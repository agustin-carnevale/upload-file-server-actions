import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

import { Button } from "@/components/ui/button";

export async function UploadFileForm() {
  async function uploadFile(formData: FormData) {
    "use server";
    const file = formData.get("file") as File;
    const blob = await put(file.name, file, {
      access: "public",
    });
    revalidatePath("/");
    return blob;
  }

  return (
    <form action={uploadFile} className="flex flex-col">
      <label htmlFor="file">File to upload</label>
      <input type="file" id="file" name="file" required />
      <Button variant="default" className="my-5">
        Upload
      </Button>
    </form>
  );
}
