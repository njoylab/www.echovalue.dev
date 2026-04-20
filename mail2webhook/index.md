# echoValue Mail2Webhook

## Summary

Mail2Webhook turns inbound email into webhook deliveries. Each configured webhook gets an opaque mailbox address; when an email is sent to that address, echoValue sends an HTTP POST to the configured endpoint.

## What It Does

- Creates a mailbox-backed webhook endpoint
- Accepts inbound email and forwards it as JSON
- Includes sender, subject, text, HTML, headers, and attachments metadata
- Supports native output formats for Slack, Discord, Teams, Telegram, and PagerDuty
- Supports custom payload mappers

## Who It Is For

- Developers bridging email-based systems into webhooks
- Automation workflows that need to react to inbound email
- Alerting and routing systems that want structured email events

## Base URLs

- Site page: `https://www.echovalue.dev/mail2webhook/`
- API base: `https://api.echovalue.dev/`
- Docs: `https://docs.echovalue.dev/mail2webhook/`
- OpenAPI: `https://docs.echovalue.dev/openapi.yaml`

## Authentication

- Uses the echoValue token model
- Configure the webhook with the `x-token` header

## Pricing

- Free: 100 email events
- Standard: $4 for 1 million events
- Pro: $10 for 3 million events
- Credits do not expire
- No subscription

## Payload Notes

- Includes `externalMessageId` and `receivedAt`
- Includes `from`, `to`, `subject`, `text`, `html`, and raw `headers`
- Attachments include metadata plus a temporary `downloadUrl`
- Marketing copy states signed webhook delivery is supported

## Example

```sh
# Configure a webhook endpoint
curl 'https://api.echovalue.dev/webhook' \
  -H 'x-token: mytoken' \
  -H 'content-type: application/json' \
  -d '{"url":"https://myapp.example.com/hooks/email"}'
```

## Related Pages

- Documentation index: `https://docs.echovalue.dev/`
- Homepage: `https://www.echovalue.dev/`
