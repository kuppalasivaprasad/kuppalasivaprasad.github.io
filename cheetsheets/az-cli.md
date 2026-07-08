# Overview
Azure CLI reference for subscriptions, AKS, resource groups, and operational queries.

# Why It Exists
To speed up Azure administration and reduce context switching.

# Architecture
Azure CLI authenticates to Azure APIs and operates on scoped subscriptions and resource groups.

# Core Concepts
- subscription
- resource group
- tenant
- managed identity

# Installation
Install Azure CLI and authenticate with SSO or service principal where appropriate.

# Configuration
Set default subscription and output format.

# Components
- profile cache
- command groups
- extensions

# Workflow
Authenticate, select subscription, query resources, and apply changes intentionally.

# Production Use Cases
- AKS access
- resource inventory
- diagnostics queries

# Best Practices
- Set the correct subscription
- Use table output for quick reads
- Script repeatable queries

# Security
Use least-privilege roles and avoid storing long-lived secrets locally.

# Monitoring
Use with Azure Monitor and activity logs for deeper visibility.

# Troubleshooting
Check subscription context, role assignments, and token state.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Subscription not found | Wrong tenant or context | Login again and set subscription |
| Authorization failed | Missing role | Add or scope role assignment |

# Commands
```bash
az login
az account show
az account set --subscription "<name>"
az group list -o table
az aks list -o table
az aks get-credentials -g rg-platform -n aks-prod
```

# Interview Questions
1. Why set subscription explicitly?
2. What is the safest auth pattern for automation?
3. How do you debug AKS access issues?

# References
- Azure CLI docs
