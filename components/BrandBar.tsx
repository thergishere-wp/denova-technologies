import { brandNames } from "@/lib/brands";

const allBrands = [...brandNames, ...brandNames];

export default function BrandBar() {
  return (
    <div
      style={{
        height: 56,
        background: "var(--off)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          paddingLeft: "3rem",
          flexShrink: 0,
          zIndex: 2,
          background: "var(--off)",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "var(--subtle)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Authorized Distributor For
        </span>
        <div style={{ width: 1, height: 24, background: "var(--border2)" }} />
      </div>

      {/* Marquee */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <div className="marquee-track" style={{ alignItems: "center", gap: 0 }}>
          {allBrands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text2)",
                  padding: "0 28px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                {brand}
              </span>
              <div style={{ width: 1, height: 14, background: "var(--border2)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
