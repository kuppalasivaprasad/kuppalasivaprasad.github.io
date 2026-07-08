# Overview
Quick Terraform command sheet for initialization, planning, apply, state, and diagnostics.

# Why It Exists
To reduce delay while working with infrastructure code in daily operations.

# Architecture
Terraform compares declared code with state and provider APIs to determine changes.

# Core Concepts
- init
- plan
- apply
- state

# Installation
Install a pinned Terraform version.

# Configuration
Use remote state, credentials, and environment variables safely.

# Components
- CLI
- provider plugins
- backend

# Workflow
Format, validate, initialize, plan, review, and apply.

# Production Use Cases
- cloud provisioning
- cluster creation
- IAM changes

# Best Practices
- Review plans
- Avoid manual state edits
- Keep versions pinned

# Security
Protect state and credentials.

# Monitoring
Watch CI plan failures and apply drift.

# Troubleshooting
Check provider auth, state lock, and plan output.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Backend lock | Another run active | Wait or verify unlock |
| Auth error | Credentials invalid | Re-authenticate |

# Commands
```bash
terraform fmt -recursive
terraform validate
terraform init
terraform plan
terraform apply
terraform state list
terraform output
```

# Interview Questions
1. Why review plans?
2. What does state store?
3. Why use remote backends?

# References
- Terraform CLI docs
