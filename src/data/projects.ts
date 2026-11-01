export type ProjectCategory = 'All' | 'Cloud & DevOps' | 'AI & RAG' | 'Full Stack'

export type Project = {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'All'>
  summary: string
  description: string
  tech: string[]
  videoUrl?: string
  repoUrl?: string
  status: 'Completed' | 'In progress' | 'Planned'
  architecture?: string[]
  learnings?: string[]
}

export const projects: Project[] = [
  {
    id: 'devops-troubleshooting-ai-assistant',
    title: 'DevOps Troubleshooting AI Assistant',
    category: 'AI & RAG',
    summary:
      'An AI assistant for retrieving relevant technical documentation and helping users troubleshoot DevOps problems using Retrieval-Augmented Generation.',
    description:
      'The project is designed around a document-first RAG workflow for technical support. It ingests DevOps documentation, splits it into manageable chunks, embeds the content, and stores it in a vector database for semantic retrieval. The assistant then combines retrieved context with LLM responses to provide grounded, documentation-aware guidance for troubleshooting tasks.',
    tech: ['RAG', 'Qdrant', 'Embeddings', 'BGE-small-en-v1.5', 'Python', 'Vector Search', 'Prompt Engineering', 'BM25'],
    videoUrl: '/videos/capture-devops-assistant.mp4',
    status: 'In progress',
    repoUrl: 'https://github.com/fatenke/devops-troubleshooting-assistant',
    architecture: ['Documents', 'Chunking', 'Embeddings', 'Qdrant', 'Retrieval', 'LLM Response'],
    learnings: [
      'High-quality chunking and metadata handling improve retrieval relevance for technical documentation.',
      'Vector search is useful for semantic retrieval, while keyword-based signals remain valuable for precise troubleshooting lookup.',
      'A grounded response pipeline is more useful than relying purely on generic model answers in infrastructure contexts.',
    ],
  },
  {
    id: 'procmap',
    title: 'ProcMap',
    category: 'Full Stack',
    summary:
      'A full-stack application for analyzing procedure dependencies and visualizing relationships between procedures.',
    description:
      'ProcMap is a software engineering project focused on understanding how procedures and services connect within a codebase or operational workflow. The application combines a frontend for interactive exploration and a backend API for dependency analysis, with GitLab integration and Linux-based deployment in mind. The goal is to make hidden dependencies easier to understand and reason about.',
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'REST APIs', 'GitLab', 'Linux'],
    videoUrl: '/videos/Capture-procmap.mov',
    status: 'Completed',
    repoUrl: 'https://github.com/your-github/procmap',
    architecture: ['React frontend', 'Spring Boot APIs', 'Dependency analysis layer', 'GitLab integration', 'Linux deployment'],
    learnings: [
      'Dependency visualization helps teams reason about change impact across procedural workflows.',
      'Good API contracts and consistent integrations reduce friction when linking operational systems together.',
      'A clear frontend/backend separation is critical when designing complex analysis tools.',
    ],
  },
  {
    id: 'openstack-cloud-devops-lab',
    title: 'OpenStack Cloud & DevOps Lab',
    category: 'Cloud & DevOps',
    summary:
      'A personal infrastructure lab exploring private cloud infrastructure, virtualization, container orchestration, automation, and observability.',
    description:
      'This lab brings together hands-on learning in cloud-native systems, virtualization, automation, and monitoring. It focuses on building practical knowledge around OpenStack, Kubernetes, Docker, Linux administration, and infrastructure tooling. The work mixes experimentation with real infrastructure patterns and operational thinking, with an emphasis on reproducibility and observability.',
    tech: ['OpenStack', 'Kubernetes', 'Docker', 'Ansible', 'Linux', 'Prometheus', 'Grafana', 'Proxmox', 'Terraform'],
    status: 'Completed',
    repoUrl: 'https://github.com/your-github/openstack-cloud-lab',
    architecture: ['OpenStack control plane', 'Kubernetes cluster', 'Container workloads', 'Monitoring stack', 'Automation tooling'],
    learnings: [
      'OpenStack and Kubernetes are complementary layers for cloud experimentation and application orchestration.',
      'Automation reduces drift and shortens the path from environment setup to troubleshooting.',
      'Monitoring and logs are essential to debug infrastructure issues early and confidently.',
    ],
  },
  {
    id: 'softyskills',
    title: 'SoftySkills',
    category: 'Full Stack',
    summary:
      'An employee leave and attendance management application developed during my 2024 internship.',
    description:
      'SoftySkills is a business-facing application for attendance and leave management. It combines operational workflows with a practical computer vision feature for attendance detection using YOLOv8. The project gives a strong example of full-stack application design, with a frontend for daily use and backend logic for business rules. The architecture also explores a gradual migration to Express, MongoDB, and JWT-based authentication.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'FastAPI', 'YOLOv8', 'Express', 'MongoDB', 'JWT'],
    status: 'Completed',
    repoUrl: 'https://github.com/your-github/softyskills',
    architecture: ['Frontend dashboard', 'API routes', 'Supabase data layer', 'FastAPI services', 'Computer vision attendance detection', 'Future auth and persistence migration'],
    learnings: [
      'Business software often needs both workflow clarity and practical automation to succeed in real environments.',
      'Computer vision can add value when it directly supports business operations, not as a standalone feature.',
      'A migration path should be explicit when architecture evolves beyond the current implementation.',
    ],
  },
]

export const projectCategories = ['All', 'Cloud & DevOps', 'AI & RAG', 'Full Stack'] as const
