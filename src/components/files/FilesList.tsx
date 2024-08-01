import { list } from "@vercel/blob";
import { wait } from "@/lib/utils";
import { DeleteForm } from "@/components/form/DeleteFileForm";

const FAKE_DELAY_MS = 4000;

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
      {listOfFiles.blobs.map((file) => (
        <li key={file.url} className="my-3">
          <a href={file.downloadUrl} className="hover:bg-slate-200">
            {file.pathname}
          </a>
          <DeleteForm fileUrl={file.url} />
        </li>
      ))}
    </ul>
  );
}
