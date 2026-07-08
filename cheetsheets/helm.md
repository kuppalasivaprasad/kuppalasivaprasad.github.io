# Overview
Fast Helm reference for chart inspection, rendering, installs, upgrades, and rollback.

# Why It Exists
To speed up Kubernetes release operations and troubleshooting.

# Architecture
Helm renders chart templates with values and records release state inside the cluster.

# Core Concepts
- chart
- values
- release
- repository

# Installation
Install the Helm CLI and configure repositories.

# Configuration
Use environment-specific values files and repository credentials.

# Components
- CLI
- chart files
- release metadata

# Workflow
Add repos, inspect charts, template locally, install or upgrade, and review history.

# Production Use Cases
- app deployment
- add-on management
- release rollback

# Best Practices
- Render locally first
- Track values in Git
- Review diffs before upgrades

# Security
Protect repository credentials and avoid secrets in plaintext values.

# Monitoring
Monitor failed releases and drift between environments.

# Troubleshooting
Check rendered manifests and hook failures.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Unknown repo | Repository missing | Re-add repository |
| Failed release | Template or cluster issue | Inspect rendered output and events |

# Commands
```bash
helm repo list
helm search repo nginx
helm template app ./chart -f values-prod.yaml
helm upgrade --install app ./chart -n app
helm rollback app 1 -n app
```

# Interview Questions
1. Why template locally?
2. What does rollback restore?
3. How do values files help?

# References
- Helm CLI docs
