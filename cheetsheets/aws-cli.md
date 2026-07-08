# Overview
AWS CLI reference for identity, EKS, EC2, S3, and quick inventory checks.

# Why It Exists
To make frequent AWS operations easy to recall during daily engineering work.

# Architecture
The CLI signs requests with configured credentials and calls AWS APIs directly.

# Core Concepts
- profiles
- regions
- IAM auth
- JSON output

# Installation
Install AWS CLI v2 and configure profiles.

# Configuration
Set profile, region, and output preferences.

# Components
- config
- credentials
- service commands

# Workflow
Pick a profile, verify caller identity, then query or update services.

# Production Use Cases
- EKS access
- S3 checks
- EC2 inventory

# Best Practices
- Confirm profile before changes
- Prefer read commands first
- Use JMESPath filters

# Security
Use roles over static keys and avoid exposing secrets in shell history.

# Monitoring
Use alongside CloudTrail and CloudWatch rather than as a monitoring system.

# Troubleshooting
Check profile, region, token expiry, and IAM policy.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Expired token | Session ended | Re-authenticate |
| Access denied | Missing IAM permission | Review effective role |

# Commands
```bash
aws sts get-caller-identity
aws configure list
aws eks list-clusters
aws eks update-kubeconfig --name prod-cluster
aws s3 ls
aws ec2 describe-instances --output table
```

# Interview Questions
1. Why verify caller identity first?
2. What causes expired token errors?
3. How do profiles improve safety?

# References
- AWS CLI docs
