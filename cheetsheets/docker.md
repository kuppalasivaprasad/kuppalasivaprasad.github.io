# Overview
Quick Docker command sheet for images, containers, logs, networks, and cleanup.

# Why It Exists
To support fast container debugging and lifecycle operations.

# Architecture
Docker CLI talks to the daemon, which manages images, containers, networks, and volumes.

# Core Concepts
- image
- container
- network
- volume

# Installation
Install Docker Engine or Docker Desktop.

# Configuration
Set daemon options, auth, and logging drivers as needed.

# Components
- daemon
- CLI
- registry

# Workflow
Build, run, inspect, log, and clean up.

# Production Use Cases
- local testing
- CI builds
- container debugging

# Best Practices
- Remove unused images carefully
- Prefer explicit tags
- Inspect logs before restart loops

# Security
Avoid privileged containers and protect registry creds.

# Monitoring
Watch disk usage and restart counts.

# Troubleshooting
Inspect logs, port binds, and volume mounts.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Port conflict | Host port in use | Pick another port |
| Pull denied | Auth or image issue | Login and verify image path |

# Commands
```bash
docker images
docker ps -a
docker logs -f <container>
docker exec -it <container> sh
docker inspect <container>
docker system prune
```

# Interview Questions
1. Why inspect before restarting?
2. What causes pull errors?
3. How do volumes affect persistence?

# References
- Docker CLI docs
