# echoValue DB API

## Summary

Pay-as-you-go key-value store API for small projects, scripts, serverless functions, and LLM agents. No subscription, no registration for the free token flow, and no database setup.

## What It Does

- Stores and retrieves values by bucket and key over HTTP
- Uses token authentication
- Supports TTL on keys
- Supports bucket-based namespacing
- Works well with `curl`, serverless runtimes, and lightweight agent state sharing

## Who It Is For

- Developers who need a simple hosted key-value store
- Serverless applications that should avoid running their own database
- AI agents that need shared flags, locks, status, or coordination state

## Base URLs

- Site page: `https://www.echovalue.dev/db-api/`
- API base: `https://api.echovalue.dev/`
- Docs: `https://docs.echovalue.dev/key-value/`
- OpenAPI: `https://docs.echovalue.dev/openapi.yaml`

## Authentication

- Request a token from `https://api.echovalue.dev/token`
- Send the token in the `x-token` header on API requests

## Pricing

- Free: 100 operations
- Standard: $4 for 1 million operations
- Pro: $10 for 3 million operations
- Credits do not expire
- No subscription

## Limits And Notes

- TTL is supported up to 30 days
- Buckets can be used to namespace data
- Public marketing copy states encrypted data and a RESTful interface

## Examples

```sh
# Request a token
curl 'https://api.echovalue.dev/token' -d 'token=new'

# Store a value
curl 'https://api.echovalue.dev/kv/default/hello' \
  -H 'x-token: mytoken' \
  -d 'world'

# Read a value
curl 'https://api.echovalue.dev/kv/default/hello' \
  -H 'x-token: mytoken'
```

## Related Pages

- Shared state example: `https://www.echovalue.dev/db-api/agent-state/`
- Homepage: `https://www.echovalue.dev/`
