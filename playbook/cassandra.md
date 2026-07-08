# Overview
Cassandra is a distributed NoSQL database designed for horizontal scale, fault tolerance, and high write throughput across multiple nodes.

# Why It Exists
It exists to support always-on distributed workloads without a single master bottleneck.

# Architecture
Cassandra uses a peer-to-peer ring topology with partitioning, replication, and tunable consistency.

# Core Concepts
- keyspaces
- partition keys
- replication factor
- consistency levels
- compaction and repair

# Installation
Deploy clusters with consistent hardware, planned token distribution, monitoring, backup, and repair strategy.

# Configuration
Set replication, snitch and rack awareness, JVM tuning, compaction strategy, and repair cadence.

# Components
- nodes
- keyspaces
- SSTables
- gossip
- hinted handoff

# Workflow
Clients write to a coordinator node, data is replicated according to policy, reads reconcile replicas, and maintenance preserves consistency.

# Production Use Cases
- high-volume event stores
- time-series style workloads
- globally distributed applications
- systems requiring write availability

# Best Practices
- Model by query pattern
- Size partitions carefully
- Run repairs consistently
- Monitor tombstones
- Avoid ad hoc secondary indexing

# Security
Use auth, TLS, network segmentation, and tightly controlled administrative access.

# Monitoring
Track read/write latency, pending compactions, repair backlog, heap pressure, and node availability.

# Troubleshooting
Check node status, gossip state, compaction backlog, tombstone warnings, and consistency-level failures.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| UnavailableException | Not enough replicas available | Restore nodes or lower consistency if acceptable |
| Read timeout | Replica response delay | Check load, GC, or network |
| Tombstone warning | Inefficient data model | Refactor query and compaction pattern |

# Commands
```bash
nodetool status
nodetool repair
cqlsh -e "DESCRIBE KEYSPACES;"
```

# Interview Questions
1. What is tunable consistency?
2. Why is data modeling different in Cassandra?
3. How do repairs protect cluster health?

# References
- Cassandra documentation
- distributed database operations guides
- repair and compaction best practices
