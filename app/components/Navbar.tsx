export default function Navbar() {
  return (
    <nav
      style={{ background: "var(--color-dark)" }}
      className="px-10 py-4 flex items-center justify-between"
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F2EFE8",
          fontSize: "20px",
          fontWeight: 300,
          letterSpacing: "0.05em",
        }}
      >
        JS
      </span>
      <div className="flex gap-8">
        {["About", "Discography", "Game Audio", "Contact"].map((link) => (
          <span
            key={link}
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              cursor: "pointer",
            }}
          >
            {link}
          </span>
        ))}
      </div>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-green-muted)",
          border: "1px solid rgba(184,201,176,0.3)",
          padding: "4px 10px",
          borderRadius: "2px",
        }}
      >
        LT / EN
      </span>
    </nav>
  );
}
