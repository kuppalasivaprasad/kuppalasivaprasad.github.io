# Overview
Bash command shortcuts for navigation, variables, processes, and text processing.

# Why It Exists
To keep essential shell syntax and commands close at hand.

# Architecture
Bash interprets commands, expands variables, and invokes Linux utilities.

# Core Concepts
- variables
- quoting
- pipes
- loops

# Installation
Usually preinstalled on Linux environments.

# Configuration
Use aliases, prompt config, and strict mode in scripts.

# Components
- shell
- builtins
- environment variables

# Workflow
Compose commands, redirect output, and automate repetitive actions.

# Production Use Cases
- ad hoc debugging
- script authoring
- log analysis

# Best Practices
- Quote variables
- Use strict mode
- Check exit codes

# Security
Avoid unsafe expansions and history leaks for secrets.

# Monitoring
Review cron output and script logs.

# Troubleshooting
Enable `set -x` and print environment assumptions.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Bad substitution | Shell mismatch | Run with bash explicitly |
| Unbound var | Missing env var | Set default or validate input |

# Commands
```bash
pwd
ls -lah
export ENV=prod
ps aux | grep nginx
journalctl -u docker -f
awk '{print $1}' file.txt
```

# Interview Questions
1. Why quote variables?
2. What does `set -x` help with?
3. How do pipes improve operations work?

# References
- Bash manual
