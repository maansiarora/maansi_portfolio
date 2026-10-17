import deploymentArchitecture from "../assets/architecture_diagram.png";
import marketplaceArchitecture from "../assets/marketplace-diagram.png";
import cicdMigrationArchitecture from "../assets/cicd-migration.png";

type CaseStudyContent = {
  duration?: string;
  architectureImage?: {
    src: string;
    alt: string;
  };
  architectureContent?: string;
  architecturePrompt?: string;
  sections: {
    id: string;
    title: string;
    content?: string;
    prompt?: string;
  }[];
};

export const caseStudies: Record<string, CaseStudyContent> = {
  "deployment-zone-expansion": {
  duration: "Aug 2025 - Feb 2026",

  architectureImage: {
    src: deploymentArchitecture,
    alt: "Architecture showing shared GitLab runners on AWS Kubernetes deploying into Azure landing zones. GitLab OIDC tokens are exchanged through Microsoft Entra ID for short-lived access. Resource management uses the Azure Resource Manager API, while private services are reached through a site-to-site VPN, enterprise firewalls and Azure Firewall. Production and non-production environments use private endpoints and regional DNS.",
  },

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      content: `
As engineering teams began adopting Azure-based landing zones, existing CI/CD capabilities were primarily designed around AWS-hosted delivery workflows. Teams needed a secure and consistent way to deploy applications and infrastructure into Azure environments without creating separate deployment platforms or maintaining their own runner infrastructure.

The challenge was to extend an existing shared GitLab Runner capability to support Azure-based tenancies while preserving security, operational simplicity and scalability. The solution also needed to support private Azure endpoints, cloud-native identity patterns and enterprise network controls without increasing onboarding complexity for engineering teams.
      `,
    },

    {
      id: "role",
      title: "My Role",
      content: `
I was involved throughout the full lifecycle of the initiative, from architectural design and technical decision-making through to implementation, rollout and operational enablement.

My responsibilities included:

• Collaborating with senior and staff engineers on solution architecture and design decisions.

• Evaluating deployment patterns and runner strategies for Azure workloads.

• Implementing GitLab Runner and platform configuration changes.

• Working closely with Azure and security team to design authentication, networking and connectivity approaches.

• Owning rollout planning, validation and operational readiness activities.

• Producing solution documentation and supporting knowledge sharing across teams.

This project provided the opportunity to contribute not only as an implementer but also as a participant in architecture reviews, stakeholder engagement and long-term platform direction.
      `,
    },

    {
      id: "decisions",
      title: "Key Decisions",
      content: `
Several architectural decisions shaped the final solution.

Rather than creating a separate Azure-hosted runner platform, we extended the existing shared GitLab Runner model. Reusing an operationally mature and security-reviewed platform reduced maintenance overhead, accelerated delivery and enabled a more consistent developer experience.

For authentication, the solution adopted OpenID Connect (OIDC) federation and Azure-managed identities. This approach avoided long-lived credentials and aligned deployment workflows with modern cloud security practices.

On the networking side, we adopted a layered approach using shared connectivity patterns and Azure-native controls. This balanced security requirements with usability, reducing onboarding time while maintaining strong access controls.

Dedicated Azure deployment runners, tagging strategies and namespace separation were also introduced to improve workload isolation, operational clarity and scalability as adoption increased.
      `,
    },

    {
      id: "technical-highlights",
      title: "Technical Highlights",
      content: `
The solution expanded a shared Kubernetes-based GitLab Runner platform to support Azure deployment workflows while continuing to operate from existing infrastructure.

Key areas included:

• Shared GitLab Runner architecture for Azure deployment workloads

• Kubernetes-based runner infrastructure with dedicated Azure deployment capabilities

• OpenID Connect (OIDC) federation with Microsoft Entra ID

• Infrastructure as Code deployment patterns

• Secure deployment into Azure landing zones and private endpoints

• Runner tagging and workload isolation strategies

• DNS routing and private endpoint resolution for Azure services

• Enterprise networking, VPN connectivity and firewall integration
      `,
    },

    {
      id: "impact",
      title: "Impact",
      content: `
The project established a reusable deployment model for Azure-based environments and expanded the capabilities of the shared GitLab platform.

Outcomes included:

• Enabled secure deployment workflows into Azure landing zones

• Reduced duplicated effort by reusing existing shared platform capabilities

• Improved consistency across CI/CD workflows and deployment patterns

• Strengthened alignment between cloud, platform and security practices

The initiative helped position GitLab as a central deployment capability for both existing and emerging cloud delivery patterns.
      `,
    },

    {
      id: "lessons",
      title: "Lessons Learned",
      content: `
One of the biggest lessons from this project was that successful platform engineering is rarely just an infrastructure challenge.

Many of the most important discussions involved balancing security requirements, operational constraints and developer experience. Decisions around identity, networking, DNS and deployment workflows each introduced trade-offs that needed to be considered from multiple perspectives.

The project reinforced the value of early stakeholder engagement, standardised platform patterns and cloud-native identity approaches. It also highlighted how much value can be created by extending existing platforms rather than introducing new systems.

If approaching the project again, I would invest even earlier in platform onboarding journeys and self-service enablement to further reduce adoption friction and help teams move from proof-of-concept to production more quickly.
      `,
    },
  ],
},
  "developer-marketplace": {
  architectureImage: {
    src: marketplaceArchitecture,
    alt: "Developer marketplace architecture showing its users, identity and access services, marketplace experience, Backstage portal core, decoupled services and integrated tools.",
  },

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      content: `
Our internal developer portal was built on Backstage and provided access to tools, templates and engineering resources. While the platform offered valuable capabilities, adoption remained lower than expected and developers often bypassed the portal when searching for products and services.

Research, interviews and workshops revealed several recurring challenges. Discovery relied on basic search functionality with limited filtering and no quality indicators. Tool ownership and support information were difficult to find, making it hard for teams to evaluate whether a product was actively maintained and suitable for adoption.

Onboarding experiences were fragmented across multiple pages and often depended on outdated documentation. Publishing new products into the ecosystem also relied heavily on manual review processes, creating bottlenecks for both contributors and platform teams.

The goal was to transform the developer portal from a catalogue of information into a self-service marketplace that improved discoverability, simplified onboarding and encouraged adoption of internal engineering platforms.
      `,
    },

    {
      id: "role",
      title: "My Role",
      content: `
I was a full-stack and platform engineer responsible for the marketplace experience from concept through to implementation.

My contributions included:

• Designing and implementing the marketplace architecture within Backstage.

• Developing reusable React and TypeScript components for product discovery and evaluation.

• Building custom Backstage plugin experiences and entity page layouts.

• Creating a custom marketplace theme aligned with our design system.

• Extending backend data models and database schemas to support marketplace-specific metadata.

• Implementing filtering, sorting, pagination, bookmarking and product categorisation.

• Building responsive and accessible user experiences.

• Collaborating with product, UX and platform stakeholders to translate research findings into technical solutions.

• Supporting rollout activities, stakeholder demonstrations and ongoing enhancements.
      `,
    },

    {
      id: "decisions",
      title: "Key Decisions",
      content: `
Several key decisions shaped the marketplace experience.

Rather than replacing the existing developer portal or adopting a third-party marketplace solution, we chose to build on top of Quarterback. This allowed us to preserve existing integrations, governance processes and platform investments while delivering a significantly improved user experience.

We adopted a card-based marketplace experience focused on product discovery instead of relying on catalogue-style entity listings. The new approach prioritised clarity, ownership visibility and adoption information directly within the browsing experience.

A dedicated product page experience replaced the standard entity views for marketplace products. This provided a consistent evaluation journey where users could understand what a product does, how to get started and where to find supporting resources.

From a technical perspective, we invested in reusable components, design-system alignment and marketplace-specific data models to ensure the solution could evolve without becoming tightly coupled to individual product types.
      `,
    },

    {
      id: "technical-highlights",
      title: "Technical Highlights",
      content: `
The marketplace was implemented using React and TypeScript on top of the Backstage.io platform.

Key technical highlights included:

• Custom Backstage plugin development and extension points

• Marketplace-specific routing and navigation experiences

• React and TypeScript component architecture designed for reuse

• Custom marketplace theming and design-system integration

• Responsive layouts and accessibility-first implementation

• Product discovery through filtering, sorting, pagination and categorisation

• Backend metadata model enhancements supporting richer product information

• Database schema updates for marketplace features and ownership metadata

• API integrations with existing catalogue and platform services

• Automated validation workflows supporting self-service contribution models

      `,
    },

    {
      id: "impact",
      title: "Impact",
      content: `
The Developer Marketplace transformed the portal from a collection of engineering resources into a guided self-service experience.

Key outcomes included:

• Improved discoverability of internal engineering products and services

• Reduced friction during product evaluation and onboarding

• Created a consistent experience across multiple product categories

• Enabled better visibility of ownership, support and adoption information

• Established reusable UX patterns and component standards

• Strengthened alignment between developer experience, platform engineering and user-centred design practices

The project demonstrated how thoughtful product design and engineering can significantly improve the usability and adoption of internal platforms.
      `,
    },

    {
      id: "lessons",
      title: "Lessons Learned",
      content: `
One of the biggest lessons from this project was that internal platforms need to be treated as products, not simply collections of technical capabilities.

Many of the original discovery and onboarding challenges were not caused by missing features but by poor information architecture, inconsistent metadata and fragmented user journeys.

The project reinforced the importance of combining user research, design thinking and engineering execution when building internal tools. Small improvements to discoverability, navigation and onboarding often delivered greater value than large technical enhancements.

Another key takeaway was the long-term value of investing in reusable design and development patterns. Building shared components, themes and marketplace structures reduced future implementation effort and improved consistency across the platform.
      `,
    },
  ],
},
  "ci-cd-modernisation": {
  architectureImage: {
    src: cicdMigrationArchitecture,
    alt: "CI/CD migration from Bamboo to GitLab CI and Flux CD, showing rootless image builds, quality and security scans, image promotion to AWS ECR, GitOps reconciliation and Helm deployments on EKS.",
  },

  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      content: `
The application's build and release process was distributed across multiple systems. Builds ran on Bamboo using custom shell scripts and large build agents, while source code remained in GitLab. Security and quality controls including SonarQube, Veracode and Coverity also operated through Bamboo, creating fragmented delivery workflows and duplicated operational overhead.

Deployments followed a push-based model where pipelines authenticated directly against container registries and Kubernetes clusters. Images were copied between registries before being deployed via Helm commands executed from build agents. This approach required registry and cluster credentials to be stored within delivery pipelines and provided limited visibility into what was actually deployed to each environment.

At the same time, the organisation was standardising on GitLab and introducing stricter security requirements including restricted internet access, rootless image builds and controlled dependency management. The migration therefore became more than a tooling change. It required a redesign of the delivery model to align with modern platform engineering and GitOps practices.
      `,
    },

    {
      id: "role",
      title: "My Role",
      content: `
I led the design and planning of the continuous delivery migration strategy, with a particular focus on the transition from Bamboo-based deployments to a GitOps model using Flux CD.

My responsibilities included:

• Evaluating deployment approaches and migration options for Bamboo workloads.

• Designing the target GitLab CI and Flux CD delivery workflow.

• Producing architecture documentation, implementation plans and migration backlogs.

• Working with platform engineering team to align pipelines with new GitLab runner standards.
      `,
    },

    {
      id: "decisions",
      title: "Key Decisions",
      content: `
Several key architectural decisions shaped the migration strategy.

Flux CD was selected as the deployment platform instead of executing Helm directly from CI pipelines. This shifted deployment execution into the cluster, aligned delivery with GitOps principles and established Git as the source of truth for environments. While this introduced new tooling and operational concepts, it significantly improved visibility and deployment traceability.

Container images were promoted into AWS ECR and pulled directly by workloads instead of relying on runtime access to Harbor from application namespaces. This simplified cluster authentication patterns and improved scalability across environments.

Deployment approvals were intentionally retained through a manual GitLab promotion step that moved environment tags to approved commits. This allowed the solution to align with established change approval processes while still benefiting from GitOps automation.

Repository structures, image build strategies and secrets-management patterns were also evaluated to ensure the resulting solution would be maintainable, secure and scalable for future platform adoption.
      `,
    },

    {
      id: "technical-highlights",
      title: "Technical Highlights",
      content: `
The migration introduced a modern GitLab CI and Flux CD delivery model built on platform security, traceability and automation principles.

Key technical components included:

• GitLab CI workflows using rootless Buildah-based image builds

• Shared hardened base images across frontend and backend services

• Semantic versioning and immutable image tagging using commit SHAs

• Aqua, SonarQube, Veracode and Coverity integration as part of the delivery workflow

• Flux CD GitOps deployment model using GitRepository and Kustomization resources

• Helm release management performed within Kubernetes clusters rather than through CI runners

• AWS ECR as the cloud-native deployment registry

• Git-based rollback capabilities through commit reversion rather than imperative deployment commands

The resulting architecture replaced push-based delivery with a controlled GitOps workflow that improved auditability and operational consistency.
      `,
    },

    {
      id: "impact",
      title: "Impact",
      content: `
The migration established a modern delivery platform that improved security, traceability and maintainability while reducing dependence on legacy tooling.

Key outcomes included:

• Removal of registry and cluster credentials from deployment pipelines

• Git becoming the single source of truth for deployment state and rollback operations

• Elimination of Bamboo-to-GitLab status synchronisation workflows

• Standardised CI/CD patterns across engineering teams

The project also created a clear migration path away from legacy delivery tooling while supporting modern platform engineering practices.
      `,
    },

    {
      id: "lessons",
      title: "Lessons Learned",
      content: `
One of the biggest lessons from this migration was that platform transformations should be treated as redesign efforts rather than simple tool replacements.

Many assumptions built into existing Bamboo workflows no longer applied within the new security and platform standards. Running technical proof-of-concepts early helped uncover these constraints before large-scale migration work began.

The project also demonstrated the importance of addressing platform dependencies early. Secrets management, security scanning integrations and platform access controls had a direct impact on migration progress and should be treated as critical prerequisites.

Another key takeaway was that successful GitOps adoption requires alignment with organisational change-management processes. Designing deployment workflows around existing approval models greatly increased stakeholder confidence and adoption.
      `,
    },
  ],
},
  "upgrade-automation": {
    architecturePrompt: "Add a public-safe diagram of the Quarterback upgrade workflow, showing confirmed automation steps and components.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        prompt: "Describe the manual upgrade effort and the challenges of keeping Quarterback within the supported version range.",
      },
      {
        id: "role",
        title: "My Role",
        prompt: "Outline your responsibilities in designing and implementing the upgrade automation.",
      },
      {
        id: "decisions",
        title: "Key Decisions",
        prompt: "Explain which upgrade steps were automated and the decisions and trade-offs behind the workflow.",
      },
      {
        id: "technical-highlights",
        title: "Technical Highlights",
        prompt: "Describe the Backstage and GitLab CI automation details approved for public use.",
      },
      {
        id: "impact",
        title: "Impact",
        prompt: "Add verified outcomes for manual effort, upgrade timelines and version support, with approved metrics where available.",
      },
      {
        id: "lessons",
        title: "Lessons Learned",
        prompt: "Reflect on automating upgrades, the challenges encountered and what you would improve.",
      },
    ],
  },
};
