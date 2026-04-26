# Ignore Files E2E

This file is used to test environment-level ignoreFiles behavior.

Docs-only push should be ignored by all services through environment.ignoreFiles.

Deployed-state docs-only push should queue current-state webhooks without redeploying.
