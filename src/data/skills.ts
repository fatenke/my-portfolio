export type SkillGroup = {
  title: string
  items: { name: string; tag?: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'OpenStack' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Virtualization' },
      { name: 'Proxmox' },
    ],
  },
  {
    title: 'DevOps & Automation',
    items: [
      { name: 'Ansible' },
      { name: 'Terraform' },
      { name: 'Jenkins' },
      { name: 'GitHub Actions' },
      { name: 'CI/CD' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
    ],
  },
  {
    title: 'AI & Retrieval',
    items: [
      { name: 'Large Language Models (LLMs)' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'Vector Search' },
      { name: 'Qdrant' },
      { name: 'Embeddings' },
      { name: 'BM25' },
      { name: 'Prompt Engineering' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Software Engineering',
    items: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Node.js' },
      { name: 'REST APIs' },
    ],
  },
]
