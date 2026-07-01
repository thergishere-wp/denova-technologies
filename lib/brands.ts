export interface Product {
  name: string;
  type: "software" | "hardware";
}

export interface Brand {
  id: string;
  number: string;
  name: string;
  country?: string;
  founded?: number;
  description: string;
  category: string;
  softwareProducts: string[];
  hardwareProducts: string[];
  benefits: string[];
  accentColor: string;
}

export const brands: Brand[] = [
  {
    id: "docad",
    number: "01",
    name: "DOCAD",
    country: "Taiwan",
    founded: 1982,
    category: "CAD & Pattern Making Software",
    description:
      "DOCAD is a world-leading CAD/CAM software provider for the apparel industry, delivering precision pattern creation and marker optimization tools used by manufacturers globally.",
    softwareProducts: [
      "Pattern Creation",
      "Marker Making",
      "Auto-Marker Optimization",
      "Grading System",
    ],
    hardwareProducts: ["Inkjet Plotter", "Digitizer", "Pattern Cutter"],
    benefits: [
      "Reduces fabric waste by up to 15%",
      "Faster time-to-sample",
      "Industry-standard file compatibility",
      "Full after-sales training",
    ],
    accentColor: "#29B8E8",
  },
  {
    id: "ozer-makina",
    number: "02",
    name: "ÖZER MAKİNA",
    country: "Turkey",
    founded: 1984,
    category: "Automatic Spreading & Cutting Systems",
    description:
      "Özer Makina manufactures high-precision automatic fabric spreading and cutting systems engineered for high-throughput apparel production environments.",
    softwareProducts: [],
    hardwareProducts: [
      "Automatic Spreading Machine",
      "Air Floatation Tables",
      "Conveyorized Table",
      "Fabric Loaders",
    ],
    benefits: [
      "Reduces spreading labor by 60%",
      "Handles all fabric types",
      "Robust Turkish engineering",
      "CE certified",
    ],
    accentColor: "#1E6CC8",
  },
  {
    id: "jingwei",
    number: "03",
    name: "JINGWEI / JWEI",
    country: "China",
    founded: 1993,
    category: "Automatic Spreading & Cutting Systems",
    description:
      "JWEI is a leading manufacturer of precision automated cutting systems, delivering high-speed, high-accuracy solutions for fabric and flexible materials processing.",
    softwareProducts: [],
    hardwareProducts: ["Pattern Cutter", "Template Cutter", "Knife Cutter"],
    benefits: [
      "Sub-millimeter cutting accuracy",
      "High-speed production output",
      "Low material waste",
      "Easy maintenance design",
    ],
    accentColor: "#1E6CC8",
  },
  {
    id: "ctex",
    number: "04",
    name: "C-TEX",
    category: "Smart Factory Solutions",
    description:
      "C-TEX delivers advanced fabric inspection and relaxing machines that integrate seamlessly with smart factory systems, ensuring quality at every stage of production.",
    softwareProducts: ["C-TEX Color", "C-TEX Master"],
    hardwareProducts: [
      "Fabric Inspection Machine",
      "Fabric Relaxing Machine",
    ],
    benefits: [
      "100% automated fabric inspection",
      "Defect detection at production speed",
      "Data export for ERP integration",
      "Reduces QC labor cost",
    ],
    accentColor: "#29B8E8",
  },
  {
    id: "mu-bigdata",
    number: "05",
    name: "MU BIG DATA",
    country: "China",
    founded: 2009,
    category: "Industrial Engineering Software",
    description:
      "MU Big Data develops intelligent industrial engineering and manufacturing execution system software, providing real-time analytics and smart factory digitalization.",
    softwareProducts: ["MU-GST (IE Software)", "MU-MES (Factory MES)", "U-PAD (Shop Floor Tablet)"],
    hardwareProducts: [],
    benefits: [
      "Real-time production visibility",
      "Line balancing optimization",
      "Mobile-first shop floor UI",
      "Integrates with existing ERP",
    ],
    accentColor: "#29B8E8",
  },
];

export const solutionProductMap: Record<string, string[]> = {
  "cad-pattern": ["docad"],
  "spreading-cutting": ["ozer-makina", "jingwei"],
  "industrial-engineering": ["mu-bigdata"],
  "smart-factory": ["mu-bigdata", "ctex"],
};

export const solutions = [
  {
    id: "cad-pattern",
    title: "CAD & Pattern Making Software",
    description: "Precision pattern creation, grading, and marker optimization",
    icon: "cad",
    brandIds: ["docad"],
  },
  {
    id: "spreading-cutting",
    title: "Automatic Spreading & Cutting Systems",
    description: "High-throughput automated spreading and precision cutting",
    icon: "cut",
    brandIds: ["ozer-makina", "jingwei"],
  },
  {
    id: "industrial-engineering",
    title: "Industrial Engineering Software",
    description: "IE analytics, line balancing, and production optimization",
    icon: "engineering",
    brandIds: ["mu-bigdata"],
  },
  {
    id: "smart-factory",
    title: "Smart Factory Solutions",
    description: "MES, fabric inspection, and full factory digitalization",
    icon: "factory",
    brandIds: ["mu-bigdata", "ctex"],
  },
];
