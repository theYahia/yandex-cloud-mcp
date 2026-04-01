#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { listInstancesSchema, handleListInstances, getInstanceSchema, handleGetInstance, startInstanceSchema, handleStartInstance, stopInstanceSchema, handleStopInstance } from "./tools/instances.js";
import { listBucketsSchema, handleListBuckets } from "./tools/storage.js";
import { listFunctionsSchema, handleListFunctions, invokeFunctionSchema, handleInvokeFunction } from "./tools/functions.js";
import { getOperationSchema, handleGetOperation } from "./tools/operations.js";

const server = new McpServer({
  name: "yandex-cloud-mcp",
  version: "1.0.0",
});

server.tool(
  "list_instances",
  "Список виртуальных машин (Compute) в каталоге Yandex Cloud.",
  listInstancesSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleListInstances(params) }] }),
);

server.tool(
  "get_instance",
  "Получить информацию о виртуальной машине по ID.",
  getInstanceSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleGetInstance(params) }] }),
);

server.tool(
  "start_instance",
  "Запустить виртуальную машину.",
  startInstanceSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleStartInstance(params) }] }),
);

server.tool(
  "stop_instance",
  "Остановить виртуальную машину.",
  stopInstanceSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleStopInstance(params) }] }),
);

server.tool(
  "list_buckets",
  "Список бакетов Object Storage в каталоге.",
  listBucketsSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleListBuckets(params) }] }),
);

server.tool(
  "list_functions",
  "Список serverless-функций в каталоге.",
  listFunctionsSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleListFunctions(params) }] }),
);

server.tool(
  "invoke_function",
  "Вызвать serverless-функцию с payload.",
  invokeFunctionSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleInvokeFunction(params) }] }),
);

server.tool(
  "get_operation",
  "Проверить статус асинхронной операции по ID.",
  getOperationSchema.shape,
  async (params) => ({ content: [{ type: "text", text: await handleGetOperation(params) }] }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[yandex-cloud-mcp] Сервер запущен. 8 инструментов. Требуется YANDEX_CLOUD_TOKEN и YANDEX_CLOUD_FOLDER_ID.");
}

main().catch((error) => {
  console.error("[yandex-cloud-mcp] Ошибка:", error);
  process.exit(1);
});
