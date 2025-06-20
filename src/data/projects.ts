import {
  FileJson,
  CheckSquare,
  Smartphone,
  BarChart,
  Play,
  CreditCard,
  Code,
  Map,
} from "lucide-react";

export type IconName =
  | "FileJson"
  | "CheckSquare"
  | "Smartphone"
  | "BarChart"
  | "Play"
  | "Code"
  | "Map"
  | "CreditCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: IconName;
  thumbnail: string;
  capture: string[];
  demoLink?: string;
  codeLink?: string;
  subtitle: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: "delta-flow",
    title: "DeltaFlow",
    description:
      "C'est est un outil web pour comparer, formater, modifier et visualiser des fichiers JSON avec une expérience fluide, pensée pour les développeurs.",
    technologies: ["Nestjs"],
    icon: "FileJson",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750359099/json_blocs_pcank0.png",
    demoLink: "https://delta-flow.netlify.app/",
    codeLink: "https://github.com/johannes60-sk/delta-flow",
    subtitle: " JSON File Management Tool",
    client: "Projet Personel",
    capture: [
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750357166/json_blocs_vbywvr.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750357179/result-vueside-by-side_shhqco.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750357175/result-vue-unified_cbupzf.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750357172/tree-view_melxzh.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750357187/stats_pxme9y.png",
    ],
  },
  {
    id: "json-file-manager",
    title: "JSON File Manager",
    description:
      "Application de gestion de fichiers JSON avec des capacités de téléchargement, suppression, modification et intégration d'un serveur FTP pour le stockage distant des fichiers.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: "FileJson",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566825/Capture_d_%C3%A9cran_2025-06-10_162716_gbl81m.png",
    demoLink: "https://stream-easy.vercel.app/",
    codeLink: "https://github.com/johannes60-sk/stream-easy/tree/dev",
    subtitle: "File Management Solution",
    client: "Bouygue Telecom",
    capture: [
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566825/Capture_d_%C3%A9cran_2025-06-10_162716_gbl81m.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566828/Capture_d_%C3%A9cran_2025-06-10_162748_bos54p.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566827/Capture_d_%C3%A9cran_2025-06-10_162806_inb4zz.png",
    ],
  },
  {
    id: "carte-interactive-stationnement",
    title: "Carte Interactive de Stationnement",
    description:
      "Intégration d'une carte interactive pour le stationnement : disponibilité des differentes type de places en temps réel.",
    technologies: ["React", "NestJS"],
    icon: "Map",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749597896/Capture_d_%C3%A9cran_2025-06-11_012435_rff1qn.png",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Team Collaboration Tool",
    client: "Macaron ai",
    capture: [],
  },
  {
    id: "react-native-app",
    title: "React Native App",
    description:
      "Application mobile de coaching sportif permettant de créer et planifier vos entraînements, avec un suivi personnalisé et des exercices guidés pour optimiser vos performances.",
    technologies: ["React Native", "Firebase", "Expo"],
    icon: "Smartphone",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749600939/52shots_so_zprfi7.png",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Mobile Application",
    client: "Projet Personel",
    capture: [
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749600939/52shots_so_zprfi7.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749601293/200shots_so_nbbtfo.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749601290/316shots_so_mugoau.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749601293/295shots_so_lyxfwj.png",
    ],
  },
  {
    id: "feed-back-hub",
    title: "FeedBackHub",
    description:
      "C'est une plateforme web moderne inspirée de Canny.io, conçue pour centraliser les retours utilisateurs, prioriser les idées, et améliorer les produits avec transparence et collaboration",
    technologies: ["Nestjs"],
    icon: "Play",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750364175/accueil_iwbl0g.png",
    demoLink: "https://feed-back-hub.netlify.app/",
    codeLink: "https://github.com/johannes60-sk/feedback-hub",
    subtitle: "Feedback Management Platform",
    client: "Projet Personel",
    capture: [
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750363290/stat-dash_uin3pc.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750363293/project_afbho1.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750363284/product-feedback2_h4aqnt.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750363293/share_eoecoj.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1750363282/share-your-udea_d9c77e.png",
    ],
  },
  {
    id: "espace-kids-application-btv",
    title: "Espace Kids Application B.tv",
    description: "Application de streaming B.tv",
    technologies: ["Reactjs", "Tizen", "Nodejs"],
    icon: "Play",
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749602464/691shots_so_yb3nml.png",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Data Analytics Platform",
    client: "Bouygue Telecom",
    capture: [
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749602291/892shots_so_b0cddu.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749602294/338shots_so_bvq8v9.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749602274/276shots_so_ho7yxo.png",
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749602304/977shots_so_pxhxz2.png",
    ],
  },
  //   {
  //     id: "streaming-platform",
  //     title: "Streaming Platform POC",
  //     description:
  //       "Kids-friendly content streaming platform with parental controls and content management.",
  //     technologies: ["React", "Node.js", "Video.js"],
  //     icon: "Play",
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //     demoLink: "#",
  //     codeLink: "#",
  //     subtitle: "Content Streaming Solution",
  //     client: "Media Entertainment Ltd",
  //     capture: [],
  //   },
  //   {
  //     id: "payment-gateway",
  //     title: "Payment Gateway",
  //     description:
  //       "Secure payment processing system with multiple payment methods and transaction management.",
  //     technologies: ["React", "Python", "Stripe"],
  //     icon: "CreditCard",
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //     demoLink: "#",
  //     codeLink: "#",
  //     subtitle: "Payment Processing System",
  //     client: "FinTech Solutions",
  //     capture: [],
  //   },
];
