export const projects = [
  {
    title: "NeuroGuard",
    slug: "neuroguard",
    description:
      "ML web app to predict stroke risk with 78.8% accuracy and 76.9% recall using SMOTE-enhanced Logistic Regression. Built with Flask API, Gemini 2.0, and a Vite-powered React frontend.",
    link: "https://github.com/Sabique-Islam/Neuro-Guard-Backend",
    live: "https://neuro-guard.vercel.app",
    tags: ["Python", "Flask", "scikit-learn", "React", "Gemini 2.0", "Vite"],
    imageSrc: "/projects/neuroguard.svg",
    imageAlt: "NeuroGuard Preview",
  },
  {
    title: "Activity Recommender CLI",
    slug: "arc",
    description:
      "C-based CLI tool that suggests group activities using 300D GloVe embeddings and cosine similarity. Features NLP pipeline and a minimal Next.js frontend wired to a C REST API via microhttpd and cJSON.",
    link: "https://github.com/Sabique-Islam/Activity-Recommender-CLI",
    tags: ["C", "GloVe", "NLP", "Cosine Similarity", "microhttpd", "Next.js"],
    imageSrc: "/projects/arc.svg",
    imageAlt: "ARC Preview",
  },
  {
    title: "GitHub PR Summarizer",
    slug: "pr-summarizer",
    description:
      "GitHub Action that generates context-aware PR summaries using Gemini 2.5 Flash. Parses diffs, titles, and file changes. Includes YML workflows and secure setup with GitHub Secrets.",
    link: "https://github.com/Sabique-Islam/github-pr-bot",
    tags: ["GitHub Actions", "Python", "YML", "Gemini", "CI/CD"],
    imageSrc: "/projects/prbot.svg",
    imageAlt: "PR Summarizer Preview",
  },
  {
    title: "Pixiefie",
    slug: "pixiefie",
    description:
      "Generates branded, shareable ID cards from GitHub and Reddit handles. Fetches profile pic, name, and username; embeds live QR code.",
    link: "https://github.com/Sabique-Islam/pixiefie",
    live: "https://pixiefie.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "QR Code", "GitHub", "Reddit"],
    imageSrc: "/projects/pixiefie.svg",
    imageAlt: "Pixiefie Preview",
  },
];
