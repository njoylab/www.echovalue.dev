# echoValue Webhook API

## Summary

Webhook API delivers HTTP webhook events from multiple trigger sources. The first supported triggers are inbound email and cron schedules.

## What It Does

- Creates webhook configurations with a target HTTP endpoint
- Supports inbound email triggers through opaque mailbox addresses
- Supports cron-triggered webhook delivery for scheduled automation
- Sends structured JSON payloads to the configured endpoint
- Supports native output formats for Slack, Discord, Teams, Telegram, and PagerDuty
- Supports custom payload mappers

## Who It Is For

- Developers bridging email-based systems into webhooks
- Automation workflows that need scheduled webhook calls
- Alerting and routing systems that want structured events
- Serverless projects that need webhooks without running a scheduler

## Base URLs

- Site page: `https://www.echovalue.dev/webhook-api/`
- API base: `https://api.echovalue.dev/`
- Docs: `https://docs.echovalue.dev/mail2webhook/`
- OpenAPI: `https://docs.echovalue.dev/openapi.yaml`

## Authentication

- Uses the echoValue token model
- Configure webhooks with the `x-token` header

## Pricing

- Free: 100 events
- Standard: $4 for 1 million events
- Pro: $10 for 3 million events
- Credits do not expire
- No subscription

## Trigger Notes

- Email triggers use an opaque mailbox address such as `<mailboxId>@hook.echovalue.dev`
- Cron triggers deliver scheduled webhook calls to the configured endpoint
- Marketing copy states signed webhook delivery is supported

## Email Payload Notes

- Includes `externalMessageId` and `receivedAt`
- Includes `from`, `to`, `subject`, `text`, `html`, and raw `headers`
- Attachments include metadata plus a temporary `downloadUrl`

## Example

```sh
# Configure an email-triggered webhook endpoint
curl 'https://api.echovalue.dev/webhook' \
  -H 'x-token: mytoken' \
  -H 'content-type: application/json' \
  -d '{"url":"https://myapp.example.com/hooks/events","trigger":"email"}'
```

## Related Pages

- Documentation index: `https://docs.echovalue.dev/`
- Homepage: `https://www.echovalue.dev/`
