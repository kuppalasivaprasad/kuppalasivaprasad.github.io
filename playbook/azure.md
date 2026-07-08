# Overview
Azure delivers cloud infrastructure, identity, networking, and managed platform services widely used in enterprise environments and hybrid operations.

# Why It Exists
Azure exists to provide scalable cloud services with strong enterprise integration, governance tooling, and hybrid connectivity options.

# Architecture
Typical Azure platforms use subscriptions, resource groups, VNets, managed identities, AKS, storage accounts, and monitoring services.

# Core Concepts
- subscriptions and resource groups
- RBAC and managed identity
- VNets and subnets
- AKS
- Azure Monitor and Log Analytics

# Installation
Create subscription structures, define management groups, configure policy, and enable CLI or federated access for operators and automation.

# Configuration
Set naming conventions, resource organization, network segmentation, identity roles, diagnostics, and backup standards.

# Components
- Azure AD / Entra ID
- resource groups
- AKS
- virtual networks
- storage and monitoring services

# Workflow
Provision landing zones, assign roles, deploy infrastructure, publish workloads, and observe operational health through Azure-native telemetry.

# Production Use Cases
- AKS-based application platforms
- hybrid networking
- role-based administration
- centralized diagnostics pipelines

# Best Practices
- Use managed identities
- Apply Azure Policy
- Isolate environments
- Collect diagnostics centrally
- Automate infrastructure through Terraform or Bicep

# Security
Use RBAC, private endpoints, key vault integrations, security center recommendations, and policy-driven enforcement.

# Monitoring
Track AKS health, node pools, activity logs, network watcher insights, and log analytics queries.

# Troubleshooting
Check role assignments, subnet capacity, NSGs, route tables, AKS events, and Azure Monitor diagnostic streams.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| AuthorizationFailed | Missing role assignment | Grant or scope the required role |
| Subnet exhausted | No free IPs | Expand address space or redesign subnetting |
| AKS nodepool issue | Scaling or image problem | Review cluster events and VMSS state |

# Commands
```bash
az account show
az aks get-credentials -g rg-platform -n aks-prod
az group list -o table
az monitor log-analytics query -w <workspace-id> --analytics-query "Heartbeat | take 5"
```

# Interview Questions
1. What is the difference between Azure RBAC and Kubernetes RBAC?
2. Why are resource groups useful?
3. How would you design Azure networking for production AKS?

# References
- Azure architecture center
- AKS operations guidance
- Azure governance best practices
