import { z } from "zod";
import { operationsGet } from "../client.js";
export const getOperationSchema = z.object({
    operation_id: z.string().describe("ID операции для проверки статуса"),
});
export async function handleGetOperation(params) {
    const result = await operationsGet(params.operation_id);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=operations.js.map