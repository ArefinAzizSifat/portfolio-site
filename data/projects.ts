export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "seaworld-rl",
    title: "SeaWorld: Reinforcement Learning Environment",
    description: "Custom 5×5 RL environment with hazards and goal-driven rewards for training Q-learning and DQN agents.",
    longDescription: `Built SeaWorld, a custom 5×5 reinforcement-learning environment (gym-style) with hazards and goal-driven rewards. Trained Q-learning and DQN agents to convergence, achieving stable policy performance. The project demonstrates deep understanding of RL fundamentals and practical implementation skills.`,
    tech: ["Python", "OpenAI Gym", "Q-Learning", "DQN", "NumPy", "Matplotlib"],
    category: "Machine Learning",
    image: "/projects/seaworld-rl.jpg",
    featured: true,
    metrics: [
      "Average episode reward: ~30 (stable policy)",
      "Validated with Q-value heatmaps and reward curves",
      "Confirmed consistent optimal action selection"
    ]
  },
  {
    id: "metal-casting-defect",
    title: "Metal Casting Defect Detection",
    description: "End-to-end CNN pipeline for industrial defect detection with 92.91% validation accuracy.",
    longDescription: `Developed a comprehensive CNN pipeline for metal casting defect detection including preprocessing, training, and evaluation. Achieved strong performance metrics and created reproducible workflows for deployment. The system demonstrates practical application of deep learning in industrial quality control.`,
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Data Preprocessing", "Computer Vision"],
    category: "Computer Vision",
    image: "/projects/metal-casting.jpg",
    featured: true,
    metrics: [
      "92.91% validation accuracy",
      "F1 Score: 0.94 (ok_front), 0.92 (def_front)",
      "Overall F1: 0.93",
      "Validated with confusion matrix and classification metrics"
    ]
  },
  {
    id: "directionnet-uav",
    title: "DirectionNet: UAV Localization",
    description: "Transformer-based UAV localization model with improved training stability and performance.",
    longDescription: `As a Student Research Assistant at AImotion Bavaria, upgraded and maintained the Python codebase for DirectionNet, a transformer-based UAV localization system. Improved training stability, reduced loss significantly, and enhanced model performance across multiple datasets.`,
    tech: ["Python", "PyTorch", "Transformers", "Computer Vision", "Linux", "macOS"],
    category: "Research",
    image: "/projects/directionnet-uav.jpg",
    featured: true,
    metrics: [
      "Reduced training loss by >98%",
      "Improved rotation error by ~21-24%",
      "Deployed across multiple datasets",
      "Ensured reproducible preprocessing and data handling"
    ]
  }
];
