# Overview
Kafka is a distributed event streaming platform used for durable messaging, event-driven workflows, and data pipelines.

# Why It Exists
It exists to decouple producers and consumers while providing ordered, partitioned, and replayable event streams.

# Architecture
Kafka clusters contain brokers, topics, partitions, producers, consumers, and often a schema registry.

# Core Concepts
- topics
- partitions
- offsets
- consumer groups
- replication

# Installation
Deploy Kafka with proper storage, network tuning, and replication settings. Managed offerings reduce broker operations overhead.

# Configuration
Define retention, partition count, replication factor, consumer lag monitoring, and authentication mechanisms.

# Components
- brokers
- ZooKeeper or KRaft control plane
- producers
- consumers
- schema registry

# Workflow
Producers publish events to topics, brokers store them, consumers read by offset, and monitoring tracks lag and broker health.

# Production Use Cases
- event-driven microservices
- log pipelines
- stream processing
- integration between independent systems

# Best Practices
- Design topic naming standards
- Monitor consumer lag
- Size partitions intentionally
- Use schemas
- Plan retention based on recovery goals

# Security
Use TLS, SASL, ACLs, network isolation, and controlled topic administration.

# Monitoring
Track broker health, under-replicated partitions, disk growth, latency, and consumer lag.

# Troubleshooting
Check partition leaders, ISR health, producer retries, consumer offsets, and broker storage pressure.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Consumer lag spike | Consumers cannot keep up | Scale consumers or optimize processing |
| Under-replicated partition | Replication unhealthy | Check broker health and network |
| UnknownTopicOrPartition | Topic missing or metadata stale | Create topic or refresh client metadata |

# Commands
```bash
kafka-topics.sh --bootstrap-server broker:9092 --list
kafka-consumer-groups.sh --bootstrap-server broker:9092 --describe --group orders
```

# Interview Questions
1. Why do partitions matter in Kafka?
2. What causes consumer lag?
3. How do you design Kafka for reliability?

# References
- Kafka documentation
- streaming platform runbooks
- event architecture patterns
