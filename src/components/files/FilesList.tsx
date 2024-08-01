import { list } from "@vercel/blob";
import { wait } from "@/lib/utils";
import { DeleteForm } from "@/components/form/DeleteFileForm";
import { EditFileButton } from "./EditFileButton";

const FAKE_DELAY_MS = 9000;

export async function FilesList() {
  async function allFiles() {
    // Fake delay to see the skeleton
    await wait(FAKE_DELAY_MS);
    const blobs = await list();
    return blobs;
  }
  const listOfFiles = await allFiles();

  return (
    <ul>
      {listOfFiles.blobs.map((blob) => (
        <li key={blob.url} className="my-3">
          <a href={blob.downloadUrl} className="hover:bg-slate-200">
            {blob.pathname}
          </a>
          <EditFileButton fileUrl={blob.url} name={blob.pathname} />
          <DeleteForm fileUrl={blob.url} />
        </li>
      ))}
    </ul>
  );
}
