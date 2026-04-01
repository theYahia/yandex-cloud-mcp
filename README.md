# @theyahia/yandex-cloud-mcp

MCP-сервер для управления инфраструктурой Yandex Cloud -- Compute VM, Object Storage, Serverless Functions, Operations. **8 инструментов.**

[![npm](https://img.shields.io/npm/v/@theyahia/yandex-cloud-mcp)](https://www.npmjs.com/package/@theyahia/yandex-cloud-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Часть серии [Russian API MCP](https://github.com/theYahia/russian-mcp) (50 серверов) by [@theYahia](https://github.com/theYahia).

## Установка

### Claude Desktop

```json
{
  "mcpServers": {
    "yandex-cloud": {
      "command": "npx",
      "args": ["-y", "@theyahia/yandex-cloud-mcp"],
      "env": { "YANDEX_CLOUD_TOKEN": "your-iam-token", "YANDEX_CLOUD_FOLDER_ID": "your-folder-id" }
    }
  }
}
```

### Claude Code

```bash
claude mcp add yandex-cloud -e YANDEX_CLOUD_TOKEN=your-iam-token -e YANDEX_CLOUD_FOLDER_ID=your-folder-id -- npx -y @theyahia/yandex-cloud-mcp
```

### VS Code / Cursor

```json
{ "servers": { "yandex-cloud": { "command": "npx", "args": ["-y", "@theyahia/yandex-cloud-mcp"], "env": { "YANDEX_CLOUD_TOKEN": "your-iam-token", "YANDEX_CLOUD_FOLDER_ID": "your-folder-id" } } } }
```

> Требуется `YANDEX_CLOUD_TOKEN` (IAM-токен) и `YANDEX_CLOUD_FOLDER_ID`. Получите в [консоли Yandex Cloud](https://console.cloud.yandex.ru/).

## Инструменты (8)

| Инструмент | Описание |
|------------|----------|
| `list_instances` | Список виртуальных машин в каталоге |
| `get_instance` | Информация о VM по ID |
| `start_instance` | Запустить VM |
| `stop_instance` | Остановить VM |
| `list_buckets` | Список бакетов Object Storage |
| `list_functions` | Список serverless-функций |
| `invoke_function` | Вызвать serverless-функцию |
| `get_operation` | Проверить статус операции |

## Демо-промпты

```
Покажи все виртуальные машины в моём каталоге
Получи информацию о VM epd1234567890
Запусти виртуальную машину epd1234567890
Остнови VM epd1234567890
Покажи все бакеты Object Storage
Покажи все serverless-функции
Вызови функцию d4e1234567890 с payload {"key": "value"}
Проверь статус операции abcdef123456
```

## Лицензия

MIT
