# [`Sonarlint`](../index.md)

## Настройка

```json
{
  // Отключает телеметрию.
  "sonarlint.disableTelemetry": true,

  "sonarlint.rules": {
    "css:S125": {
      "level": "off"
    },
    "javascript:S125": {
      "level": "off"
    },
    "typescript:S125": {
      "level": "off"
    },
    "Web:AvoidCommentedOutCodeCheck": {
      "level": "off"
    }
  },
}
```

## Отключенные правила

- Sections of code should not be commented out (typescript:S125)
- Sections of code should not be commented out (css:S125)
