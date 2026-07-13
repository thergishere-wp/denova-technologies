"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";

const markers = [
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] as [number, number], phone: "+94 777 395884" },
  { name: "Bangladesh", coordinates: [90.3563, 23.685] as [number, number], phone: "+880 1817-079822" },
  { name: "Kenya", coordinates: [36.8219, -1.2921] as [number, number], phone: "" },
  { name: "New Zealand", coordinates: [174.7762, -36.8485] as [number, number], phone: "+64 27 5555880" },
];

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<{ name: string; phone: string } | null>(null);

  return (
    <div className="relative w-full bg-[#142250] overflow-hidden" style={{ paddingBottom: "45%" }}>
      <div className="absolute inset-0">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 240, center: [110, -8] }}
          width={800}
          height={360}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography="/world-110m.json">
            {({ geographies }: { geographies: { rsmKey: string }[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1B2F68"
                  stroke="#142250"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#1B2F68" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((marker, i) => (
            <Marker
              key={marker.name}
              coordinates={marker.coordinates}
              onMouseEnter={() => setTooltip({ name: marker.name, phone: marker.phone })}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Pulsing outer ring */}
              <motion.circle
                r={8}
                fill="none"
                stroke="#29B8E8"
                strokeWidth={1.5}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.5,
                }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
              {/* Inner dot */}
              <circle r={5} fill="white" />
              {/* Country label */}
              <text
                y={-12}
                textAnchor="middle"
                style={{
                  fontFamily: "monospace",
                  fontSize: "6px",
                  fill: "#29B8E8",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  pointerEvents: "none",
                }}
              >
                {marker.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip overlay */}
        {tooltip && (
          <div className="absolute top-4 left-4 bg-[#0d1a3d] border border-[#29B8E8]/50 px-4 py-3 pointer-events-none">
            <div className="text-white font-bold text-sm uppercase tracking-wide leading-none mb-1">
              {tooltip.name}
            </div>
            {tooltip.phone && (
              <div className="text-[#29B8E8] text-xs font-mono">{tooltip.phone}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
