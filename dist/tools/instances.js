import { z } from "zod";
import { computeGet, computePost, getFolderId } from "../client.js";
export const listInstancesSchema = z.object({
    folder_id: z.string().optional().describe("ID каталога (по умолчанию из env)"),
});
export async function handleListInstances(params) {
    const folderId = params.folder_id || getFolderId();
    const result = await computeGet(`/instances?folderId=${folderId}`);
    return JSON.stringify(result, null, 2);
}
export const getInstanceSchema = z.object({
    instance_id: z.string().describe("ID виртуальной машины"),
});
export async function handleGetInstance(params) {
    const result = await computeGet(`/instances/${params.instance_id}`);
    return JSON.stringify(result, null, 2);
}
export const startInstanceSchema = z.object({
    instance_id: z.string().describe("ID виртуальной машины для запуска"),
});
export async function handleStartInstance(params) {
    const result = await computePost(`/instances/${params.instance_id}:start`);
    return JSON.stringify(result, null, 2);
}
export const stopInstanceSchema = z.object({
    instance_id: z.string().describe("ID виртуальной машины для остановки"),
});
export async function handleStopInstance(params) {
    const result = await computePost(`/instances/${params.instance_id}:stop`);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=instances.js.map