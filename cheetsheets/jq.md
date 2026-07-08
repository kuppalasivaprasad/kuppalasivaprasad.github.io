# Overview
`jq` reference for parsing, filtering, and transforming JSON in shell workflows.

# Why It Exists
To make structured API responses easier to inspect and automate.

# Architecture
`jq` reads JSON from stdin or files and applies filters to produce formatted output.

# Core Concepts
- filters
- arrays
- objects
- raw output

# Installation
Install `jq` from the package manager.

# Configuration
No major configuration beyond shell aliases.

# Components
- parser
- filter engine

# Workflow
Pipe API output into `jq`, select fields, and reuse results in scripts.

# Production Use Cases
- cloud CLI output parsing
- Kubernetes JSON extraction
- API debugging

# Best Practices
- Use `-r` for raw strings
- Keep filters readable
- Test on sample payloads

# Security
Avoid leaking secrets when printing full payloads.

# Monitoring
Mainly used in support of monitoring workflows.

# Troubleshooting
Validate the incoming JSON and simplify filters step by step.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| parse error | Invalid JSON | Validate source command output |
| null result | Wrong filter path | Inspect full structure first |

# Commands
```bash
kubectl get pods -A -o json | jq '.items[].metadata.name'
aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId'
jq -r '.status.phase' pod.json
```

# Interview Questions
1. Why use `-r`?
2. How do you debug a bad filter?
3. Where does `jq` help most in DevOps?

# References
- jq manual
