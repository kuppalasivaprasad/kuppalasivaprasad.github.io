# Overview
Prometheus collects, stores, and queries time-series metrics for systems, applications, and Kubernetes platforms.

# Why It Exists
It exists to give operators reliable metrics and alerting for infrastructure and service health.

# Architecture
Prometheus scrapes metrics endpoints, stores samples locally or remotely, and evaluates alert rules against those metrics.

# Core Concepts
- scrape targets
- exporters
- PromQL
- alert rules
- retention

# Installation
Deploy Prometheus through Helm, operators, or managed services. Plan storage, scrape scope, and HA strategy early.

# Configuration
Define scrape jobs, relabel rules, alertmanager targets, retention, recording rules, and remote write settings.

# Components
- Prometheus server
- exporters
- Alertmanager
- service discovery integrations

# Workflow
Targets expose metrics, Prometheus scrapes and stores them, queries power dashboards, and alerts notify responders.

# Production Use Cases
- host monitoring
- Kubernetes metrics
- application SLO indicators
- infrastructure alerting

# Best Practices
- Keep label cardinality controlled
- Record expensive queries
- Standardize exporter deployment
- Test alerts
- Tune retention and storage

# Security
Secure metric endpoints, protect Alertmanager routes, and restrict access to sensitive labels or targets.

# Monitoring
Watch scrape duration, target availability, TSDB growth, dropped samples, and rule evaluation time.

# Troubleshooting
Validate target discovery, inspect `/targets`, test PromQL, and check network reachability to exporters.

# Common Errors
| Error | Meaning | Typical Fix |
| --- | --- | --- |
| Target down | Endpoint unreachable or failing | Check service, DNS, auth, and firewall |
| High cardinality | Too many unique labels | Reduce label dimensions |
| Alert not firing | Rule condition or labels incorrect | Validate expression and alert routing |

# Commands
```bash
kubectl port-forward svc/prometheus-server 9090:80 -n monitoring
curl http://localhost:9090/api/v1/targets
```

# Interview Questions
1. Why is label cardinality important?
2. What is the difference between recording rules and alert rules?
3. How do you monitor Prometheus itself?

# References
- Prometheus documentation
- exporter best practices
- SRE alerting guidance
