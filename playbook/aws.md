# Overview
AWS provides a broad cloud platform for compute, networking, storage, IAM, observability, and managed services that support modern DevOps platforms.

# Why It Exists
AWS exists to let teams provision infrastructure on demand, scale globally, and consume managed services instead of building every component from scratch.

# Architecture
Typical architectures combine VPCs, subnets, load balancers, EC2 or EKS workloads, managed databases, and IAM-based identity controls.

# Core Concepts
- regions and availability zones
- IAM
- VPC networking
- EC2, EKS, S3, RDS
- CloudWatch and CloudTrail

# Installation
Create accounts or use AWS Organizations, establish landing zones, configure CLI access, and deploy guardrails before application workloads.

# Configuration
Configure account boundaries, IAM roles, networking, tagging, logging, backup, and cost visibility standards.

# Components
- IAM
- VPC
- EC2 and Auto Scaling
- EKS
- S3, RDS, Route 53

# Workflow
Provision foundational networking and IAM, deploy workloads, monitor services, automate scaling, and control cost and security posture.

# Production Use Cases
- managed Kubernetes with EKS
- artifact and log storage in S3
- private networking for applications
- auto scaling web platforms

# Best Practices
- Use IAM roles over static keys
- Enable CloudTrail and guardrails
- Segment accounts
- Tag resources consistently
- Design for multi-AZ resilience

# Security
Apply least privilege, MFA, SCPs, private networking, encryption at rest and in transit, and continuous config monitoring.

# Monitoring
Watch CloudWatch metrics, ALB health, EKS control plane status, billing anomalies, and IAM access patterns.

# Troubleshooting
Validate IAM first, then networking, service quotas, deployment logs, and regional dependencies.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| AccessDenied | IAM policy or role issue | Review effective permissions |
| ThrottlingException | API rate limit reached | Backoff, batch, or request limit increases |
| Target group unhealthy | App or health check issue | Validate port, path, and readiness behavior |

# Commands
```bash
aws sts get-caller-identity
aws eks update-kubeconfig --name prod-cluster
aws s3 ls
aws ec2 describe-instances --filters Name=tag:Env,Values=prod
```

# Interview Questions
1. Why are multiple AWS accounts useful?
2. How would you secure Terraform access to AWS?
3. What are common causes of `AccessDenied` in production automation?

# References
- AWS Well-Architected Framework
- AWS service documentation
- landing zone design guides
