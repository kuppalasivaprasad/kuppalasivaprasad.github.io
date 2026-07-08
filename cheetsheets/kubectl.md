# Overview
Quick `kubectl` command reference for cluster inspection, deployments, logs, and debugging.

# Why It Exists
To speed up daily Kubernetes operations and reduce lookup time during incidents.

# Architecture
`kubectl` talks to the Kubernetes API server using kubeconfig context and RBAC-scoped credentials.

# Core Concepts
- context
- namespace
- resource types
- labels
- logs and events

# Installation
Install the matching `kubectl` version for your cluster support window and configure `~/.kube/config`.

# Configuration
Set contexts, aliases, completion, and default namespace preferences.

# Components
- kubeconfig
- API client
- output formatters

# Workflow
Select context, query resources, inspect object details, stream logs, and apply controlled changes.

# Production Use Cases
- pod health inspection
- deployment rollouts
- event review
- live debugging

# Best Practices
- Verify context before changes
- Prefer declarative apply
- Filter by namespace
- Use labels consistently

# Security
Avoid broad admin credentials in shared terminals and audit who can exec into pods.

# Monitoring
Use commands to support monitoring investigations rather than replace dashboards or alerts.

# Troubleshooting
Start with `get`, `describe`, `logs`, and `events` before making edits.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Unauthorized | RBAC issue | Use correct context or request permissions |
| NotFound | Wrong namespace or name | Check namespace and spelling |

# Commands
```bash
kubectl config get-contexts
kubectl get pods -A
kubectl describe pod <pod> -n <ns>
kubectl logs deploy/<name> -n <ns> --tail=100
kubectl get events -n <ns> --sort-by=.lastTimestamp
kubectl rollout status deploy/<name> -n <ns>
```

# Interview Questions
1. What is the difference between `get` and `describe`?
2. How do contexts affect safety?
3. When would you check events?

# References
- Kubernetes CLI documentation
