# Overview
Splunk indexes and searches logs and machine data to support troubleshooting, security analysis, and operational observability.

# Why It Exists
It exists to make large volumes of operational events searchable and useful for real-time investigations.

# Architecture
Splunk deployments commonly include forwarders, indexers, search heads, and storage tiers.

# Core Concepts
- indexes
- sourcetypes
- SPL queries
- forwarders
- dashboards and alerts

# Installation
Deploy Splunk components based on scale, retention, and high availability requirements. Forward logs from apps, nodes, and network devices.

# Configuration
Define indexes, data retention, parsing rules, field extractions, RBAC, and alert routing.

# Components
- universal forwarder
- heavy forwarder
- indexer
- search head

# Workflow
Events are collected, parsed, indexed, searched, visualized, and used for alerts or dashboards.

# Production Use Cases
- production log aggregation
- security event investigation
- deployment validation
- audit trail review

# Best Practices
- Standardize sourcetypes
- Control retention costs
- Extract useful fields early
- Build incident-focused searches
- Separate admin and user roles

# Security
Encrypt forwarding traffic, protect search access, mask sensitive fields, and audit admin actions.

# Monitoring
Track ingest rate, queue backlog, search latency, disk utilization, and index health.

# Troubleshooting
Confirm forwarder connectivity, parsing rules, index existence, time skew, and license consumption.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| No events found | Ingest or search scope issue | Check source, time range, and index |
| Parsing mismatch | Wrong sourcetype or field extraction | Correct props and transforms |
| License warning | Excess ingest volume | Reduce noisy data or expand license |

# Commands
```bash
index=prod_logs sourcetype=kube:container error OR exception
| stats count by kubernetes.namespace_name, kubernetes.container_name
```

# Interview Questions
1. What is the role of a Splunk forwarder?
2. Why do sourcetypes matter?
3. How would you investigate a sudden spike in application errors?

# References
- Splunk documentation
- logging pipeline standards
- incident investigation runbooks
