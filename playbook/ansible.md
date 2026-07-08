# Overview
Ansible automates configuration management, provisioning, and orchestration using declarative playbooks over SSH or API-based transports.

# Why It Exists
It exists to reduce manual server drift and provide repeatable operational automation without requiring heavy agents.

# Architecture
Ansible uses an inventory, playbooks, modules, and variable sources to execute tasks against remote targets.

# Core Concepts
- inventories
- playbooks
- roles
- modules
- idempotency

# Installation
Install Ansible on an execution node, configure Python dependencies, and establish secure access to targets.

# Configuration
Define inventories, group variables, vault-protected secrets, role layouts, and execution concurrency.

# Components
- control node
- inventory
- modules
- roles
- collections

# Workflow
Resolve target hosts, gather facts, run tasks, apply handlers, and produce a detailed execution summary.

# Production Use Cases
- baseline OS configuration
- package deployment
- secret distribution
- one-off operational orchestration

# Best Practices
- Keep roles reusable
- Use vault for secrets
- Limit `shell` usage
- Validate idempotency
- Separate inventories by environment

# Security
Protect SSH keys, encrypt secrets, scope inventories carefully, and restrict access to sensitive variables.

# Monitoring
Review run success rates, changed host counts, runtime duration, and drift patterns over time.

# Troubleshooting
Run in check mode, increase verbosity, validate inventory targeting, and inspect module return output.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| UNREACHABLE | Host login or network issue | Validate SSH, bastion path, or DNS |
| Undefined variable | Variable hierarchy mismatch | Check group and host vars |
| Changed every run | Task not idempotent | Refactor module usage or conditions |

# Commands
```bash
ansible all -i inventory.ini -m ping
ansible-playbook -i inventory.ini site.yml --check
```

# Interview Questions
1. What makes Ansible idempotent?
2. When would you choose Ansible over Terraform?
3. How do roles improve maintainability?

# References
- Ansible documentation
- module reference
- automation role design guides
