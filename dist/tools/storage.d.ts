import { z } from "zod";
export declare const listBucketsSchema: z.ZodObject<{
    folder_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folder_id?: string | undefined;
}, {
    folder_id?: string | undefined;
}>;
export declare function handleListBuckets(params: z.infer<typeof listBucketsSchema>): Promise<string>;
