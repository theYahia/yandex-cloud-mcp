import { z } from "zod";
export declare const listFunctionsSchema: z.ZodObject<{
    folder_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folder_id?: string | undefined;
}, {
    folder_id?: string | undefined;
}>;
export declare function handleListFunctions(params: z.infer<typeof listFunctionsSchema>): Promise<string>;
export declare const invokeFunctionSchema: z.ZodObject<{
    function_id: z.ZodString;
    payload: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    function_id: string;
    payload: string;
}, {
    function_id: string;
    payload?: string | undefined;
}>;
export declare function handleInvokeFunction(params: z.infer<typeof invokeFunctionSchema>): Promise<string>;
