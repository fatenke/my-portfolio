import { motion } from 'framer-motion'

const nodes = [
  { id: 'Docs', x: 100, y: 80 },
  { id: 'Kubernetes', x: 250, y: 30 },
  { id: 'OpenStack', x: 270, y: 150 },
  { id: 'Ansible', x: 430, y: 90 },
  { id: 'Monitoring', x: 410, y: 200 },
  { id: 'AI', x: 560, y: 120 },
]

const connections = [
  ['Docs', 'Kubernetes'],
  ['Docs', 'OpenStack'],
  ['Kubernetes', 'Ansible'],
  ['OpenStack', 'Monitoring'],
  ['Ansible', 'AI'],
  ['Monitoring', 'AI'],
]

export function InfrastructureDiagram() {
  return (
    <div className="infrastructure-diagram">
      <div className="diagram-heading">
        <div>
          <p className="eyebrow diagram-label">
            System topology
          </p>
          <h3 className="diagram-title">Cloud & AI environment</h3>
        </div>
        <div className="diagram-state">
          <span className="diagram-status" />
          <span className="diagram-status-label">
            Active
          </span>
        </div>
      </div>

      <motion.svg
        viewBox="0 0 700 260"
        className="infrastructure-svg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="linkGlow" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {connections.map(([from, to]) => {
          const start = nodes.find((node) => node.id === from)
          const end = nodes.find((node) => node.id === to)

          if (!start || !end) return null

          return (
            <line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#linkGlow)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          )
        })}

        {nodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="38"
              fill="var(--accent-soft)"
              stroke="var(--secondary)"
              strokeWidth="1.5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="var(--foreground)"
              fontSize="12"
              fontWeight="600"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
            >
              {node.id}
            </text>
          </g>
        ))}
      </motion.svg>
    </div>
  )
}
