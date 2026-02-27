export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "aimotion-research",
    role: "Student Research Assistant",
    company: "Technische Hochschule Ingolstadt - AImotion Bavaria",
    location: "Ingolstadt, Germany",
    period: "05.2025 - Present",
    description: [
      "Upgrading and maintaining Python codebase for DirectionNet (transformer-based UAV localization), improving training stability and reducing training loss by >98%",
      "Deploying and testing models across multiple datasets on Linux/macOS, ensuring consistent preprocessing and data handling for reproducible runs",
      "Conducting performance evaluations across datasets/setups, improving rotation error by ~21-24%, and documenting workflows to support ongoing R&D"
    ],
    tech: ["Python", "PyTorch", "Transformers", "Linux", "macOS", "Computer Vision", "Documentation"]
  },
  {
    id: "meghna-cloud",
    role: "Assistant System Engineer, Cloud Operations",
    company: "Meghna Cloud - JV of BDCCL and GenNext Technologies",
    location: "Dhaka, Bangladesh",
    period: "01.2024 - 06.2024",
    description: [
      "Installed, configured, and maintained Linux-based servers and virtualized environments (Proxmox) supporting OpenStack cloud infrastructure",
      "Monitored system health, availability, and performance using Prometheus, Grafana, Zabbix, Cacti, and ELK Stack, maintaining up to 100% availability",
      "Troubleshot service, network, and infrastructure issues, supported client onboarding and POCs, and produced deployment runbooks"
    ],
    tech: ["Linux", "OpenStack", "Proxmox", "Prometheus", "Grafana", "Zabbix", "ELK Stack", "Networking"]
  },
  {
    id: "digi-jadoo",
    role: "Assistant System Engineer",
    company: "Digi Jadoo Broadband Limited",
    location: "Dhaka, Bangladesh",
    period: "09.2022 - 12.2023",
    description: [
      "Administered Linux and Windows servers, including Postfix email services and user lifecycle management",
      "Served as first point of contact for internal IT support, resolving workstation and Microsoft Office issues",
      "Troubleshot DNS, network connectivity, and server service issues, maintaining structured technical documentation"
    ],
    tech: ["Linux", "Windows Server", "Postfix", "Red Hat", "SSH", "DNS", "Graylog", "Networking"]
  }
];
