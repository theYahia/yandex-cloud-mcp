import { z } from "zod";
export declare const listInstancesSchema: z.ZodObject<{
    folder_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folder_id?: string | undefined;
}, {
    folder_id?: string | undefined;
}>;
export declare function handleListInstances(params: z.infer<typeof listInstancesSchema>): Promise<string>;
export declare const getInstanceSchema: z.ZodObject<{
    instance_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    instance_id: string;
}, {
    instance_id: string;
}>;
export declare function handleGetInstance(params: z.infer<typeof getInstanceSchema>): Promise<string>;
export declare const startInstanceSchema: z.ZodObject<{
    instance_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    instance_id: string;
}, {
    instance_id: string;
}>;
export declare function handleStartInstance(params: z.infer<typeof startInstanceSchema>): Promise<string>;
export declare const stopInstanceSchema: z.ZodObject<{
    instance_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    instance_id: string;
}, {
    instance_id: string;
}>;
export declare function handleStopInstance(params: z.infer<typeof stopInstanceSchema>): Promise<string>;
