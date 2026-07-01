export interface Product {
  name: string;
  type: "software" | "hardware";
}

export interface ProductGroup {
  title: string;
  items: string[];
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
  productGroups?: ProductGroup[];
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
    category: "CAD Solutions",
    description:
      "Founded in Taiwan in 1982, DOCAD has over four decades of experience in developing CAD/CAM solutions for the apparel industry. Its integrated software and hardware solutions help manufacturers improve accuracy, optimize fabric utilization, and streamline production workflows.",
    softwareProducts: [
      "Pattern Creation",
      "Marker Making",
      "Auto-Marker",
    ],
    hardwareProducts: ["Inkjet Plotter", "Digitizer", "Pattern Cutter"],
    benefits: [
      "Fast Pattern Development",
      "Accurate Pattern Creation",
      "Integrated Hardware Support",
      "Complete CAD/CAM Workflow",
    ],
    accentColor: "#29B8E8",
  },
  {
    id: "ozer-makina",
    number: "02",
    name: "ÖZER MAKİNA",
    country: "Turkey",
    founded: 1984,
    category: "Spreading System",
    description:
      "Founded in 1984, Özer Makina is a Turkish manufacturer of apparel machinery specializing in fabric spreading, fabric inspection, and fabric relaxing machines. The company provides reliable and efficient solutions designed to improve productivity, fabric quality, and production efficiency in garment manufacturing.",
    softwareProducts: [],
    hardwareProducts: [
      "Automatic Spreading Machine",
      "Air Floatation Spreading Tables",
      "Conveyorize Spreading Table",
      "Fabric Loaders",
    ],
    benefits: [
      "Uniform fabric spreading",
      "Prevents fabric distortion",
      "Improves cutting accuracy",
      "Handles delicate fabrics",
    ],
    accentColor: "#1E6CC8",
  },
  {
    id: "jingwei",
    number: "03",
    name: "JINGWEI / JWEI",
    country: "China",
    founded: 1993,
    category: "Sample/Pattern Cutters & Multilayer Cutting System",
    description:
      "Founded in 1993, JWEI is a leading manufacturer of intelligent digital cutting solutions for the apparel industry. With over 30 years of experience, the company provides high-precision fabric cutting systems that improve production efficiency, accuracy, and automation. JWEI serves customers in more than 120 countries and regions.",
    softwareProducts: [],
    hardwareProducts: [],
    productGroups: [
      {
        title: "Sample/Pattern Cutters",
        items: ["Pattern Cutter", "Template Cutter", "Sample Fabric Cutter"],
      },
      {
        title: "Multilayer Cutting System",
        items: ["Low Ply Cutting", "High Ply Cutting"],
      },
    ],
    benefits: [
      "Precise cutting",
      "Less fabric waste",
      "Faster production",
      "Lower labor costs",
    ],
    accentColor: "#1E6CC8",
  },
  {
    id: "ctex",
    number: "04",
    name: "C-TEX",
    country: "UK",
    category: "Fabric Relaxing and Inspection",
    description:
      "Since the first installation of C-TEX products over 20 years ago, they have enjoyed developing their products, nurturing them and working with the customers. This approach and attitude has created one of the most trusted brands in apparel, with over 1000 installations worldwide. C-TEX is proudly manufactured in the United Kingdom.",
    softwareProducts: ["C-TEX Color", "C-TEX Master"],
    hardwareProducts: [
      "Fabric Inspection Machine",
      "Fabric Relaxing Machine",
    ],
    benefits: [
      "Reliable Fabric Inspection",
      "Improved Fabric Quality",
      "Increased Production Efficiency",
      "Trusted by 1000+ installations",
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
      "Founded in 2009, MU Big Data is a leading provider of intelligent garment manufacturing solutions. The company specializes in ERP, MES, SCM, APS, and digital production systems that help apparel manufacturers improve efficiency, automation, and production management. With 300+ customers in 6+ countries and over 15 years of experience, MU supports smarter and more flexible apparel manufacturing.",
    softwareProducts: ["MU-GST", "MU-MES", "U-PAD"],
    hardwareProducts: [],
    benefits: [
      "Improved Productivity",
      "Factory Visibility",
      "Optimized Production",
      "Faster Decision Making",
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
