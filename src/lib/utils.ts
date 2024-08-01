import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isFileBiggerThan5MB(file: File) {
  const sizeInBytes = file.size;
  const fiveMegabytesInBytes = 5 * 1024 * 1024; // 5 MB in bytes
  return sizeInBytes > fiveMegabytesInBytes;
}
