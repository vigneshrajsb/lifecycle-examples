# Pod shell local validation

This draft test PR triggers a disposable local kind Environment for the pod shell
changes in [Lifecycle core #245](https://github.com/GoodRxOSS/lifecycle/pull/245)
and [Lifecycle UI #84](https://github.com/GoodRxOSS/lifecycle-ui/pull/84).

Keep the existing `lifecycle.yaml` defaults so validation deploys the example
frontend, backend and database through the normal GitHub webhook workflow.

Expected checks, pending execution:

- Wait for the example services and their regular containers to be running.
- Open an interactive `/bin/sh` session from both the service Pods panel and the
  Environment pod table; verify input, output, terminal resizing and explicit
  disconnect/reconnect against the selected running container.
- Switch between Logs and Shell and confirm the shell stays connected. Change
  the selected pod/container or close the view and confirm the session closes.
- Confirm the shell targets the selected pod identity and container, and that
  stopped or replaced containers cannot retain a usable session.

This file records the test purpose, not a successful test result. Keep this PR
draft and unmerged; destroy the disposable local Environment after validation.
