# Overview
PostgreSQL is a relational database used for application data, metadata stores, automation backends, and transactional workloads.

# Why It Exists
It exists to provide reliable ACID transactions, strong SQL support, and broad operational flexibility.

# Architecture
PostgreSQL uses a primary process, background workers, WAL, storage files, and optional replicas for read scale or failover.

# Core Concepts
- tables and indexes
- transactions
- WAL
- replication
- backup and restore

# Installation
Deploy PostgreSQL with persistent storage, backup strategy, authentication controls, and version lifecycle planning.

# Configuration
Tune connections, shared buffers, WAL retention, replication slots, authentication, and maintenance settings.

# Components
- postmaster
- databases and schemas
- WAL files
- replicas

# Workflow
Applications connect, execute transactions, WAL records changes, backups capture recoverable state, and replicas improve resilience.

# Production Use Cases
- application data stores
- metadata backends
- monitoring databases
- internal tooling

# Best Practices
- Back up regularly
- Test restores
- Index intentionally
- Monitor long-running queries
- Use connection pooling

# Security
Use least-privilege roles, TLS, secret rotation, network restrictions, and audit critical access patterns.

# Monitoring
Track CPU, connections, replication lag, checkpoint activity, slow queries, and disk growth.

# Troubleshooting
Inspect `pg_stat_activity`, locks, query plans, storage latency, and WAL volume when performance degrades.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Too many connections | Pooling or limit issue | Use poolers and tune max connections |
| Replication lag | Replica cannot keep up | Check IO, network, or query pressure |
| Disk full | WAL or data growth | Rotate backups and expand storage |

# Commands
```bash
psql -U postgres -c "select now();"
psql -U postgres -c "select * from pg_stat_activity;"
```

# Interview Questions
1. Why is WAL important?
2. How do you investigate replication lag?
3. What are common PostgreSQL production bottlenecks?

# References
- PostgreSQL documentation
- backup and recovery guides
- database operations runbooks
