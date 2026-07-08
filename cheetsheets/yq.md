# Overview
`yq` reference for querying and editing YAML used in Kubernetes, Helm, CI, and config files.

# Why It Exists
To make YAML inspection and manipulation scriptable.

# Architecture
`yq` parses YAML and applies query expressions similar to structured data filters.

# Core Concepts
- query
- in-place edit
- array/object navigation
- format conversion

# Installation
Install `yq` from the official release or package manager.

# Configuration
No special configuration is usually required.

# Components
- parser
- query engine

# Workflow
Read YAML, select values, patch keys, and validate outputs in automation.

# Production Use Cases
- Kubernetes manifest patching
- CI config inspection
- Helm values updates

# Best Practices
- Test expressions on copies first
- Prefer declarative source control over ad hoc edits
- Keep scripts explicit

# Security
Be careful when editing production manifests automatically.

# Monitoring
Used as part of deployment automation rather than standalone monitoring.

# Troubleshooting
Confirm file structure and quote expressions properly.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Path not found | Wrong key path | Inspect YAML structure first |
| Corrupted YAML | Bad edit or formatting | Validate output with a parser |

# Commands
```bash
yq '.spec.template.spec.containers[0].image' deploy.yaml
yq -i '.spec.replicas = 3' deploy.yaml
yq '.image.tag = "1.2.0"' values.yaml
```

# Interview Questions
1. Why is `yq` useful in GitOps flows?
2. When should you avoid in-place edits?
3. How do YAML tools reduce manual errors?

# References
- yq documentation
