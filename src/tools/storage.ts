import { z } from "zod";
import { storageGet, getFolderId } from "../client.js";

export const listBucketsSchema = z.object({
  folder_id: z.string().optional().describe("ID каталога (по умолчанию из env)"),
});

export async function handleListBuckets(params: z.infer<typeof listBucketsSchema>): Promise<string> {
  const folderId = params.folder_id || getFolderId();
  const result = await storageGet(`/buckets?folderId=${folderId}`);
  return JSON.stringify(result, null, 2);
}
