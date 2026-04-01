import { z } from "zod";
import { serverlessGet, serverlessPost, getFolderId } from "../client.js";

export const listFunctionsSchema = z.object({
  folder_id: z.string().optional().describe("ID каталога (по умолчанию из env)"),
});

export async function handleListFunctions(params: z.infer<typeof listFunctionsSchema>): Promise<string> {
  const folderId = params.folder_id || getFolderId();
  const result = await serverlessGet(`/functions?folderId=${folderId}`);
  return JSON.stringify(result, null, 2);
}

export const invokeFunctionSchema = z.object({
  function_id: z.string().describe("ID serverless-функции"),
  payload: z.string().default("{}").describe("JSON payload для вызова функции"),
});

export async function handleInvokeFunction(params: z.infer<typeof invokeFunctionSchema>): Promise<string> {
  const body = JSON.parse(params.payload);
  const result = await serverlessPost(`/functions/${params.function_id}:invoke`, body);
  return JSON.stringify(result, null, 2);
}
