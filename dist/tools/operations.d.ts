import { z } from "zod";
export declare const getOperationSchema: z.ZodObject<{
    operation_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    operation_id: string;
}, {
    operation_id: string;
}>;
export declare function handleGetOperation(params: z.infer<typeof getOperationSchema>): Promise<string>;
