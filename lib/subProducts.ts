// Sub-product data for /products/[brand] pages.
// Descriptions and specs are sourced from denova-product-research.md
// (verified against each brand's official manufacturer site).
// Items flagged with TODO comments are NOT verified — keep their copy
// brochure-level until confirmed. Do not add specs to them.

export interface SubProductSpec {
  label: string;
  value: string;
}

export interface SubProduct {
  name: string;
  slug: string;
  /** Image path — client will supply real photos at this exact path. */
  image: string;
  description: string;
  specs?: SubProductSpec[];
}

export interface SubProductGroup {
  title: string;
  items: SubProduct[];
}

export const subProducts: Record<string, SubProductGroup[]> = {
  docad: [
    {
      title: "Software Solutions",
      items: [
        {
          name: "Pattern Creation",
          slug: "pattern-creation",
          image: "/products/docad/pattern-creation.jpg",
          description:
            "Rapid, accurate direct pattern creation from size-spec measurements, with exclusive NUMBER (tall/short) and SHAPE (fat/thin) sizing functions. Over 800 pattern functions cover darts, pleats, and connect/trim automation, plus unlimited multi-stage automatic grading that runs 3x faster than standard. Supports AAMA, TIIP, HPGL and other industry data formats.",
          specs: [
            { label: "Functions", value: "800+" },
            { label: "Auto-Grading", value: "3x Faster" },
            { label: "Formats", value: "AAMA · TIIP · HPGL" },
          ],
        },
        {
          name: "Marker Making",
          slug: "marker-making",
          image: "/products/docad/marker-making.jpg",
          description:
            "Combines manual and computer-assisted marker layout with accurate fabric grain alignment and a quick-slide fabric-saving function. Fabric consumption and remaining patterns display in real time, with shrink compensation and pattern overlap control. Supports lattice/plaid matching, DXF import/export, and connects to major automatic cutting brands.",
          specs: [
            { label: "Consumption", value: "Real-Time Display" },
            { label: "Plaid Matching", value: "Lattice / Plaid" },
            { label: "Exchange", value: "DXF In / Out" },
          ],
        },
        {
          name: "Auto-Marker",
          slug: "auto-marker",
          image: "/products/docad/auto-marker.jpg",
          description:
            "Intelligent AutoMarker & Code Plan System — set the fabric width and assortment count and the system runs hundreds of layout combinations automatically. Delivers markers 10–20x faster than manual layout while cutting fabric loss and cost by up to 8%.",
          specs: [
            { label: "Speed", value: "10–20x Faster" },
            { label: "Fabric Savings", value: "Up to 8%" },
          ],
        },
      ],
    },
    {
      title: "Hardware Solutions",
      items: [
        {
          name: "Inkjet Plotter",
          slug: "inkjet-plotter",
          image: "/products/docad/inkjet-plotter.jpg",
          description:
            "DOCAD Series Apparel CAD Vector Inkjet Plotter, offered in the IOLINE FJ8-H/FJEX (USA) and POPJET1600/1800 (China) lines. Plots at widths up to 2.2m with ±0.002mm accuracy, engineered for 24-hour continuous operation.",
          specs: [
            { label: "Plotting Width", value: "Up to 2.2m" },
            { label: "Accuracy", value: "±0.002mm" },
            { label: "Operation", value: "24hr Continuous" },
          ],
        },
        {
          name: "Digitizer",
          slug: "digitizer",
          image: "/products/docad/digitizer.jpg",
          description:
            "DOCAD digital digitizing tablet, available as models HIPO3648 and HIPO4460 in A0/A00 large formats. Reads at 100–12,800 line resolution and 10–200 pairs per second, outputting to 31 industry-standard formats.",
          specs: [
            { label: "Format", value: "A0 / A00" },
            { label: "Resolution", value: "100–12,800 Lines" },
            { label: "Output", value: "31 Formats" },
          ],
        },
        // TODO(Dinesh): Confirm the exact DOCAD cutting plotter model before
        // launch — DOCAD's site groups this under "Cutting Plotter"
        // (hardware_3.htm). Description below is brochure-level only; do NOT
        // present specs as verified fact until confirmed.
        {
          name: "Pattern Cutter",
          slug: "pattern-cutter",
          image: "/products/docad/pattern-cutter.jpg",
          description:
            "Precision cutting plotter hardware that completes DOCAD's integrated CAD/CAM workflow, cutting finished patterns directly from the software suite.",
        },
      ],
    },
  ],

  "ozer-makina": [
    {
      title: "Spreading Machinery",
      items: [
        {
          name: "Automatic Spreading Machine",
          slug: "automatic-spreading-machine",
          image: "/products/ozer-makina/automatic-spreading-machine.jpg",
          description:
            "Servo-motor driven, PLC full-automatic spreading machine for low-density fabrics with Direct Drive single-point control. Spreads tension-free using a fabric reference photocell, with edge control at variable speeds, auto-stop security sensors, and roll-out detection — all managed from a touch screen in Turkish or English.",
          specs: [
            { label: "Max Roll Weight", value: "200kg" },
            { label: "Max Speed", value: "120m/min" },
            { label: "Spreading Height", value: "26cm" },
          ],
        },
        // TODO(Shivanthi/Raveen): Confirm the exact Özer model and spec sheet
        // for Air Floatation Spreading Tables before publishing — no
        // Özer-specific specs were found in research. Brochure copy only.
        {
          name: "Air Floatation Spreading Tables",
          slug: "air-floatation-spreading-tables",
          image: "/products/ozer-makina/air-floatation-spreading-tables.jpg",
          description:
            "Air floatation tables that let heavy fabric layers glide into position for uniform spreading, preventing distortion during handling.",
        },
        // TODO(Shivanthi/Raveen): Confirm the exact Özer model and spec sheet
        // for the Conveyorized Spreading Table before publishing. Brochure
        // copy only.
        {
          name: "Conveyorized Spreading Table",
          slug: "conveyorized-spreading-table",
          image: "/products/ozer-makina/conveyorized-spreading-table.jpg",
          description:
            "Conveyor-driven spreading table that carries fabric along the lay automatically, supporting consistent, distortion-free spreading.",
        },
        // TODO(Shivanthi/Raveen): Confirm the exact Özer model and spec sheet
        // for Fabric Loaders before publishing. Brochure copy only.
        {
          name: "Fabric Loaders",
          slug: "fabric-loaders",
          image: "/products/ozer-makina/fabric-loaders.jpg",
          description:
            "Loading systems that lift and position heavy fabric rolls onto spreading machines safely, reducing manual handling in the cutting room.",
        },
      ],
    },
  ],

  jingwei: [
    {
      title: "Sample/Pattern Cutters",
      items: [
        {
          name: "Pattern Cutter",
          slug: "pattern-cutter",
          image: "/products/jingwei/pattern-cutter.jpg",
          description:
            "JWEI's IG Digital Cutter (e.g. model LST03II-0912-RM) — a die-free digital cutting solution for pattern production. Fully automatic feeding, cutting, and collecting keep sample rooms running without manual intervention.",
          specs: [
            { label: "Series", value: "IG Digital Cutter" },
            { label: "Workflow", value: "Auto Feed · Cut · Collect" },
            { label: "Tooling", value: "Die-Free" },
          ],
        },
        {
          name: "Template Cutter",
          slug: "template-cutter",
          image: "/products/jingwei/template-cutter.jpg",
          description:
            "JWEI's IR Template Cutting Machine, available as the RC03II-1509 high-speed router or the RC03III-1512 with multiple router diameters. Purpose-built for producing sewing templates quickly and precisely.",
          specs: [
            { label: "Series", value: "IR Template Cutter" },
            { label: "Models", value: "RC03II-1509 · RC03III-1512" },
          ],
        },
        {
          name: "Sample Fabric Cutter",
          slug: "sample-fabric-cutter",
          image: "/products/jingwei/sample-fabric-cutter.jpg",
          description:
            "JWEI's IE Paper Cutting Machine (e.g. model EDO-1862-A) for fast, accurate sample and pattern paper cutting — the workhorse of a busy sample room.",
          specs: [
            { label: "Series", value: "IE Paper Cutter" },
            { label: "Model", value: "EDO-1862-A" },
          ],
        },
      ],
    },
    {
      title: "Multilayer Cutting System",
      items: [
        {
          name: "Low Ply Cutting",
          slug: "low-ply-cutting",
          image: "/products/jingwei/low-ply-cutting.jpg",
          description:
            "Powered by JWEI's MI60 Multi-Layer Cutting System with True On-the-Fly Cutting technology running at up to 100m/min. AI vision positioning and zero-gap cutting save 5% material, while the German Beckhoff AX5206 servo system holds 0.01mm control accuracy. Cuts knits, denim, wovens, automotive composite PVC, synthetic leather, and polyester.",
          specs: [
            { label: "Max Speed", value: "100m/min" },
            { label: "Control Accuracy", value: "0.01mm" },
            { label: "Interlayer Tolerance", value: "≤1mm" },
            { label: "Material Savings", value: "5%" },
          ],
        },
        {
          name: "High Ply Cutting",
          slug: "high-ply-cutting",
          image: "/products/jingwei/high-ply-cutting.jpg",
          description:
            "The MI60 platform configured for high-ply work, cutting stacks up to 60mm high across an effective 1.8m x 2.0m cutting window. The same Beckhoff-driven 0.01mm control accuracy and ≤1mm interlayer tolerance apply at full 100m/min running speed — the strongest throughput-to-precision ratio in its class.",
          specs: [
            { label: "Cutting Height", value: "60mm" },
            { label: "Max Speed", value: "100m/min" },
            { label: "Cutting Window", value: "1.8m × 2.0m" },
            { label: "Interlayer Tolerance", value: "≤1mm" },
          ],
        },
      ],
    },
  ],

  ctex: [
    {
      title: "Hardware Solutions",
      items: [
        {
          name: "Fabric Inspection Machine",
          slug: "fabric-inspection-machine",
          image: "/products/ctex/fabric-inspection-machine.jpg",
          description:
            "Handles everything from tension-sensitive elastomeric and Lycra fabrics through to stable cottons, with tensionless input via roll bar feed or twin unwind. A calibrated measuring wheel verifies NET roll length while continuous width measurement records USABLE width — objective data for appraising suppliers and improving material utilization.",
          specs: [
            { label: "Length", value: "Calibrated NET" },
            { label: "Width", value: "Continuous Usable" },
            { label: "Input", value: "Tensionless" },
          ],
        },
        {
          name: "Fabric Relaxing Machine",
          slug: "fabric-relaxing-machine",
          image: "/products/ctex/fabric-relaxing-machine.jpg",
          description:
            "The C-TEX RM eliminates tension issues in elastomeric and Lycra fabrics through 2-stage relaxation: last-loop plus air floatation. Its roll-to-roll process feeds directly into automated spreading machines, with edge control, automatic width monitoring 20 times per second, and automated data collection for cutting room planning.",
          specs: [
            { label: "Relaxation", value: "2-Stage" },
            { label: "Width Monitoring", value: "20x / Second" },
            { label: "Feed", value: "Roll-to-Roll" },
          ],
        },
      ],
    },
    {
      title: "Software & Retrofit Systems",
      items: [
        {
          name: "C-TEX Color",
          slug: "ctex-color",
          image: "/products/ctex/ctex-color.jpg",
          description:
            "Online colour monitoring that retrofits onto existing inspection and relaxing machines, dye ranges, stenters, and compactors. Monitors colour deviation along the roll length and at 3+ points across the width, with automatic pass/fail reporting against colour-match standards — eliminating manual swatching and reducing second-quality output.",
          specs: [
            { label: "Width Points", value: "3+" },
            { label: "Reporting", value: "Auto Pass/Fail" },
            { label: "Install", value: "Retrofittable" },
          ],
        },
        {
          name: "C-TEX Master",
          slug: "ctex-master",
          image: "/products/ctex/ctex-master.jpg",
          description:
            "A retrofit kit that adds full C-TEX length and width measurement plus the complete software suite to ANY existing inspection frame — not just C-TEX hardware. Factories gain C-TEX data capability without replacing their current inspection equipment.",
          specs: [
            { label: "Compatibility", value: "Any Inspection Frame" },
            { label: "Includes", value: "Measurement + Software" },
          ],
        },
      ],
    },
  ],

  "mu-bigdata": [
    {
      title: "Software Solutions",
      items: [
        {
          name: "MU-GST",
          slug: "mu-gst",
          image: "/products/mu-bigdata/mu-gst.jpg",
          description:
            "Standard Time System favoured by large-scale manufacturers, with 16 core functions that auto-generate standard operations from process analysis. Handles automatic order costing and quoting, APS auto production scheduling, and automatic payroll calculation, with multi-language and multi-factory support.",
          specs: [
            { label: "Core Functions", value: "16" },
            { label: "Costing & Quoting", value: "Automatic" },
            { label: "Scheduling", value: "APS Auto" },
          ],
        },
        {
          name: "MU-MES",
          slug: "mu-mes",
          image: "/products/mu-bigdata/mu-mes.jpg",
          description:
            "Manufacturing Execution System covering the full shop floor — cutting room, sewing lines, and QC — with real-time data capture via cameras, barcode scanners, and RFID. Tablet-based quality terminals visualize quality data live, while multi-factory coordination extends to outsourced facilities and mixed bulk + small-batch production on the same line.",
          specs: [
            { label: "Data Capture", value: "Camera · Barcode · RFID" },
            { label: "Quality", value: "Tablet Terminals" },
            { label: "Scope", value: "Multi-Factory" },
          ],
        },
        // TODO(Shivanthi): Confirm the exact tablet hardware SKU behind U-PAD
        // before publishing — not a separately-named product on MU's official
        // site; likely a DeNova-assigned code for the MES tablet terminal.
        // Brochure copy only.
        {
          name: "U-PAD",
          slug: "u-pad",
          image: "/products/mu-bigdata/u-pad.jpg",
          description:
            "Tablet-based shop floor terminal used with MU-MES for real-time quality data capture and visualization on the factory floor.",
        },
      ],
    },
  ],
};
