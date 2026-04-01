export interface Instance {
    id: string;
    folderId: string;
    name: string;
    description?: string;
    zoneId: string;
    platformId: string;
    status: string;
    createdAt: string;
    networkInterfaces?: Array<{
        index: string;
        macAddress: string;
        subnetId: string;
        primaryV4Address?: {
            address: string;
            oneToOneNat?: {
                address: string;
            };
        };
    }>;
}
export interface ListInstancesResponse {
    instances: Instance[];
    nextPageToken?: string;
}
export interface Bucket {
    name: string;
    folderId: string;
    createdAt: string;
    defaultStorageClass: string;
    versioning: string;
}
export interface ListBucketsResponse {
    buckets: Bucket[];
}
export interface CloudFunction {
    id: string;
    folderId: string;
    name: string;
    description?: string;
    status: string;
    runtime: string;
    createdAt: string;
    httpInvokeUrl?: string;
}
export interface ListFunctionsResponse {
    functions: CloudFunction[];
    nextPageToken?: string;
}
export interface OperationResponse {
    id: string;
    description?: string;
    createdAt: string;
    modifiedAt: string;
    done: boolean;
    response?: unknown;
    error?: {
        code: number;
        message: string;
        details?: unknown[];
    };
}
