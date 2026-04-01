const COMPUTE_BASE = "https://compute.api.cloud.yandex.net/compute/v1";
const STORAGE_BASE = "https://storage.api.cloud.yandex.net/storage/v1";
const SERVERLESS_BASE = "https://serverless-functions.api.cloud.yandex.net/functions/v1";
const OPERATIONS_BASE = "https://operation.api.cloud.yandex.net/operations";
const TIMEOUT = 30_000;
const MAX_RETRIES = 3;
function getHeaders() {
    const token = process.env.YANDEX_CLOUD_TOKEN;
    if (!token)
        throw new Error("YANDEX_CLOUD_TOKEN не задан");
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
}
export function getFolderId() {
    const folderId = process.env.YANDEX_CLOUD_FOLDER_ID;
    if (!folderId)
        throw new Error("YANDEX_CLOUD_FOLDER_ID не задан");
    return folderId;
}
async function fetchWithRetry(url, options) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), TIMEOUT);
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            clearTimeout(timer);
            if (response.ok)
                return response.json();
            if ((response.status === 429 || response.status >= 500) && attempt < MAX_RETRIES) {
                const delay = Math.min(1000 * 2 ** (attempt - 1), 8000);
                console.error(`[yandex-cloud-mcp] ${response.status}, повтор через ${delay}мс (${attempt}/${MAX_RETRIES})`);
                await new Promise(r => setTimeout(r, delay));
                continue;
            }
            const text = await response.text().catch(() => "");
            throw new Error(`Yandex Cloud HTTP ${response.status}: ${text || response.statusText}`);
        }
        catch (error) {
            clearTimeout(timer);
            if (error instanceof DOMException && error.name === "AbortError" && attempt < MAX_RETRIES) {
                console.error(`[yandex-cloud-mcp] Таймаут, повтор (${attempt}/${MAX_RETRIES})`);
                continue;
            }
            throw error;
        }
    }
    throw new Error("Yandex Cloud: все попытки исчерпаны");
}
export async function computeGet(path) {
    return fetchWithRetry(`${COMPUTE_BASE}${path}`, {
        method: "GET",
        headers: getHeaders(),
    });
}
export async function computePost(path, body = {}) {
    return fetchWithRetry(`${COMPUTE_BASE}${path}`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(body),
    });
}
export async function storageGet(path) {
    return fetchWithRetry(`${STORAGE_BASE}${path}`, {
        method: "GET",
        headers: getHeaders(),
    });
}
export async function serverlessGet(path) {
    return fetchWithRetry(`${SERVERLESS_BASE}${path}`, {
        method: "GET",
        headers: getHeaders(),
    });
}
export async function serverlessPost(path, body) {
    return fetchWithRetry(`${SERVERLESS_BASE}${path}`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(body),
    });
}
export async function operationsGet(operationId) {
    return fetchWithRetry(`${OPERATIONS_BASE}/${operationId}`, {
        method: "GET",
        headers: getHeaders(),
    });
}
//# sourceMappingURL=client.js.map