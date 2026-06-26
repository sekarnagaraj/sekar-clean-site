const portfolioData = {
  profile: {
    name: "Sekar Nagaraj",
    role: "Principal Consultant | AI, Cloud, Data & Enterprise Quality Engineering",
    headline: "I help teams design, validate and deliver reliable enterprise technology across AI copilots, Azure cloud, data platforms, modernization and quality strategy.",
    location: "India",
    linkedin: "https://www.linkedin.com/in/sekarnagaraj/",
    email: "sekarnagarajp@gmail.com",
    tags: ["AI Copilots", "Azure", "Data Engineering", "Quality Engineering", "SRE", "Modernization", "Power BI", "Technology Leadership"],
    stats: [
      { value: "13+", label: "Years in enterprise technology" },
      { value: "40+", label: "Enterprise initiatives & accelerators" },
      { value: "4x", label: "Azure / Microsoft certification focus" },
      { value: "8", label: "Capability areas showcased" }
    ]
  },
  capabilities: [
    {
      icon: "✦",
      title: "AI & Copilot Engineering",
      summary: "Enterprise copilots, agentic workflows, Azure OpenAI, Semantic Kernel, RAG patterns, Azure AI Search and AI testing practices.",
      proof: ["Claims Copilot roadmap", "Semantic Kernel agent accelerator", "AI testing and evaluation thinking", "Prompt and orchestration patterns"]
    },
    {
      icon: "☁",
      title: "Azure Cloud & Platform Assurance",
      summary: "Cloud quality strategy across AKS, Functions, App Service, Cosmos DB, Service Bus, APIM, SignalR, Key Vault and Azure Monitor.",
      proof: ["HA and ZRS validation", "Azure Monitor workbooks", "Private endpoint troubleshooting", "APIM/API platform assurance"]
    },
    {
      icon: "⌁",
      title: "SRE, Observability & Chaos Engineering",
      summary: "Resilience validation using chaos experiments, SLO/error-budget thinking, telemetry dashboards, alert tuning and production-readiness reviews.",
      proof: ["Azure Chaos Studio experiments", "AKS pod stress and readiness validation", "Cosmos DB failover/throttling scenarios", "SRE cockpit workbooks"]
    },
    {
      icon: "✓",
      title: "Enterprise Quality Engineering",
      summary: "Quality strategy beyond test execution: automation, API validation, performance, security, governance, release quality and delivery confidence.",
      proof: ["Digital Assurance action groups", "Automation strategy", "Performance and API quality", "Enterprise QA estimation models"]
    },
    {
      icon: "▣",
      title: "Data Engineering & Microsoft Fabric",
      summary: "Data platform testing across Bronze/Silver/Gold layers, PySpark, Delta, Lakehouse, Warehouse, pipelines, governance and monitoring.",
      proof: ["DP-700 learning hub", "Spark and Delta labs", "Data Quality validation patterns", "DMV, monitoring and governance notes"]
    },
    {
      icon: "↗",
      title: "Migration & Modernization",
      summary: "Legacy-to-modern transformation assurance across VB6 to .NET, ADF to PySpark, Cognos/Crystal/WID to Power BI and API modernization.",
      proof: ["Modernization test strategy", "Migration accelerator scope", "Report modernization QA", "Data reconciliation and UAT planning"]
    },
    {
      icon: "◈",
      title: "Power BI & Reporting Modernization",
      summary: "Semantic model validation, paginated reports, deployment pipelines, DirectQuery, RLS, REST APIs and reporting operations.",
      proof: ["Cognos to Power BI migration", "Paginated report troubleshooting", "Dataset binding API thinking", "Incremental refresh and model validation"]
    },
    {
      icon: "⚙",
      title: "Technology Leadership",
      summary: "Architecture reviews, stakeholder communication, product validation, team enablement, estimation, technical governance and mentoring.",
      proof: ["QA community leadership", "Partner/team communication", "Product technology lead support", "Client-facing delivery guidance"]
    }
  ],
  projects: [
    {
      id: "claims-copilot",
      title: "Claims Copilot Enterprise Architecture",
      category: "AI & Copilot Engineering",
      status: "Architecture / Buildathon / Learning phase completed",
      summary: "AI-assisted insurance claims workflow using Azure OpenAI, Semantic Kernel, Azure AI Search, Cosmos DB, Redis and secure enterprise patterns.",
      businessProblem: "Claims processing and knowledge retrieval can become slow when teams rely on fragmented documents, manual lookups and inconsistent process guidance.",
      solution: "Designed a copilot architecture with retrieval, agent orchestration, secure configuration, environment separation and enterprise-grade storage choices.",
      technologies: ["Azure OpenAI", "Semantic Kernel", "Azure AI Search", "Cosmos DB", "Redis", "Key Vault", "Managed Identity", "Python"],
      highlights: ["Separated local developer .env from deployed Key Vault-driven configuration", "Defined secret rotation strategy using Event Grid and Azure Function worker", "Mapped JSON/JSONL local assets into enterprise stores based on access pattern", "Closed the learning/buildathon phase with credential shared on LinkedIn"],
      learning: "AI projects need architecture discipline before UI polish: identity, secrets, retrieval quality, observability and environment separation must be solved early."
    },
    {
      id: "agentic-ai-accelerator",
      title: "Agentic AI Accelerator with Semantic Kernel",
      category: "AI & Automation",
      status: "Prototype / Internal accelerator",
      summary: "Web MVC + Semantic Kernel accelerator that turns user-selected engineering scenarios into AI-assisted test and resilience recommendations.",
      businessProblem: "Teams need faster ways to identify testing, chaos and load-test ideas without manually reading large architecture or project documents.",
      solution: "Built a drag-and-drop web experience where selected tiles such as Chaos Studio, Load Test and Infra QA are interpreted by AI agents.",
      technologies: ["ASP.NET MVC", "Semantic Kernel", "Azure OpenAI", "C#", "Dependency Injection", "Dashboard analytics"],
      highlights: ["Initializer agent maps scenarios to concrete experiment ideas", "Multi-agent service registration and keyed kernel patterns", "Dashboard metrics for interactions, token usage and cost", "Revision-cycle and interaction-network visualizations"],
      learning: "Agentic systems need clear responsibility boundaries. Each agent should have a focused purpose instead of becoming a generic chatbot."
    },
    {
      id: "azure-chaos-sre",
      title: "Azure Chaos Engineering & SRE Cockpit",
      category: "Cloud, SRE & Resilience",
      status: "Executed across lower and pre-prod planning phases",
      summary: "Resilience validation across AKS, Cosmos DB, Service Bus, Functions, APIM, App Services, Storage, SignalR and monitoring workbooks.",
      businessProblem: "High availability claims are not enough. Teams need controlled experiments to understand what breaks, how users are impacted and whether alerts are useful.",
      solution: "Planned and executed chaos scenarios, HA checks, rollback validation, observability baselines and cockpit workbooks across Azure components.",
      technologies: ["Azure Chaos Studio", "AKS", "Cosmos DB", "Service Bus", "Azure Monitor", "Application Insights", "Workbooks", "KQL"],
      highlights: ["AKS CPU and memory stress with readiness observations", "Cosmos DB public-network and RU-throttling experiments", "Function misconfiguration scenario", "SRE dashboards for Apdex, latency, exceptions and alert trends"],
      learning: "Resilience is a product experience, not only an infrastructure setting. Every chaos result should translate into user impact, alert quality and recovery action."
    },
    {
      id: "data-ai-quality-framework",
      title: "Data & AI Quality Engineering Framework",
      category: "Data Engineering & QA",
      status: "Reusable QA strategy",
      summary: "Validation framework for data platforms covering schema, counts, duplicates, precision, transformations, referential integrity, DQ and compliance checks.",
      businessProblem: "Data modernization fails when teams validate only row counts and miss transformation accuracy, business rules, lineage, governance and downstream BI impacts.",
      solution: "Defined a layered QA approach across Bronze, Silver and Gold with sampling, reconciliation, DQ checks, MDM validation and Power BI verification.",
      technologies: ["Databricks", "PySpark", "Great Expectations", "ADF", "Synapse", "Microsoft Fabric", "Power BI", "SQL"],
      highlights: ["Bronze/Silver/Gold validation patterns", "30% data sampling models", "Transformation and referential integrity checks", "Data mart, MDM and reporting validation coverage"],
      learning: "Data QA must be designed around business confidence: completeness, correctness, consistency, freshness and explainability."
    },
    {
      id: "fabric-learning-hub",
      title: "Microsoft Fabric / DP-700 Learning Hub",
      category: "Data Engineering & Learning",
      status: "Active learning and notes",
      summary: "Ground-up Microsoft Fabric learning notes covering Lakehouse, Warehouse, OneLake, Spark, Delta, pipelines, monitoring, governance and scenario questions.",
      businessProblem: "Certification and real project understanding require more than definitions. Scenario-based explanation is needed for actual decision making.",
      solution: "Built concept notes using simple explanations, why it matters, real-time examples and exam-oriented scenarios for DP-700 topics.",
      technologies: ["Microsoft Fabric", "OneLake", "Lakehouse", "Warehouse", "PySpark", "Delta", "Power BI", "KQL"],
      highlights: ["Spark DataFrame and SQL patterns", "Delta history and optimization notes", "Monitoring hub, pipeline run, dataflow and notebook monitoring", "Security and governance explanation format"],
      learning: "Fabric concepts become clearer when connected to a business flow: ingestion, transformation, serving, monitoring and governance."
    },
    {
      id: "power-bi-modernization",
      title: "Power BI & Reporting Modernization",
      category: "BI Modernization",
      status: "Enterprise migration experience",
      summary: "Reporting modernization across Cognos/Crystal/WID to Power BI, semantic models, deployment pipelines, paginated reports and DirectQuery challenges.",
      businessProblem: "Report migration is often treated as a visual recreation exercise, but real risk sits in semantic models, data sources, refresh, security and performance.",
      solution: "Defined validation and troubleshooting approaches for semantic models, paginated reports, REST binding, deployment pipelines and model relationships.",
      technologies: ["Power BI", "Paginated Reports", "DAX", "Semantic Models", "DirectQuery", "Redshift", "DB2", "REST APIs"],
      highlights: ["100+ reports migration progress context", "Paginated report dataset binding analysis", "Composite relationship and cyclic-model troubleshooting", "Incremental refresh and QA mitigation planning"],
      learning: "BI modernization succeeds when model quality, data correctness, report behavior and deployment governance are validated together."
    },
    {
      id: "migration-modernization",
      title: "Migration & Modernization Assurance",
      category: "Modernization",
      status: "Multiple program patterns",
      summary: "Assurance strategy for VB6 to .NET, ADF to PySpark, ETL modernization, API modernization and reporting migration programs.",
      businessProblem: "Legacy modernization programs can look successful at build level while hidden compatibility, data, performance and user-acceptance risks remain open.",
      solution: "Created phased QA strategy covering regression, replatform comparison, API contract validation, data migration checks, performance baseline and UAT cycles.",
      technologies: ["VB.NET", ".NET", "ADF", "PySpark", "APIs", "Power BI", "Automation", "Data Reconciliation"],
      highlights: ["VB6 modernization test plan", "ADF to PySpark revamp thinking", "Migration accelerator scope definition", "Client-facing clarity on accelerator coverage and exclusions"],
      learning: "Migration quality is about proving business equivalence, not only proving that new screens or jobs run."
    },
    {
      id: "reporting-hub-automation",
      title: "Reporting Hub API Automation",
      category: "API & Workflow Automation",
      status: "Active troubleshooting / solution guidance",
      summary: "API-triggered reporting workflow where scheduled or manually triggered endpoint calls generate and email business reports.",
      businessProblem: "Business users need repeatable weekly/monthly report execution without relying on Postman or engineering-only tools.",
      solution: "Explored Power Apps/Power Automate and API-trigger options, with logging isolation, endpoint validation, access key usage and Reporting Hub troubleshooting.",
      technologies: ["REST APIs", "Power Automate", "Power Apps", "Reporting Hub", "Access Keys", "Webhooks", "Logs"],
      highlights: ["Power BI trigger limitations clarified", "Business-friendly trigger options identified", "Reporting Hub endpoint/log isolation", "Access key and URL validation"],
      learning: "Automation succeeds when business users get a safe trigger mechanism and engineering teams get traceability, logs and clear failure boundaries."
    },
    {
      id: "fintech-tech-leadership",
      title: "FinTech Product Technology Leadership",
      category: "Product Technology",
      status: "Technology lead support",
      summary: "Technology leadership for a fintech product initiative across architecture, APIs, strategy validation, analytics, user pain points and delivery discipline.",
      businessProblem: "Product teams can move fast, but retention, reliability, data freshness, user trust and QA discipline decide whether the business can scale.",
      solution: "Supported product thinking around strategy APIs, option-selling modules, trial journeys, user feedback loops, portfolio analysis retention and release quality.",
      technologies: ["APIs", "Analytics", "Financial Workflows", "Product QA", "User Feedback", "Data Freshness", "Strategy Validation"],
      highlights: ["Strategy API review and corrections", "User-aware UX and data freshness principles", "Trial journey and retention strategy thinking", "Portfolio analysis and issue-list conversion"],
      learning: "A product is not only features. It needs trust loops: correctness, retention, transparency, feedback handling and disciplined validation."
    },
    {
      id: "terraform-kubernetes-qa",
      title: "Infrastructure & Kubernetes Quality Validation",
      category: "Infra QA",
      status: "Reusable patterns",
      summary: "Quality approaches for Terraform module testing, Kubernetes validation, KUTTL tests, Helm path issues, kubelogin and agent setup challenges.",
      businessProblem: "Infrastructure changes can fail silently or break environments when validation is not isolated, repeatable and safe for shared subscriptions.",
      solution: "Defined patterns for Terraform tests, AKS validation, namespace checks, pod readiness assertions and environment-safe execution.",
      technologies: ["Terraform", "AKS", "KUTTL", "Kubernetes", "Helm", "Azure DevOps", "YAML"],
      highlights: ["Separate subscription recommendation for terraform test", "KUTTL Deployment/RBAC readiness checks", "Windows limitation awareness", "YAML and toolchain troubleshooting"],
      learning: "Infrastructure QA should be treated as code quality: isolated, automated, observable and safe to repeat."
    }
  ],
  architectures: [
    { title: "AI Copilot Reference Architecture", area: "AI", description: "Azure OpenAI + Semantic Kernel + Search + secure enterprise stores + observability." },
    { title: "RAG and Enterprise Knowledge Retrieval", area: "AI", description: "Document ingestion, chunking, indexing, retrieval, grounding and response validation." },
    { title: "Azure SRE Cockpit", area: "Cloud", description: "Service dashboards, Apdex, exceptions, latency, alerts and operational drill-down." },
    { title: "Chaos Engineering Flow", area: "SRE", description: "Hypothesis, blast radius, experiment, observation, rollback and improvement backlog." },
    { title: "Bronze-Silver-Gold Data Quality", area: "Data", description: "Layered validation for ingestion, transformation, curated serving and BI consumption." },
    { title: "Power BI Modernization Architecture", area: "BI", description: "Semantic model, deployment pipeline, reports, paginated reports and data source rules." },
    { title: "Migration Assurance Model", area: "Modernization", description: "Current-state baseline, migration checks, reconciliation, regression, performance and UAT." },
    { title: "API-triggered Reporting Workflow", area: "Automation", description: "Business trigger, secure endpoint, execution logs, report generation and email delivery." }
  ],
  blogs: [
    {
      id: "enterprise-ai-copilots",
      title: "Enterprise AI Copilots Need More Than Prompts",
      category: "AI",
      date: "2026-06-26",
      source: "Converted from prior LinkedIn positioning and Claims Copilot learning",
      summary: "A practical view on why enterprise copilots need architecture, security, retrieval quality and observability — not just a chatbot UI.",
      tags: ["AI", "Copilot", "Azure OpenAI", "Semantic Kernel"],
      body: [
        "Many AI initiatives start with a simple question: can we create a chatbot? That is a useful starting point, but it is not enough for enterprise adoption.",
        "A real copilot needs identity, secure configuration, retrieval quality, auditability, environment separation and clear ownership of data. Without these, the solution may look impressive in a demo but fail during scale, support or compliance review.",
        "In my Claims Copilot work, the focus was not only on Azure OpenAI. The real design decisions were around Azure AI Search, Cosmos DB, Redis, Key Vault, Managed Identity, secret rotation and how agents should collaborate safely.",
        "The lesson is simple: prompts create the experience, but architecture creates trust."
      ]
    },
    {
      id: "testing-ai-applications",
      title: "Testing AI Applications: What Changes for Quality Engineering",
      category: "Quality Engineering",
      date: "2026-06-26",
      source: "Converted from AI testing and Digital Assurance discussions",
      summary: "AI testing requires moving beyond pass/fail automation into evaluation, grounding, risk controls and continuous monitoring.",
      tags: ["AI Testing", "Quality Engineering", "LLM Evaluation"],
      body: [
        "Traditional testing asks whether the system returned the expected output. AI testing must also ask whether the answer is grounded, safe, consistent, useful and explainable.",
        "This changes the QA mindset. Test cases still matter, but evaluation datasets, hallucination checks, prompt regression, retrieval validation and human review loops become equally important.",
        "For enterprise teams, AI quality should be designed as a lifecycle: define use cases, test retrieval, evaluate responses, monitor production behavior and improve the knowledge base continuously.",
        "The future of QA is not only automation. It is confidence engineering."
      ]
    },
    {
      id: "azure-chaos-engineering",
      title: "Azure Chaos Engineering: Validate Resilience Before Customers Do",
      category: "Azure / SRE",
      date: "2026-06-26",
      source: "Converted from Azure Chaos Studio and SRE program notes",
      summary: "Chaos engineering helps teams understand real user impact before production incidents expose hidden weaknesses.",
      tags: ["Azure", "Chaos Engineering", "SRE", "AKS"],
      body: [
        "High availability cannot remain only an architecture diagram. It has to be tested under controlled failure conditions.",
        "In Azure workloads, this means validating what happens when AKS pods are stressed, Cosmos DB throttles, public network access is disabled, Functions are misconfigured or downstream services become unavailable.",
        "A good chaos experiment starts with a hypothesis, defines a safe blast radius, observes telemetry, validates rollback and converts findings into engineering improvements.",
        "The goal is not to break systems. The goal is to build confidence before customers experience failure."
      ]
    },
    {
      id: "fabric-dp700-learning",
      title: "Microsoft Fabric DP-700: Learning Fabric Through Real Scenarios",
      category: "Data Engineering",
      date: "2026-06-26",
      source: "Converted from DP-700 learning and LinkedIn certificate post",
      summary: "Fabric concepts become easier when explained through ingestion, transformation, serving, monitoring and governance scenarios.",
      tags: ["Microsoft Fabric", "DP-700", "Lakehouse", "PySpark"],
      body: [
        "Microsoft Fabric is not just a list of services. It is a connected data platform experience across OneLake, Lakehouse, Warehouse, Spark, pipelines, semantic models and Power BI.",
        "When learning DP-700, definitions are useful but scenario thinking is more important. A real data engineering flow starts from ingestion, moves through transformation, lands in curated tables and then supports analytics or reporting.",
        "Key topics like Delta tables, Spark jobs, pipeline monitoring, dataflow refresh, warehouse query monitoring and governance should always be understood with business impact in mind.",
        "The best way to learn Fabric is to keep asking: where is the data, how fresh is it, who can access it and how do we know it is correct?"
      ]
    },
    {
      id: "bronze-silver-gold-qa",
      title: "Data Quality in Bronze, Silver and Gold Layers",
      category: "Data Quality",
      date: "2026-06-26",
      source: "Converted from Data & AI QA framework discussions",
      summary: "A practical quality strategy for lakehouse and warehouse modernization programs.",
      tags: ["Data Quality", "ETL Testing", "Lakehouse", "PySpark"],
      body: [
        "Data platform testing should not stop at row counts. Row counts tell us whether something arrived, but not whether it is meaningful, correct or ready for business decisions.",
        "At the Bronze layer, the focus is ingestion completeness, schema drift, file arrival and raw-data preservation. At the Silver layer, transformation rules, data types, joins, duplicates and referential integrity become critical.",
        "At the Gold layer, business measures, aggregations, security, performance and reporting alignment must be validated. This is where incorrect transformations can directly affect executive decisions.",
        "A strong data QA strategy connects technical validation with business trust."
      ]
    },
    {
      id: "power-bi-modernization",
      title: "Power BI Modernization Is More Than Recreating Reports",
      category: "Power BI",
      date: "2026-06-26",
      source: "Converted from Power BI migration and troubleshooting notes",
      summary: "Why semantic models, data sources, relationships, refresh and deployment pipelines matter as much as report visuals.",
      tags: ["Power BI", "Migration", "Semantic Models", "Reporting"],
      body: [
        "Many reporting migrations start with a visual comparison: does the new report look like the old one? That is necessary, but not sufficient.",
        "In Power BI modernization, the real quality risks are often in semantic models, data source configuration, relationship design, DirectQuery behavior, paginated report binding, deployment rules and refresh strategy.",
        "A good migration approach validates calculations, filters, drilldowns, sort behavior, security, performance and deployment repeatability.",
        "The output is not just a new report. The output is a trusted analytics experience."
      ]
    },
    {
      id: "legacy-modernization-qa",
      title: "How to Think About QA in Legacy Modernization",
      category: "Modernization",
      date: "2026-06-26",
      source: "Converted from VB6 to .NET and migration strategy discussions",
      summary: "Legacy modernization requires business-equivalence validation, not just technical migration checks.",
      tags: ["Migration", "Modernization", "QA Strategy", ".NET"],
      body: [
        "Modernization programs often celebrate when the new application runs. But the real question is whether it behaves like the business expects.",
        "For VB6 to .NET, ADF to PySpark or reporting migration, QA has to validate business equivalence, edge cases, integrations, data migration, performance baseline and UAT readiness.",
        "This requires a phased strategy: understand current behavior, define critical flows, automate where useful, reconcile data and involve users early.",
        "Successful modernization is not just moving technology forward. It is preserving business confidence while improving the platform."
      ]
    },
    {
      id: "api-automation-reporting-hub",
      title: "API Automation for Business Reporting Workflows",
      category: "API Automation",
      date: "2026-06-26",
      source: "Converted from Reporting Hub API trigger discussions",
      summary: "How business-friendly triggers, secure endpoints and logs make scheduled reporting workflows reliable.",
      tags: ["APIs", "Reporting", "Power Automate", "Automation"],
      body: [
        "Business teams should not depend on Postman or engineering scripts to trigger routine reporting workflows.",
        "A better approach is to expose a secure endpoint or workflow trigger through a business-friendly layer such as Power Apps or Power Automate, while still keeping engineering controls around access keys, logging and execution status.",
        "When an API call generates reports and sends emails, troubleshooting depends on clear logs: was the endpoint called, did authentication pass, did the report job execute and did email delivery complete?",
        "The best automation is simple for business users and traceable for engineering teams."
      ]
    },
    {
      id: "reactive-vs-proactive-quality",
      title: "Reactive User Pain Points vs Proactive Self-Improvement",
      category: "Leadership",
      date: "2026-06-26",
      source: "Converted from product improvement and quality leadership posts",
      summary: "User pain points are naturally reactive, but product and engineering improvement must also be proactive.",
      tags: ["Leadership", "Quality", "Product Thinking"],
      body: [
        "It is normal for teams to react to user pain points. Real users reveal real problems, and those issues deserve attention.",
        "But if a team only reacts, improvement becomes slow and dependent on complaints. Engineering teams also need proactive quality checks, internal walkthroughs, design reviews, data validation and self-identified improvements.",
        "A healthy product team does both: it listens carefully to users and also holds itself accountable for finding weaknesses before users do.",
        "Reactive support protects today. Proactive improvement protects tomorrow."
      ]
    },
    {
      id: "product-tech-leadership",
      title: "Technology Leadership in Product Initiatives",
      category: "Technology Leadership",
      date: "2026-06-26",
      source: "Converted from fintech product leadership and retention discussions",
      summary: "A product needs more than features: it needs retention, trust, correctness, data freshness and operational discipline.",
      tags: ["Product", "Leadership", "QA", "FinTech"],
      body: [
        "In product initiatives, teams often focus heavily on new features. But long-term success depends on whether users trust the product enough to continue using it.",
        "For subscription or research-led products, retention becomes the core business signal. This means the team must understand user pulse early, validate correctness, preserve historical analysis, define refresh rules and communicate clearly when data is stale.",
        "Technology leadership in this context is about connecting product experience with architecture, APIs, QA, analytics and customer trust.",
        "Features attract users. Trust retains them."
      ]
    },
    {
      id: "linkedin-profile-positioning",
      title: "My Professional Positioning: AI, Cloud, Data and Assurance",
      category: "Career",
      date: "2026-06-26",
      source: "Converted from prior LinkedIn headline and intro drafts",
      summary: "A concise professional narrative around Microsoft platforms, Digital Assurance, AI, Cloud, Data Engineering and Analytics.",
      tags: ["Career", "LinkedIn", "Personal Brand"],
      body: [
        "I help businesses adopt AI, Cloud and Analytics on Microsoft platforms through a combination of Digital Assurance, Business Analysis, Data Engineering and technology delivery leadership.",
        "My work spans Azure, AI, data platforms, Power BI modernization, automation, cloud resilience and quality engineering. The common thread is reliability: building systems that teams can trust.",
        "Over time, I have learned that a strong technology profile should not only list tools. It should show problems solved, decisions made, risks managed and outcomes improved.",
        "That is the purpose of this portfolio: to document the work, the thinking and the learning behind enterprise technology delivery."
      ]
    },
    {
      id: "option-buying-agility",
      title: "Product Note: Option Buying Needs Agility, Not Hope",
      category: "Product Thinking",
      date: "2026-06-26",
      source: "Adapted from prior finance/product LinkedIn asset; educational framing only",
      summary: "A generic product-learning note on why decision-support tools should emphasize speed, risk and exit discipline instead of hope-based behavior.",
      tags: ["Product Thinking", "Risk", "Decision Support"],
      body: [
        "In fast-moving decision environments, hope is not a strategy. Users need clarity on direction, speed, risk and exit conditions.",
        "This product-thinking lesson applies beyond trading. Any decision-support platform should help users understand context, validate signals, manage risk and avoid emotional decision-making.",
        "The role of technology is not to guarantee outcomes. It is to improve discipline, transparency and decision quality.",
        "Educational awareness only. Not investment advice."
      ]
    }
  ],
  learningNotes: [
    { title: "DP-700 / Microsoft Fabric", items: ["Lakehouse vs Warehouse", "Spark DataFrames", "Delta tables", "Monitoring Hub", "Security & Governance"] },
    { title: "Azure AI & Copilot", items: ["Azure OpenAI", "Semantic Kernel", "RAG", "AI Search", "LLM Evaluation"] },
    { title: "SRE & Chaos", items: ["Azure Chaos Studio", "AKS stress", "SLO/error budget", "KQL workbooks", "Alert tuning"] },
    { title: "Power BI", items: ["Semantic models", "Paginated reports", "Deployment pipelines", "DirectQuery", "REST APIs"] },
    { title: "Data Quality", items: ["Schema checks", "Transformation validation", "DQ rules", "MDM", "Sampling strategy"] },
    { title: "Modernization", items: ["VB6 to .NET", "ADF to PySpark", "Cognos to Power BI", "API modernization", "UAT strategy"] }
  ]
};
