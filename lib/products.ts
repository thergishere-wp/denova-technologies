export type ProductCategory =
  | "software"
  | "cutting"
  | "spreading"
  | "inspection"
  | "smart-factory"
  | "services";

export interface Product {
  id: string;
  name: string;
  brand: string;
  origin: string;
  category: ProductCategory;
  description: string;
  specs: string[];
  image: string;
}

export const products: Product[] = [
  // SOFTWARE
  {
    id: "stylecad-pattern-design",
    name: "StyleCAD Pattern Design System",
    brand: "StyleCAD",
    origin: "USA",
    category: "software",
    description:
      "Full-featured CAD platform for pattern making, grading, marker planning and nesting. Industry-standard toolset trusted by apparel manufacturers worldwide.",
    specs: [
      "Parametric pattern making",
      "Automatic grading across size ranges",
      "Optimised marker planning",
      "DXF/AAMA/ASTM import-export",
      "Multi-user licence support",
    ],
    image: "/images/products/product-stylecad-ui.jpg",
  },
  {
    id: "stylecad-3d-sampling",
    name: "StyleCAD 3D Virtual Sampling",
    brand: "StyleCAD",
    origin: "USA",
    category: "software",
    description:
      "Real-time 3D garment simulation linked directly to 2D pattern pieces. Dramatically reduce physical sample rounds and accelerate time-to-market.",
    specs: [
      "Real-time fabric simulation",
      "Fabric physics library",
      "Colorway & trim visualisation",
      "Direct export to buyer review",
      "Integrated with Pattern Design System",
    ],
    image: "/images/products/product-stylecad-ui.jpg",
  },
  {
    id: "stylecad-cut-order",
    name: "StyleCAD Cut Order Planning",
    brand: "StyleCAD",
    origin: "USA",
    category: "software",
    description:
      "Automated cut plan optimisation that minimises fabric waste and balances production orders. Connects directly to the cutting room for seamless execution.",
    specs: [
      "Automatic lay plan calculation",
      "Fabric utilisation reporting",
      "Multi-order consolidation",
      "Integration with ERP systems",
      "Real-time waste analytics",
    ],
    image: "/images/products/product-stylecad-ui.jpg",
  },
  // CUTTING
  {
    id: "cnc-multiply-cutter",
    name: "Automatic Multi-Ply Fabric Cutter",
    brand: "Eastman",
    origin: "USA",
    category: "cutting",
    description:
      "High-speed CNC cutting system for multi-ply spreads. Handles all fabric types including stretch, technical, denim and woven with precision and speed.",
    specs: [
      "CNC controlled cutting head",
      "Up to 180mm cutting height",
      "Conveyor belt material feed",
      "Automatic sharpening system",
      "CAD system integration",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  {
    id: "single-ply-cutter",
    name: "Single Ply Precision Cutter",
    brand: "Bullmer",
    origin: "Germany",
    category: "cutting",
    description:
      "High-accuracy single-ply cutting optimised for small batches, sampling, and premium fabric handling where multi-ply cutting is unsuitable.",
    specs: [
      "Single-ply cutting precision",
      "Vacuum hold-down system",
      "Touch-screen controls",
      "Automatic blade pressure adjustment",
      "Compact footprint",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  {
    id: "straight-knife-cutter",
    name: "Industrial Straight Knife Cutting Machine",
    brand: "Eastman",
    origin: "USA",
    category: "cutting",
    description:
      "Robust industrial straight knife for versatile cutting across fabric types. Reliable workhorse for standard production cutting requirements.",
    specs: [
      "Variable speed motor",
      "Ergonomic handle design",
      "Self-sharpening blade",
      "Base plate guide system",
      "All fabric types",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  // SPREADING
  {
    id: "auto-spreader",
    name: "Automatic Fabric Spreader",
    brand: "Bianco",
    origin: "Italy",
    category: "spreading",
    description:
      "Tension-free automatic spreading system for woven and knit fabrics up to 72 inches wide. Precision end-alignment and programmable lay length.",
    specs: [
      "Up to 72\" fabric width",
      "Tension-free spreading",
      "Automatic end-alignment",
      "Programmable lay lengths",
      "Edge sensor guidance",
    ],
    image: "/images/products/product-spreader.jpg",
  },
  {
    id: "semi-auto-spreader",
    name: "Semi-Automatic Fabric Spreader",
    brand: "Airo",
    origin: "Italy",
    category: "spreading",
    description:
      "Mid-range semi-automatic spreader with motorised carriage and manual roll loading. Compact design suited to medium-volume factory floors.",
    specs: [
      "Motorised carriage drive",
      "Up to 64\" fabric width",
      "Manual roll loading",
      "Digital lay counter",
      "Compact footprint",
    ],
    image: "/images/products/product-spreader.jpg",
  },
  {
    id: "manual-spreader",
    name: "Manual Spreading Assist System",
    brand: "Bianco",
    origin: "Italy",
    category: "spreading",
    description:
      "Entry-level operator-guided spreading system with roll holder and edge guide for consistent manual laying in smaller production environments.",
    specs: [
      "Adjustable roll holder",
      "Edge guide rails",
      "Fabric tension brake",
      "All fabric types",
      "Low maintenance",
    ],
    image: "/images/products/product-spreader.jpg",
  },
  // INSPECTION
  {
    id: "fabric-inspection-machine",
    name: "Fabric Inspection Machine",
    brand: "Mahlo",
    origin: "Germany",
    category: "inspection",
    description:
      "Comprehensive defect detection, roll tracking and length measurement system. Integrates with fabric management software for full traceability.",
    specs: [
      "Defect detection & marking",
      "Accurate length measurement",
      "Roll-to-roll tracking",
      "Inspection report generation",
      "Up to 80m/min",
    ],
    image: "/images/products/product-inspection.jpg",
  },
  {
    id: "a-frame-inspection",
    name: "A-Frame Fabric Inspection Stand",
    brand: "Mahlo",
    origin: "Germany",
    category: "inspection",
    description:
      "Manual compact inspection stand for smaller mills and sampling rooms. Inclined viewing surface with backlight for accurate defect identification.",
    specs: [
      "Inclined backlit viewing surface",
      "Adjustable roll supports",
      "Compact footprint",
      "Manual yardage counter",
      "Quick-change roll holders",
    ],
    image: "/images/products/product-inspection.jpg",
  },
  {
    id: "roll-to-roll-inspector",
    name: "Automatic Roll-to-Roll Inspector",
    brand: "Mahlo",
    origin: "Germany",
    category: "inspection",
    description:
      "High-speed automated inspection with integrated sensor array for stretch, woven and technical fabrics. Full data capture for quality management systems.",
    specs: [
      "Integrated sensor array",
      "Up to 120m/min inspection",
      "Automatic defect categorisation",
      "QMS data integration",
      "Roll weight & length logging",
    ],
    image: "/images/products/product-inspection.jpg",
  },
  // SMART FACTORY
  {
    id: "smart-warehouse",
    name: "Smart Warehouse Management System",
    brand: "MU Technology",
    origin: "China",
    category: "smart-factory",
    description:
      "RFID-enabled bin tracking and automated dispatch system for fabric warehouses. Real-time inventory visibility and seamless ERP integration.",
    specs: [
      "RFID bin tracking",
      "Real-time stock visibility",
      "Automated dispatch scheduling",
      "ERP system integration",
      "Mobile operator interface",
    ],
    image: "/images/products/product-smart-factory.jpg",
  },
  {
    id: "intelligent-packing",
    name: "Intelligent Packing Line",
    brand: "MU Technology",
    origin: "China",
    category: "smart-factory",
    description:
      "Automated garment folding, tagging and carton packing system. Consistent packaging quality at high throughput with minimal operator intervention.",
    specs: [
      "Automated folding & stacking",
      "Integrated label applicator",
      "Carton packing module",
      "Throughput: 1,200 pcs/hr",
      "Size changeover < 5 min",
    ],
    image: "/images/products/product-smart-factory.jpg",
  },
  {
    id: "sewing-floor-management",
    name: "Sewing Floor Management System",
    brand: "MU Technology",
    origin: "China",
    category: "smart-factory",
    description:
      "WIP tracking, line balancing dashboard and production efficiency analytics for the sewing floor. Identify bottlenecks and drive continuous improvement.",
    specs: [
      "Real-time WIP tracking",
      "Line balancing dashboard",
      "Operator performance metrics",
      "Production efficiency reports",
      "Tablet-based workstation units",
    ],
    image: "/images/products/product-smart-factory.jpg",
  },
  // SERVICES
  {
    id: "aftersales-maintenance",
    name: "After-Sales Maintenance Contracts",
    brand: "Denova Technologies",
    origin: "Sri Lanka / Bangladesh",
    category: "services",
    description:
      "Comprehensive maintenance contracts covering all brands we supply. Fast-response service, scheduled preventive maintenance, and genuine spare parts.",
    specs: [
      "All supplied brands covered",
      "Fast-response call-out",
      "Preventive maintenance schedule",
      "Genuine spare parts supply",
      "Remote diagnostic support",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  {
    id: "installation-calibration",
    name: "Machine Installation & Calibration",
    brand: "Denova Technologies",
    origin: "Sri Lanka / Bangladesh",
    category: "services",
    description:
      "Factory-certified installation and precision calibration for all machinery. Ensures optimal performance from day one and protects your warranty.",
    specs: [
      "Factory-certified technicians",
      "Site preparation advisory",
      "Full machine calibration",
      "Performance sign-off tests",
      "Warranty activation",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  {
    id: "operator-training",
    name: "Operator Training Programs",
    brand: "Denova Technologies",
    origin: "Sri Lanka / Bangladesh",
    category: "services",
    description:
      "Hands-on operator and supervisor training included with every machine purchase. Also available as standalone programs for existing equipment.",
    specs: [
      "Hands-on machine training",
      "Supervisor certification",
      "Customised training plans",
      "On-site & remote options",
      "Included with purchase",
    ],
    image: "/images/products/product-cnc-cutter.jpg",
  },
  {
    id: "manufacturing-consulting",
    name: "Manufacturing Consulting",
    brand: "Denova Technologies",
    origin: "Sri Lanka / Bangladesh",
    category: "services",
    description:
      "Factory appraisals, efficiency audits and technology roadmap planning. Independent advice backed by 25 years of hands-on industry experience.",
    specs: [
      "Factory efficiency audits",
      "Technology roadmap planning",
      "ROI & payback analysis",
      "Machinery appraisals",
      "Process optimisation",
    ],
    image: "/images/about/about-factory-operations.jpg",
  },
  {
    id: "plm-erp-development",
    name: "PLM & ERP Development",
    brand: "Denova Technologies",
    origin: "Sri Lanka / Bangladesh",
    category: "services",
    description:
      "Custom native PLM and ERP system development tailored to apparel manufacturing workflows. Seamless integration with machinery and third-party platforms.",
    specs: [
      "Custom PLM development",
      "ERP system integration",
      "Apparel workflow-specific",
      "API-first architecture",
      "Ongoing support & updates",
    ],
    image: "/images/about/about-factory-operations.jpg",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  software: "Software",
  cutting: "Cutting",
  spreading: "Spreading",
  inspection: "Inspection",
  "smart-factory": "Smart Factory",
  services: "Services",
};
