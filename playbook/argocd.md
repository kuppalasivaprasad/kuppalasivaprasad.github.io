# Overview
ArgoCD is a GitOps controller that continuously syncs Kubernetes clusters to the desired state stored in Git.

# Why It Exists
It exists to make Kubernetes delivery auditable, repeatable, and pull-based rather than operator-driven.

# Architecture
Git repositories define desired manifests, ArgoCD compares Git state to cluster state, and synchronization actions reconcile drift.

# Core Concepts
- applications
- sync status
- health status
- app-of-apps
- drift detection

# Installation
Install ArgoCD in a management namespace, secure access with SSO, and connect source repositories and clusters.

# Configuration
Configure repository credentials, RBAC, projects, sync policies, and notification integrations.

# Components
- API server
- repo server
- application controller
- UI and CLI

# Workflow
Commit manifests to Git, ArgoCD detects changes, compares desired and live state, and syncs resources based on policy.

# Production Use Cases
- cluster add-on management
- multi-environment app promotion
- self-service application onboarding
- drift visibility

# Best Practices
- Separate platform and app repos
- Use projects for boundaries
- Prefer automated sync with safeguards
- Keep manifests deterministic
- Audit sync failures

# Security
Use SSO, project scoping, signed repo access, namespace boundaries, and minimal cluster credentials.

# Monitoring
Track sync failures, drift count, repository access errors, and controller reconciliation latency.

# Troubleshooting
Check repository reachability, app events, manifest rendering issues, RBAC, and health assessment rules.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| OutOfSync | Live cluster differs from Git | Review drift and sync changes |
| Manifest generation error | Helm/Kustomize render failed | Validate source config and values |
| Permission denied | ArgoCD lacks cluster access | Fix service account or project policy |

# Commands
```bash
argocd app list
argocd app get platform
argocd app sync platform
```

# Interview Questions
1. How does GitOps improve change control?
2. What is the difference between sync status and health status?
3. How would you prevent unsafe auto-sync behavior?

# References
- ArgoCD documentation
- GitOps operating model guides
- Kubernetes deployment governance patterns
