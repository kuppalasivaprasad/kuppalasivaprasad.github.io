# Overview
Daily Git reference for status, branch work, history inspection, and recovery.

# Why It Exists
To shorten the path from question to command during routine development and incident fixes.

# Architecture
Git tracks content snapshots in a local object database and syncs them to remotes.

# Core Concepts
- working tree
- staging
- commit
- branch

# Installation
Install Git and configure user identity.

# Configuration
Set username, email, editor, and aliases.

# Components
- local repo
- remote repo
- refs

# Workflow
Inspect, stage, commit, compare, and sync.

# Production Use Cases
- hotfixes
- PR prep
- rollback investigation

# Best Practices
- Keep commits focused
- Pull before push
- Use reflog for recovery

# Security
Keep secrets out of commits.

# Monitoring
Review CI status around branch changes.

# Troubleshooting
Use `status`, `diff`, `log`, and `reflog`.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Rejected push | Remote ahead | Pull or rebase |
| Conflict | Overlapping changes | Resolve files and commit |

# Commands
```bash
git status
git branch
git checkout -b feature/name
git add .
git commit -m "message"
git pull --rebase
git push
git reflog
```

# Interview Questions
1. Why use reflog?
2. When rebase instead of merge?
3. How do you recover from a bad commit?

# References
- Git docs
