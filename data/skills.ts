export interface SkillCategory {
  category: string;
  skills: string[];
}

export const aiSkills: SkillCategory[] = [
  {
    category: "Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Model Training",
      "Data Preprocessing",
      "Reproducible Pipelines"
    ]
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Data-driven Analysis",
      "Statistical Evaluation",
      "Reporting",
      "Visualization"
    ]
  },
  {
    category: "Software Engineering",
    skills: [
      "Software Development",
      "Clean Code",
      "Debugging",
      "Documentation",
      "Version Control (Git)",
      "Collaboration"
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      "SQL",
      "NoSQL",
      "ETL",
      "PySpark (Familiar)"
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "C",
      "C++",
      "SQL",
      "Bash Scripting"
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure (Basic)",
      "OpenStack",
      "Docker",
      "Git",
      "Jira"
    ]
  }
];

export const itSkills: SkillCategory[] = [
  {
    category: "Operating Systems",
    skills: [
      "Linux (CLI)",
      "Windows",
      "macOS"
    ]
  },
  {
    category: "Networking",
    skills: [
      "SSH",
      "DNS Troubleshooting",
      "IP Assignment",
      "Network Connectivity"
    ]
  },
  {
    category: "Server Services",
    skills: [
      "Apache",
      "Nginx",
      "Postfix",
      "Samba",
      "NFS",
      "PowerDNS",
      "vsftpd"
    ]
  },
  {
    category: "Monitoring Tools",
    skills: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Cacti",
      "Zabbix",
      "Observium"
    ]
  },
  {
    category: "Cloud & Virtualization",
    skills: [
      "AWS",
      "Azure (Basic)",
      "OpenStack",
      "Proxmox",
      "Docker"
    ]
  },
  {
    category: "Productivity Suite",
    skills: [
      "Microsoft 365",
      "Word",
      "Excel",
      "PowerPoint",
      "Outlook",
      "Teams"
    ]
  }
];
