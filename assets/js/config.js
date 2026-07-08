window.SITE_CONFIG = {
  name: "Kuppala Siva Prasad",
  title: "DevOps Playbook",
  role: "DevOps Engineer",
  footer: {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    email: "mailto:your.email@example.com"
  },
  nav: [
    { label: "Home", href: "/index.html", page: "home" },
    { label: "About", href: "/about.html", page: "about" },
    { label: "DevOps Roadmap", href: "/roadmap.html", page: "roadmap" },
    { label: "DevOps Playbook", href: "/playbook/index.html", page: "playbook" },
    { label: "Cheat Sheets", href: "/cheatsheets/index.html", page: "cheatsheets" }
  ],
  docSections: [
    "Overview",
    "Why This Technology Exists",
    "Problems It Solves",
    "Core Concepts",
    "Architecture",
    "Components",
    "Workflow",
    "Installation",
    "Configuration",
    "Production Deployment",
    "Security Best Practices",
    "Monitoring",
    "Logging",
    "Scaling",
    "High Availability",
    "Disaster Recovery",
    "Common Mistakes",
    "Troubleshooting Guide",
    "Frequently Used Commands",
    "Configuration Examples",
    "Real Production Scenarios",
    "Scenario-Based Explanations",
    "Real-world Use Cases",
    "Interview Questions",
    "FAQs",
    "Best Practices",
    "References"
  ],
  docMeta: {
    linux: { icon: "🐧", level: "Beginner", readingTime: "8 min", prerequisites: "CLI basics", tags: ["Linux", "Shell", "Operations"] },
    networking: { icon: "🌐", level: "Intermediate", readingTime: "9 min", prerequisites: "System fundamentals", tags: ["Networking", "Troubleshooting", "Protocol"] },
    git: { icon: "🌿", level: "Intermediate", readingTime: "10 min", prerequisites: "Version control basics", tags: ["Git", "GitHub", "GitLab"] },
    docker: { icon: "🐳", level: "Beginner", readingTime: "8 min", prerequisites: "Linux basics", tags: ["Containers", "Images", "Runtime"] },
    kubernetes: { icon: "☸️", level: "Advanced", readingTime: "14 min", prerequisites: "Containers and networking", tags: ["Kubernetes", "Orchestration", "Reliability"] },
    helm: { icon: "⛵", level: "Intermediate", readingTime: "8 min", prerequisites: "Kubernetes basics", tags: ["Helm", "Packaging", "Templating"] },
    terraform: { icon: "🧱", level: "Intermediate", readingTime: "12 min", prerequisites: "Cloud basics", tags: ["Terraform", "IaC", "State"] },
    aws: { icon: "☁️", level: "Intermediate", readingTime: "12 min", prerequisites: "Networking basics", tags: ["AWS", "Cloud", "Architecture"] },
    azure: { icon: "🔷", level: "Intermediate", readingTime: "12 min", prerequisites: "Cloud basics", tags: ["Azure", "Identity", "Kubernetes"] },
    jenkins: { icon: "🔧", level: "Intermediate", readingTime: "10 min", prerequisites: "Linux basics", tags: ["Jenkins", "CI/CD", "Automation"] },
    python: { icon: "🐍", level: "Intermediate", readingTime: "8 min", prerequisites: "Programming basics", tags: ["Python", "Scripting", "Automation"] },
    bash: { icon: "💻", level: "Beginner", readingTime: "7 min", prerequisites: "Shell basics", tags: ["Bash", "Automation", "Troubleshooting"] },
    ansible: { icon: "🤖", level: "Intermediate", readingTime: "8 min", prerequisites: "Linux basics", tags: ["Ansible", "Automation", "Configuration"] },
    argocd: { icon: "🔄", level: "Advanced", readingTime: "9 min", prerequisites: "GitOps basics", tags: ["ArgoCD", "GitOps", "Delivery"] },
    prometheus: { icon: "📈", level: "Advanced", readingTime: "10 min", prerequisites: "Metrics basics", tags: ["Prometheus", "Monitoring", "Alerting"] },
    grafana: { icon: "📊", level: "Intermediate", readingTime: "8 min", prerequisites: "Metrics basics", tags: ["Grafana", "Dashboards", "Observability"] },
    splunk: { icon: "🔍", level: "Intermediate", readingTime: "8 min", prerequisites: "Log analysis basics", tags: ["Splunk", "Logs", "Investigation"] },
    dynatrace: { icon: "🛰️", level: "Advanced", readingTime: "9 min", prerequisites: "Application observability", tags: ["Dynatrace", "Tracing", "Performance"] },
    kafka: { icon: "📨", level: "Advanced", readingTime: "10 min", prerequisites: "Distributed systems", tags: ["Kafka", "Streaming", "Events"] },
    postgresql: { icon: "🗄️", level: "Intermediate", readingTime: "8 min", prerequisites: "Databases", tags: ["PostgreSQL", "Databases", "Operations"] },
    cassandra: { icon: "🧬", level: "Advanced", readingTime: "9 min", prerequisites: "Distributed systems", tags: ["Cassandra", "NoSQL", "Scaling"] }
  },
  topicConcepts: {
    linux: [
      "Distributions and package management",
      "Permissions, users, and system security",
      "Process control, logging, and shell utilities",
      "Filesystem layout, services, and kernel interfaces"
    ],
    networking: [
      "TCP/IP, routing, and subnet design",
      "DNS, load balancing, and firewall policies",
      "Service discovery and network troubleshooting",
      "VPNs, cloud networking, and connectivity patterns"
    ],
    git: [
      "Branching strategies and merge workflows",
      "Repository collaboration, PR reviews, and protection rules",
      "Rebase, merge conflict resolution, and recovery tools",
      "GitOps, CI integration, and deployment automation"
    ],
    docker: [
      "Image build, layering, and registry management",
      "Container lifecycle and runtime isolation",
      "Security hardening, secrets, and resource limits",
      "Networking, volumes, and CI/CD container pipelines"
    ],
    kubernetes: [
      "Cluster architecture, control plane, and worker nodes",
      "Workloads, services, ingress, and networking",
      "Scaling, self-healing, and rollout strategies",
      "Observability, policy, and production readiness"
    ],
    helm: [
      "Chart structure, templating, and value inheritance",
      "Release management and rollback workflows",
      "Reusable libraries and multi-environment packaging",
      "Secrets management, hooks, and deployment validation"
    ],
    terraform: [
      "State backends, locking, and environment separation",
      "Module design, input/output contracts, and reuse",
      "Change planning, drift detection, and lifecycle rules",
      "Provider configuration, security, and production deployment"
    ],
    aws: [
      "Account and identity management",
      "Networking, VPCs, and high-availability design",
      "Compute, storage, and managed service architecture",
      "Cost governance, observability, and compliance controls"
    ],
    azure: [
      "Resource groups, subscriptions, and governance",
      "Identity, policy, and secure networking",
      "AKS, managed services, and hybrid cloud patterns",
      "Monitoring, cost management, and operational resilience"
    ],
    jenkins: [
      "Pipeline as code, agents, and build orchestration",
      "Shared libraries, job templates, and credentials",
      "Scaling runners, fault tolerance, and job isolation",
      "Release pipelines, rollback controls, and quality gates"
    ],
    python: [
      "Automation scripting, APIs, and CLI tooling",
      "Virtual environments, dependency management, and testing",
      "Observability, logging, and production deployment",
      "Infrastructure automation and cloud SDK usage"
    ],
    bash: [
      "Shell scripting fundamentals and command pipelines",
      "Automation patterns and idempotent operations",
      "Text processing, file manipulation, and debugging",
      "System maintenance, cron jobs, and environment control"
    ],
    ansible: [
      "Playbooks, inventories, and declarative configuration",
      "Roles, reusability, and idempotence",
      "Secrets, vaults, and secure automation",
      "Orchestration, drift remediation, and operational workflows"
    ],
    argocd: [
      "GitOps synchronization and application reconciliation",
      "Declarative manifests, repos, and deployment targets",
      "Health checks, promotion strategies, and rollback",
      "Cluster access, RBAC, and continuous delivery patterns"
    ],
    prometheus: [
      "Metrics collection, scraping, and exposition",
      "Alerting rules, recording rules, and thresholds",
      "Scaling storage, federation, and remote write",
      "Service discovery, dashboard integration, and SLOs"
    ],
    grafana: [
      "Dashboard design, panels, and reusable templates",
      "Data sources, queries, and alert channels",
      "SLO reporting, annotations, and incident dashboards",
      "Access control, provisioning, and runtime tuning"
    ],
    splunk: [
      "Data ingestion, parsing, and event indexing",
      "Search, dashboards, and incident investigation",
      "Alerting, correlation, and operational analytics",
      "Security posture, audit trails, and log lifecycle"
    ],
    dynatrace: [
      "Full-stack observability and distributed tracing",
      "Synthetic monitoring and real-user insights",
      "Problem detection, root cause analysis, and alerts",
      "Cloud-native instrumentation, dashboards, and automation"
    ],
    kafka: [
      "Topic design, partitioning, and replication",
      "Producer/consumer semantics and ordering guarantees",
      "Stream processing, connectors, and event-driven design",
      "Operational tuning, monitoring, and fault recovery"
    ],
    postgresql: [
      "Schema design, indexing, and query performance",
      "Backup, restore, and high-availability clusters",
      "Security, authentication, and auditing",
      "Monitoring, vacuum, and resource tuning"
    ],
    cassandra: [
      "Distributed architecture, partitioning, and replication",
      "Consistency models and read/write patterns",
      "Repair, compaction, and cluster scaling",
      "Failure recovery, backups, and operational tuning"
    ]
  },
  interviewQuestions: {
    kubernetes: [
      { question: "How would you design a production-grade Kubernetes rollout strategy for a critical service?", answer: "I would use rolling updates with readiness gates, pod disruption budgets, resource requests and limits, and progressive traffic shifting through ingress or service mesh controls. The rollout should be observable through metrics, logs, and synthetic checks before full promotion." }
    ],
    terraform: [
      { question: "How do you manage Terraform state safely in a team environment?", answer: "I use remote state backends such as S3 with DynamoDB locking or Azure Storage with state locking, versioning, and least-privilege access. I also separate environments and enforce policy checks in CI before apply." },
      { question: "What is the biggest risk when changing infrastructure as code in production?", answer: "The biggest risk is unintended drift or destructive changes caused by incomplete understanding of dependencies and state. I mitigate this with plan review, change windows, policy-as-code, and staged environments." },
      { question: "How do you keep Terraform modules reusable and maintainable?", answer: "I design modules around clear boundaries, input validation, outputs for dependencies, provider pinning, and standardized tagging. I make them idempotent and document their purpose and assumptions clearly." }
    ],
    aws: [
      { question: "How do you design an AWS landing zone for a growing engineering organization?", answer: "I start with account structure, IAM governance, centralized logging, networking boundaries, tagging standards, and baseline security controls. Automation through AWS Organizations, Control Tower, and Service Catalog helps scale safely." },
      { question: "What are the main considerations for designing highly available workloads on AWS?", answer: "I focus on multi-AZ placement, redundancy, load balancing, autoscaling, backup strategy, and failure-domain isolation. For critical services, I also consider regional recovery and dependency mapping." },
      { question: "How do you reduce cloud cost without harming reliability?", answer: "I right-size instances, use savings plans or reserved capacity where appropriate, turn off idle resources, and apply autoscaling and lifecycle policies. Cost optimization should be tied to usage data and architecture reviews rather than blanket cuts." }
    ],
    azure: [
      { question: "How do you secure Azure environments for multi-team delivery?", answer: "I use role-based access control, managed identities, Azure Policy, private networking, key vault, and centralized monitoring. Security automation and environment segregation are essential for compliance and operational safety." },
      { question: "How does Azure Kubernetes Service fit into a modern platform strategy?", answer: "AKS reduces operational overhead while allowing teams to focus on workloads and platform services. It works well when paired with GitOps, ingress, observability, cost governance, and secure baseline configuration." }
    ],
    docker: [
      { question: "What makes container images production-ready?", answer: "Production-ready images are small, pinned to trusted base images, scanned for vulnerabilities, and built reproducibly with versioned dependencies. They should include only the runtime requirements needed to start the application reliably." },
      { question: "How do you debug a container that starts and then exits immediately?", answer: "I inspect the container logs, entrypoint behavior, environment variables, mounted secrets, health checks, and the application startup path. I often run the image locally with the same command-line parameters to reproduce the issue." }
    ],
    git: [
      { question: "How do you make pull request reviews effective in a fast-moving team?", answer: "I enforce clear PR templates, require relevant tests, use CODEOWNERS, and focus review comments on behavior, security, and maintainability. Good review culture improves quality without slowing delivery too much." },
      { question: "What is the difference between GitHub Actions and generic CI tooling?", answer: "GitHub Actions is tightly integrated with GitHub workflows and repository events, which makes it efficient for code-driven automation. It is especially effective for teams already standardized on GitHub and its ecosystem." },
      { question: "How do you structure a scalable GitLab CI pipeline?", answer: "I split pipelines into stages such as lint, test, build, deploy, and security, with clear artifact flow and environment promotion. Reusable templates and cached dependencies keep the pipeline maintainable as the team grows." },
      { question: "What are the common failure modes in modern CI systems?", answer: "Flaky tests, dependency drift, runner capacity issues, and secret leakage are common. I address them with deterministic test setups, cleanup practices, and observability around pipeline duration and failures." }
    ],
    jenkins: [
      { question: "How do you reduce Jenkins pipeline sprawl?", answer: "I standardize pipeline templates, define shared libraries, and keep jobs focused on reusable stages. This prevents duplication and makes pipeline behavior easier to audit and troubleshoot." },
      { question: "What is the biggest operational concern with Jenkins at scale?", answer: "Agent management and plugin drift are common concerns. I mitigate them with agent autoscaling, version-controlled configuration, and controlled plugin governance." }
    ],
    prometheus: [
      { question: "How do you design alerts that actually reduce noise?", answer: "I use service-level indicators, alert routing by severity, and alert thresholds grounded in user impact. I also add runbooks and silence policies so teams can act quickly without ignoring real issues." },
      { question: "What is the difference between metrics, logs, and traces in modern observability?", answer: "Metrics show trends and thresholds, logs capture events and context, and traces reveal request latency across services. In production, they complement each other rather than replace one another." }
    ],
    grafana: [
      { question: "How do you build dashboards that help on-call engineers act quickly?", answer: "I prioritize top-level service health, recent incidents, dependency status, and the most important SLOs. Dashboards should answer what is failing, why it is failing, and what to look at next." }
    ],
    ansible: [
      { question: "Why do teams choose Ansible for configuration management?", answer: "Ansible has a low learning curve, uses simple YAML playbooks, and integrates well with existing infrastructure. It is a strong fit for repetitive operational tasks and standardized environment setup." }
    ],
    helm: [
      { question: "How do you manage Helm releases safely in production?", answer: "I use versioned charts, release history, rollback plans, and CI validation before deployment. I also keep values files environment-specific and review upgrades carefully with change management." }
    ]
  },
  playbookDocs: [
    ["linux", "Linux", "Operating systems, permissions, logs, processes, and shell fundamentals."],
    ["networking", "Networking", "Protocols, DNS, routing, firewalls, and packet-level debugging."],
    ["git", "Git", "Version control fundamentals, GitHub workflows, GitLab CI automation, branching, and recovery."],
    ["docker", "Docker", "Containers, images, registries, and runtime operations."],
    ["kubernetes", "Kubernetes", "Cluster orchestration, workloads, scaling, and reliability."],
    ["helm", "Helm", "Kubernetes package management, templating, and release control."],
    ["terraform", "Terraform", "Declarative infrastructure as code and state management."],
    ["aws", "AWS", "Core cloud building blocks for resilient infrastructure."],
    ["azure", "Azure", "Cloud services, networking, identity, and managed Kubernetes."],
    ["jenkins", "Jenkins", "Jobs, agents, pipelines, and plugin-based automation."],
    ["python", "Python", "Automation, APIs, tooling, and operational scripting."],
    ["bash", "Bash", "Shell scripting, automation, and system troubleshooting."],
    ["ansible", "Ansible", "Configuration management, playbooks, and orchestration."],
    ["argocd", "ArgoCD", "GitOps workflows and Kubernetes deployment synchronization."],
    ["prometheus", "Prometheus", "Metrics scraping, alerting, and time-series monitoring."],
    ["grafana", "Grafana", "Dashboards, visualizations, alerting, and observability views."],
    ["splunk", "Splunk", "Log analysis, search pipelines, and incident investigations."],
    ["dynatrace", "Dynatrace", "Full-stack observability, tracing, and performance analytics."],
    ["kafka", "Kafka", "Distributed messaging, streaming, and event-driven integration."],
    ["postgresql", "PostgreSQL", "Operational database basics, backup, tuning, and troubleshooting."],
    ["cassandra", "Cassandra", "Distributed NoSQL architecture, replication, and repair workflows."]
  ],
  cheatSheets: [
    ["kubectl", "kubectl", "Quick Kubernetes cluster and workload commands."],
    ["helm", "helm", "Helm release and templating commands."],
    ["terraform", "terraform", "Terraform plan, apply, and state commands."],
    ["docker", "docker", "Image, container, network, and volume commands."],
    ["git", "git", "Daily Git workflow and recovery commands."],
    ["aws-cli", "aws cli", "Frequent AWS CLI commands for IAM, EC2, and S3."],
    ["az-cli", "az cli", "Common Azure CLI commands for groups, AKS, and networking."],
    ["bash", "bash", "Shell navigation, variables, and text processing."],
    ["jq", "jq", "JSON parsing and filtering shortcuts."],
    ["yq", "yq", "YAML parsing, patching, and query examples."]
  ]
};
