import { publicAsset } from '../config/publicAsset'

export type EducationItem = {
  period: string
  title: string
  institution: string
  institutionShortName: string
  logoUrl: string
  location?: string
}

export const education: EducationItem[] = [
  {
    period: '2024–Present',
    title: 'Engineering Degree in Computer Engineering, Cloud Computing specialization',
    institution: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
    institutionShortName: 'ESPRIT',
    logoUrl: publicAsset('esprit-logo.png'),
    location: 'Tunis',
  },
  {
    period: '2021–2024',
    title: "Bachelor's Degree in Computer Systems Engineering",
    institution: 'ISSAT Gafsa — Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa',
    institutionShortName: 'ISSAT Gafsa',
    logoUrl: publicAsset('issat-logo.png'),
  },
]

export type AchievementCategory = 'Certification' | 'Competition' | 'Community'

export type AchievementItem = {
  period: string
  title: string
  institution: string
  category: AchievementCategory
  images?: {
    src: string
    alt: string
    fit: 'contain' | 'cover'
    focus?: 'lower'
  }[]
}

export const achievements: AchievementItem[] = [
  {
    period: '2026',
    title: 'LLM ZOOMCAMP 2026',
    institution: 'DataTalks.Club',
    category: 'Certification',
    images: [
      {
        src: publicAsset('certifications/llm-zoomcamp-certificate.jpg'),
        alt: 'DataTalks.Club LLM Zoomcamp 2026 certificate',
        fit: 'contain',
      },
    ],
  },
  {
    period: '2026',
    title: 'Cisco Networking Academy Capture the Flag',
    institution: 'Cisco Networking Academy',
    category: 'Certification',
    images: [
      {
        src: publicAsset('certifications/Cisco_Networking_Academy_Capture_the_Flag_2026_certificate.jpg'),
        alt: 'Cisco Networking Academy Capture the Flag 2026 certificate',
        fit: 'contain',
      },
    ],
  },
  {
    period: '2025',
    title: 'Cisco CCNA 2',
    institution: 'Cisco Networking Academy',
    category: 'Certification',
    images: [
      {
        src: publicAsset('certifications/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.jpg'),
        alt: 'Cisco CCNA Switching, Routing, and Wireless Essentials certificate',
        fit: 'contain',
      },
    ],
  },
  {
    period: '2026',
    title: 'Cisco Real Madrid Challenge 2026 finalist',
    institution: 'Cisco Networking Academy',
    category: 'Competition',
    images: [
      {
        src: publicAsset('competition/real-madrid-cisco-challenge/image1.jpg'),
        alt: 'Cisco Real Madrid Challenge event photo',
        fit: 'cover',
      },
      {
        src: publicAsset('competition/real-madrid-cisco-challenge/image2.jpg'),
        alt: 'Cisco Real Madrid Challenge finalist photo',
        fit: 'cover',
      },
      {
        src: publicAsset('competition/real-madrid-cisco-challenge/image3.jpg'),
        alt: 'Cisco Networking Academy Learn-A-Thon 2026 certificate from the challenge folder',
        fit: 'contain',
      },
    ],
  },
  {
    period: '2026',
    title: '2nd Place — ESPRIT Smart Campus Hackathon',
    institution: 'ESPRIT',
    category: 'Competition',
    images: [
      {
        src: publicAsset('competition/smart-compus-hackathon/image1.png'),
        alt: 'ESPRIT Smart Campus Hackathon 2026 photo',
        fit: 'cover',
      },
      {
        src: publicAsset('competition/smart-compus-hackathon/image2.png'),
        alt: 'ESPRIT Smart Campus Hackathon 2026 team photo',
        fit: 'cover',
      },
      {
        src: publicAsset('competition/smart-compus-hackathon/image3.png'),
        alt: 'ESPRIT Smart Campus Hackathon 2026 award photo',
        fit: 'cover',
      },
    ],
  },
  {
    period: '2025',
    title: 'Organizer of ESPRIT Telco Day 2025',
    institution: 'ESPRIT',
    category: 'Community',
    images: [
      {
        src: publicAsset('events/telco-day-2025/image1.png'),
        alt: 'ESPRIT Telco Day 2025 event photo',
        fit: 'cover',
      },
      {
        src: publicAsset('events/telco-day-2025/image2.png'),
        alt: 'ESPRIT Telco Day 2025 team photo',
        fit: 'cover',
      },
      {
        src: publicAsset('events/telco-day-2025/image3.png'),
        alt: 'ESPRIT Telco Day 2025 group photo',
        fit: 'cover',
      },
    ],
  },
  {
    period: '2026',
    title: 'ESPRIT Telco Day 2026',
    institution: 'ESPRIT',
    category: 'Community',
    images: [
      {
        src: publicAsset('events/telco-day-2026/image1.png'),
        alt: 'ESPRIT Telco Day 2026 event group photo',
        fit: 'cover',
      },
      {
        src: publicAsset('events/telco-day-2026/image2.png'),
        alt: 'ESPRIT Telco Day 2026 team photo',
        fit: 'cover',
      },
      {
        src: publicAsset('events/telco-day-2026/image3.jpeg'),
        alt: 'ESPRIT Telco Day 2026 event photo',
        fit: 'cover',
        focus: 'lower',
      },
    ],
  },
]

export const currentExploring = [
  'Kubernetes and cloud-native infrastructure',
  'CI/CD and Infrastructure as Code',
  'Observability and monitoring',
  'LLMs, RAG, and intelligent agents',
]
