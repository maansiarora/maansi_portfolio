import deploymentArchitecture from "../assets/architecture_diagram.png";

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
    architecturePrompt: "Add a public-safe diagram of the developer marketplace, showing confirmed portal components and integrations.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        prompt: "Describe the product discovery and onboarding problems the developer marketplace needed to address.",
      },
      {
        id: "role",
        title: "My Role",
        prompt: "Outline your responsibilities across the marketplace experience, design and implementation.",
      },
      {
        id: "decisions",
        title: "Key Decisions",
        prompt: "Explain the main user experience and technical decisions, including alternatives and trade-offs.",
      },
      {
        id: "technical-highlights",
        title: "Technical Highlights",
        prompt: "Describe the React, TypeScript and Backstage implementation details approved for public use.",
      },
      {
        id: "impact",
        title: "Impact",
        prompt: "Add verified outcomes for discoverability, onboarding and tool adoption, with approved metrics where available.",
      },
      {
        id: "lessons",
        title: "Lessons Learned",
        prompt: "Reflect on building the marketplace experience, what you learned and what you would improve.",
      },
    ],
  },
  "ci-cd-modernisation": {
    architecturePrompt: "Add a public-safe diagram of the delivery workflow, showing confirmed Bamboo, GitLab and deployment components.",
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        prompt: "Describe the legacy delivery limitations and risks that motivated the Bamboo to GitLab migration.",
      },
      {
        id: "role",
        title: "My Role",
        prompt: "Outline your migration responsibilities and collaboration with the teams using the pipelines.",
      },
      {
        id: "decisions",
        title: "Key Decisions",
        prompt: "Explain the migration strategy and delivery workflow decisions, including alternatives and trade-offs.",
      },
      {
        id: "technical-highlights",
        title: "Technical Highlights",
        prompt: "Describe the pipeline migration and GitLab CI, Flux CD and AWS implementation details approved for public use.",
      },
      {
        id: "impact",
        title: "Impact",
        prompt: "Add verified outcomes for delivery workflows and legacy risk reduction, with approved metrics where available.",
      },
      {
        id: "lessons",
        title: "Lessons Learned",
        prompt: "Reflect on the migration, how you managed change and what you would approach differently.",
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
