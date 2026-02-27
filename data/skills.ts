export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const aiSkills: SkillCategory[] = [
  {
    category: "Machine Learning",
    icon: "🤖",
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
    icon: "📊",
    skills: [
      "Data-driven Analysis",
      "Statistical Evaluation",
      "Reporting",
      "Visualization"
    ]
  },
  {
    category: "Software Engineering",
    icon: "💻",
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
    icon: "🗄️",
    skills: [
      "SQL",
      "NoSQL",
      "ETL",
      "PySpark (Familiar)"
    ]
  },
  {
    category: "Programming Languages",
    icon: "🐍",
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
    icon: "☁️",
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
    icon: "🖥️",
    skills: [
      "Linux (CLI)",
      "Windows",
      "macOS"
    ]
  },
  {
    category: "Networking",
    icon: "🌐",
    skills: [
      "SSH",
      "DNS Troubleshooting",
      "IP Assignment",
      "Network Connectivity"
    ]
  },
  {
    category: "Server Services",
    icon: "🔧",
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
    icon: "📈",
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
    icon: "⚡",
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
    icon: "📋",
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
