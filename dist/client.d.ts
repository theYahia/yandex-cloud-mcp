export declare function getFolderId(): string;
export declare function computeGet(path: string): Promise<unknown>;
export declare function computePost(path: string, body?: unknown): Promise<unknown>;
export declare function storageGet(path: string): Promise<unknown>;
export declare function serverlessGet(path: string): Promise<unknown>;
export declare function serverlessPost(path: string, body: unknown): Promise<unknown>;
export declare function operationsGet(operationId: string): Promise<unknown>;
