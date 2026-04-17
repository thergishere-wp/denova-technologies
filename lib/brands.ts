export interface Brand {
  name: string;
  category: string;
  origin: string;
}

export const brands: Brand[] = [
  { name: "StyleCAD", category: "CAD Software", origin: "USA" },
  { name: "MU Technology", category: "Smart Factory", origin: "China" },
  { name: "Eastman", category: "Cutting Systems", origin: "USA" },
  { name: "Gerber", category: "Cutting & CAD", origin: "USA" },
  { name: "Investronica", category: "Cutting & CAD", origin: "Spain" },
  { name: "Oshima", category: "Fusing & Pressing", origin: "Japan" },
  { name: "Bianco", category: "Spreading", origin: "Italy" },
  { name: "Lectra", category: "Cutting & CAD", origin: "France" },
  { name: "Airo", category: "Spreading", origin: "Italy" },
  { name: "Bullmer", category: "Cutting Systems", origin: "Germany" },
];

export const brandNames = brands.map((b) => b.name);
