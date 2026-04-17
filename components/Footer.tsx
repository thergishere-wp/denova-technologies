export default function Footer() {
  return (
    <footer
      style={{
        background: "#001030",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Left — Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: "var(--navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--blue-mid)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="8.5" x2="22" y2="8.5" />
              <line x1="2" y1="15.5" x2="22" y2="15.5" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Denova Technologies Ltd
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
              Registered in New Zealand
            </div>
          </div>
        </div>

        {/* Center — Copyright */}
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
          © 2025 Denova Technologies Ltd. All rights reserved.
        </div>

        {/* Right — Links */}
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms of Use", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Contact" ? "#contact" : "#"}
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget).style.color = "rgba(255,255,255,0.4)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
